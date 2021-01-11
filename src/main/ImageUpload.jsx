import React from 'react';
import { Storage } from 'aws-amplify';
class ImageUpload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.uploadRawImage = this.uploadRawImage.bind(this)
  }
  handleChange(event) {
    const uploadedFile =  event.target.files[0]
    const fileType = uploadedFile.type
    if (fileType == 'image/png'){
        this.setState({
            file: URL.createObjectURL(uploadedFile)
        })
    } else {
        alert("Only PNG files supported")
    }
  }

  uploadRawImage(){
    console.log(`Uploading image to S3`)
    console.log(this.state.file)
    Storage.put('rawImage.png', this.state.file, {
        level: 'protected',
        contentType: 'text/plain'
    })
    .then (result => console.log(result))
    .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <input type="file" accept="image/png" onChange={this.handleChange} capture/>
        {this.state.file ? <button onClick={this.uploadRawImage}>Upload Image</button> : ''}
        <img src={this.state.file}/>
      </div>
    );
  }
}
export default ImageUpload