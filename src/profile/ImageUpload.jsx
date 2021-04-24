import { useState, useEffect } from 'react';
import { Storage } from 'aws-amplify';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import S3ImageViewer from './S3ImageViewer';

const ImageUpload = (props) => {
  
  const [fileURL, setFileURL] = useState()

  useEffect(() => {
}, [fileURL]);

  const styles = {
    width:500, 
    height:500,
    objectFit:"scale-down"
  }

  const  dataURLtoFile = (dataurl, filename) => {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type:mime});
    }

  const uploadRawImage = () => {
    console.log(`Uploading image to S3`)
    var uploadFile = dataURLtoFile(fileURL, 'uploadImage.png');
    Storage.put(`${props.user.id}/rawImage/rawImage.png`, uploadFile, {
        level: 'public',
        contentType: 'image/png'
    })
    .then (result => console.log(result))
    .catch(err => console.log(err));
  }

  const handleTakePhoto = (dataURI) => {
    setFileURL(dataURI)
  }
  const resetImage = () => {
    setFileURL()
  }

  const imageHandler = <div>
      <img src={fileURL} style={styles} alt={"preview URL"} />
      <button onClick={uploadRawImage}>Upload Image</button>
      <button onClick={resetImage}>Take Another Photo</button>
  </div>
  
  return (
    <div>
      <div style={{ display: fileURL ? 'none' : null }} >
        <Camera onTakePhoto={ (dataUri) => { handleTakePhoto(dataUri); } } />
      </div>
      {fileURL ? imageHandler : null}
      {/* <S3ImageViewer imageKey={props.user.image}/> */}
    </div>
  );
}
export default ImageUpload