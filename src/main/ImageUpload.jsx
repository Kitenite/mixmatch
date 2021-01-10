import React from 'react';

class ImageUpload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    const uploadedFile =  event.target.files[0]
    const fileType = uploadedFile.type
    if (fileType == 'image/png'){
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    } else {
        alert("Only PNG files supported")
    }
  }

  UploadImageS3(){
      console.log(`Uploading ${this.state.file}`)
  }
  render() {
    return (
      <div>
        <input type="file" accept="image/png" onChange={this.handleChange}/>
        {this.state.file ? <button onClick={this.UploadImageS3}>Upload Image</button> : ''}
        <img src={this.state.file}/>
      </div>
    );
  }
}
export default ImageUpload