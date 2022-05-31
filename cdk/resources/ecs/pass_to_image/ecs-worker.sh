#!/bin/bash

#
# Simple POV-Ray worker shell script.
#
# Uses the AWS CLI utility to fetch a message from SQS, fetch a ZIP file from S3 that was specified in the message,
# render its contents with POV-Ray, then upload the resulting .png file to the same S3 bucket.
#

region='us-east-1'
queue='https://sqs.us-east-1.amazonaws.com/158391967973/mixmatch-queue'

temp_dir='temp_dir'
raw_dir="${temp_dir}/raw_dir"
align_dir="${temp_dir}/align_dir"
latent_dir="${temp_dir}/latent_dir"
mixed_dir="${temp_dir}/mixed_dir"

upload_content () {
    zip_dir=$1
    dir_name=${zip_dir##*/}
    if [ "$(ls ${zip_dir} | wc -l)" != "0" ]; then
        echo "Zipping and uploading contents from ${zip_dir}"
        pushd ${zip_dir}
        zip -r ../$dir_name.zip *
        popd
        echo "Copying zipped dir ${zip_dir}.zip to s3://${bucket}/${zip_dir}.zip..."
        aws s3 cp ${zip_dir}.zip s3://${bucket}/${zip_dir}.zip
        
    else
        echo "No content found in ${zip_dir}"
        exit 1
    fi
}

# Fetch messages and render them until the queue is drained.
while [ /bin/true ]; do
    # Fetch the next message and extract the S3 URL to fetch the POV-Ray source ZIP from.
    echo "Fetching messages fom SQS queue: ${queue}..."
    result=$( \
        aws sqs receive-message \
            --queue-url ${queue} \
            --region ${region} \
            --wait-time-seconds 20 \
            --query Messages[0].[Body,ReceiptHandle] \
        | sed -e 's/^"\(.*\)"$/\1/'\
    )

    if [ -z "${result}" ] || [ "${result}" = "null" ]; then
        echo "No messages left in queue. Exiting."
        exit 0
    else
        echo "Message: ${result}."

        receipt_handle=$(echo ${result} | sed -e 's/^.*"\([^"]*\)"\s*\]$/\1/')
        echo "Receipt handle: ${receipt_handle}."

        bucket=$(echo ${result} | sed -e 's/^.*arn:aws:s3:::\([^\\]*\)\\".*$/\1/')
        echo "Bucket: ${bucket}."

        key=$(echo ${result} | sed -e 's/^.*\\"key\\":\s*\\"\([^\\]*\)\\".*$/\1/')
        echo "Key: ${key}."

        base=${key%.*}
        echo "Base: ${base}."

        ext=${key##*.}
        echo "Extension: ${ext}."

        prefix=${key%/*/*}
        upload_link_prefix="s3://${bucket}/${prefix}"
        echo "Upload prefix: ${upload_link_prefix}."
        
        if [ \
            -n "${result}" -a \
            -n "${receipt_handle}" -a \
            -n "${key}" -a \
            -n "${base}" -a \
            -n "${ext}" -a \
            "${ext}" = "png" \
        ]; then
            mkdir ${temp_dir}
            mkdir ${raw_dir}
            echo "Copying raw image ${key} from S3 bucket ${bucket} to ${raw_dir}"
            aws s3 cp s3://${bucket}/${key} ./${raw_dir} --region ${region}

            # align images
            echo "Aligning image..."
            mkdir ${align_dir}
            if [ "$(ls ${raw_dir} | wc -l)" != "0" ]; then
                python align_images.py ${raw_dir} ${align_dir}
                for image in `ls ${align_dir}/*.png`
                do
                    echo "Uploading ${image} to ${upload_link_prefix}/alignedImage/alignedImage.png"
                    aws s3 cp ${image} ${upload_link_prefix}/alignedImage/alignedImage.png
                done
            else 
                echo "No images in ${raw_dir}"
                exit 1
            fi

            # get latent representations
            echo "Creating encoding..."
            mkdir ${latent_dir}
            if [ "$(ls ${align_dir} | wc -l)" != "0" ]; then
                python get_latent_from_image.py ${align_dir} ${latent_dir}
                # upload latent representations to latent folder
                for encoding in `ls ${latent_dir}/*.npy`
                do
                    echo "Uploading ${encoding} to ${upload_link_prefix}/encoding/encoding.npy"
                    aws s3 cp ${encoding} ${upload_link_prefix}/encoding/encoding.npy
                done

            else 
                echo "No images in ${align_dir}"
                exit 1
            fi

            # Pull every (10) users with encoding, mix encodings and create matches with new encoding information
            echo "Creating matches..."
            userID=${prefix#*/}
            python create_matches.py "${userID}" "${bucket}" "${latent_dir}"

            # mkdir ${mixed_dir}
            # if [ "$(ls ${align_dir} | wc -l)" != "0" ]; then
            #     python mix_latents.py ${latent_dir} ${mixed_dir}
            #     # upload mixed images into mixed folder of bucket
            #     zip_dir_content ${mixed_dir}
            # else 
            #     echo "No latent representations in ${latent_dir}"
            #     exit 1
            # fi

            echo "Success! Cleaning up..."
            /bin/rm -rf ${temp_dir}

            echo "Deleting message..."
            aws sqs delete-message \
                --queue-url ${queue} \
                --region ${region} \
                --receipt-handle "${receipt_handle}"

        else
            echo "ERROR: Could not extract S3 bucket and key from SQS message."
        fi
    fi
done