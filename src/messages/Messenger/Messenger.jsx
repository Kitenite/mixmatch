import React, { useState, useEffect } from 'react';
import ConversationList from '../ConversationList/ConversationList';
import MessageList from '../MessageList/MessageList';
import './Messenger.css';

export default function Messenger(props) {

  const [activeConvoID, setActiveConvoID] = useState(1)

  const conversationList = [
    {
      photo: "https://randomuser.me/api/portraits/men/21.jpg", 
      name: "امیر مرادی", 
      text: "Hello world! This is a long message that needs to be truncated.",
      id:0
    },
    {
      photo: "https://randomuser.me/api/portraits/women/95.jpg", 
      name: "Maria Mills", 
      text: "I am maria mills, I am bot.",
      id:1
    }
  ]
  useEffect(() => {
  })
  
  return (
    <div className="messenger">
      <div className="scrollable sidebar">
        <ConversationList 
          setActiveConvoID={setActiveConvoID} 
          conversationList={conversationList} 
          activeConvoID={activeConvoID}
        />
      </div>

      <div className="scrollable content">
        <MessageList activeConvoID={activeConvoID} />
      </div>
    </div>
  );
}