import boto3
import json
import os

# dir names
temp_dir                ='temp_dir'
raw_dir                 =temp_dir+'/raw_dir'
align_dir               =temp_dir+'/align_dir'
latent_dir              =temp_dir+'/latent_dir'
mixed_dir               =temp_dir+'/mixed_dir'

# AWS resources
aws_access_key_id       =os.getenv('AWS_ACCESS_KEY_ID')
aws_secret_access_key   =os.getenv('AWS_SECRET_ACCESS_KEY')
region_name             =os.getenv('AWS_REGION')
queue_name              ='mixmatch-queue'
max_queue_messages      =10
# message_bodies          =[]

# Get SQS queue
sqs = boto3.resource(
        'sqs', 
        region_name=region_name,
        aws_access_key_id=aws_access_key_id,
        aws_secret_access_key=aws_secret_access_key
    )

queue = sqs.get_queue_by_name(QueueName=queue_name)

def get_sqs_messages():
    # Check for messages and delete them
    while True:
        messages_to_delete = []
        for message in queue.receive_messages(MaxNumberOfMessages=max_queue_messages):
            
            # process message body
            body = json.loads(message.body)
            handle_message(body)
            
            # add message to delete
            messages_to_delete.append({
                'Id': message.message_id,
                'ReceiptHandle': message.receipt_handle
            })


        # if you don't receive any notifications the messages_to_delete list will be empty
        if len(messages_to_delete) == 0:
            print("No more messages found")
            break
        # delete messages to remove them from SQS queue
        else:
            print('Not deleting for now. Remember to uncomment')
            # delete_response = queue.delete_messages( Entries=messages_to_delete)
            # print("Delete messages. Reponse: ", delete_response)

def handle_message(body):
    record = body['Records'][0]
    s3_bucket_name = record['s3']['bucket']['name']
    image_key = record['s3']['object']['key']
    prefix = '/'.join(image_key.split('/')[:-2])
    upload_link_prefix=f's3://{s3_bucket_name}/{prefix}'
    print(upload_link_prefix)

def upload_content(zip_dir):
    print('upload content from' + zip_dir)

get_sqs_messages()
