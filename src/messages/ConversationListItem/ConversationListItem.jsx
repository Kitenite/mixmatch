import React, {useEffect, useState} from 'react';
import shave from 'shave';
import resolveImage from '../../helpers/resolveImage';

import './ConversationListItem.css';

export default function ConversationListItem(props) {

  const { photo, name, messages } = props.data;

  const [image, setImage] = useState(photo)

  useEffect(() => {
    shave('.conversation-snippet', 20);
    getImage()
  })

  const getImage = () => {
    resolveImage(photo).then(url => {
      setImage(url)
    })
  }


  return (
    <div className="conversation-list-item" onClick={()=>{props.setActiveConvoID(props.convoID)}}>
      <p>{props.activeConvoID == props.convoID ? 'Active' : ''}</p>
      <img className="conversation-photo" src={image} alt="conversation" />
      <div className="conversation-info">
        <h1 className="conversation-title">{ name }</h1>
        <p className="conversation-snippet">{ messages[messages.length-1].content }</p>
      </div>
    </div>
  );
}