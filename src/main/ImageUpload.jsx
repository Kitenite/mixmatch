import React from 'react';
import { Storage } from 'aws-amplify';
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
    const fileType = uploadedFile.type
    if (fileType == 'image/png'){
        this.setState({
          fileURL: URL.createObjectURL(uploadedFile),
          file: uploadedFile
        })
    } else {
        alert("Only PNG files supported")
    }
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
  render() {
    return (
      <div>
        <input type="file" accept="image/png" onChange={this.handleChange} capture/>
        {this.state.file ? <button onClick={this.uploadRawImage}>Upload Image</button> : ''}
        <img src={this.state.fileURL}/>
      </div>
    );
  }
}
export default ImageUpload