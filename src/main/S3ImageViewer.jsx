import { useState, useEffect } from 'react';
import resolveImage from '../helpers/resolveImage';

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
            resolveImage(imageKey).then(url => {
                setImageFile(url)
            })
        } 
    });

    return (
        <div>
            <img src={imageFile} style={ styles }/>        
        </div>
    )
}

export default S3ImageViewer