import React, {useEffect} from 'react';
import shave from 'shave';

import './ConversationListItem.css';

export default function ConversationListItem(props) {
  useEffect(() => {
    shave('.conversation-snippet', 20);
  })

  const { photo, name, text } = props.data;

  return (
    <div className="conversation-list-item" onClick={()=>{props.setActiveConvoID(props.convoID)}}>
      <p>{props.activeConvoID == props.convoID ? 'Active' : ''}</p>
      <img className="conversation-photo" src={photo} alt="conversation" />
      <div className="conversation-info">
        <h1 className="conversation-title">{ name }</h1>
        <p className="conversation-snippet">{ text }</p>
      </div>
    </div>
  );
}