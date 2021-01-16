import ImageUpload from '../main/ImageUpload'
import React, { useState, useEffect } from 'react';
import { Storage } from 'aws-amplify'

function ProfilePage(props){
    const user = props.user

    const [imageFile, setImageFile] = useState()

    useEffect(() => {
        // Update the document title using the browser API
        getImage()
      });

    const getImage = async () => {
        console.log(user.image)
        // Remove pre
        Storage.get('521ca434-fb84-4873-8488-4f5196e5768c/rawImage/rawImage.png')
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
            <h1>Hello {user.name}</h1>
            <h1>Email: {user.email}</h1>
            <h1>Raw Image: {user.image}</h1>
            <img src={imageFile}/>
            <ImageUpload user={user}/>
            <div>{props.children}</div>
        </div>
    )
}
export default ProfilePage