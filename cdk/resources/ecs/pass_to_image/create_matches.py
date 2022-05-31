import sys, uuid, shutil, os
import graph_operations

# Global var
current_user
s3_bucket
latent_dir

def create_match(target_user):
    current_user_id = current_user['id']
    target_user_id = target_user['id']
    match_id = uuid.uuid4()

    # download encoding and mix encodings
    temp_mixed_dir, temp_latent_path = create_temp_folder()
    encoding_key = target_user["encoding"].replace('/public', '')
    s3.download_file(s3_bucket, encoding_key, temp_latent_path) 
    os.system(f"python mix_latents.py {latent_dir} {temp_mixed_dir}")

    # upload mixed encoding and mixed image
    for file in os.listdir(temp_mixed_dir):
        if file.endswith(".png"):
            # Upload mixedImage to S3
            file_path = os.path.join(temp_mixed_dir, file)
            mixed_image_key = f'public/{match_id}/mixedImage/mixedImage.png'
            s3.upload_file(file_path, s3_bucket, mixed_image_key)
            graph_operations.create_match(match_id, current_user_id, target_user_id, mixed_image_key)
    
    # Clean up for the next match
    clean_up_temp_folder(temp_mixed_dir, temp_latent_path)
    

def create_temp_folder():
    # create temp folder
    temp_latent_path = latent_dir+"/temp_latent.npy"
    temp_mixed_dir = './temp_mixed'
    if os.path.exists(temp_mixed_dir):
        shutil.rmtree(temp_mixed_dir)
    os.makedirs(temp_mixed_dir)
    return (temp_mixed_dir, temp_latent_path)

def clean_up_temp_folder(temp_mixed_dir, temp_latent_path):
    shutil.rmtree(temp_mixed_dir)
    if os.path.exists(temp_latent_path):
        os.remove(temp_latent_path)

def main():
    # Get global variables
    if len(sys.argv)<4:
        sys.exit("Need: \n\t1. User ID \n\t2. S3 Bucket  \n\t3.laten_dir")
    current_user_id = sys.argv[1]
    s3_bucket = sys.argv[2]
    latent_dir = sys.argv[3]

    # Get potential matches for current_user
    current_user = graph_operations.get_user(current_user_id)
    existing_matches = current_user['matches']['items']
    target_users = graph_operations.list_users_filtered(current_user_id)

    # Check match doesn't exist already
    for target_user in target_users:
        if 'matches' in target_user.keys():
            if not any(item in existing_matches for item in target_user['matches']['items']):
                create_match(target_user)

if __name__ == "__main__":
    main()