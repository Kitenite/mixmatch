#!/bin/sh
zip_dir="$1"
if [ $# -eq 0 ]
then 
    echo "No argument provided, include a directory for zipping"
    exit 1
fi

git add .
git commit -m "Committing $zip_dir changes"
git push

echo "Zipping $zip_dir"
pushd $zip_dir
zip -r ../$zip_dir.zip *
popd
aws lambda update-function-code --function-name $zip_dir --zip-file fileb://$zip_dir.zip