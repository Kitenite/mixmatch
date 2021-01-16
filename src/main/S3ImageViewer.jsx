import { Storage } from 'aws-amplify'
import { useState, useEffect } from 'react';

function S3ImageViewer(props){
    const imageKey = props.imageKey
    const [imageFile, setImageFile] = useState()

    const styles = {
        width:500, 
        height:500,
        objectFit:"scale-down"
    }

    useEffect(() => {
        // Update the document title using the browser API
        if (imageKey){
            getImage()
        } 
    });

    const getImage = async () => {
        // Remove prefix
        const truncatedImage = imageKey.replace(/^(public\/)/,"");
        Storage.get(truncatedImage)
        .then(url => {
            var myRequest = new Request(url);
            fetch(myRequest).then(function(response) {
            if (response.status === 200) {
                console.log(url)
                setImageFile(url);
            }
            });
      })
      .catch(err => console.log(err));
    }

    return (
        <div>
            <img src={imageFile} style={ styles }/>        
        </div>
    )
}

export default S3ImageViewer