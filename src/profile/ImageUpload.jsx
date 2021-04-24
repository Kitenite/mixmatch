import React from 'react';
import { Storage } from 'aws-amplify';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import S3ImageViewer from './S3ImageViewer';


class ImageUpload extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      fileURL: null,
      file:null,
      user:props.user
    }
    console.log(this.state.user)
    this.handleChange = this.handleChange.bind(this)
    this.uploadRawImage = this.uploadRawImage.bind(this)
  }
  handleChange(event) {
    const uploadedFile =  event.target.files[0]
    this.setState({
      fileURL: URL.createObjectURL(uploadedFile),
      file: uploadedFile
    })
  }

  uploadRawImage(){
    console.log(`Uploading image to S3`)
    console.log(this.state.file)
    Storage.put(`${this.state.user.id}/rawImage/rawImage.png`, this.state.file, {
        level: 'public',
        contentType: 'image/png'
    })
    .then (result => console.log(result))
    .catch(err => console.log(err));
  }

  handleTakePhoto (dataUri) {
    console.log(dataUri);
    this.setState({
      fileURL: dataUri
    })
  }

  render() {
    const styles = {
      width:500, 
      height:500,
      objectFit:"scale-down"
    }
    return (
      <div>
        <Camera onTakePhoto = { (dataUri) => { this.handleTakePhoto(dataUri); } } />
        <input type="file" accept="image/png" onChange={this.handleChange} capture/>
        {this.state.file ? <button onClick={this.uploadRawImage}>Upload Image</button> : ''}
        <img src={this.state.fileURL} style={styles} />
      </div>
    );
  }
}
export default ImageUpload