import React, {useState, useEffect} from 'react';
import ConversationSearch from '../ConversationSearch/ConversationSearch';
import ConversationListItem from '../ConversationListItem/ConversationListItem';
// import Toolbar from '../Toolbar';
// import ToolbarButton from '../ToolbarButton';
// import axios from 'axios';

import './ConversationList.css';

export default function ConversationList(props) {
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    getConversations()
  }, [])

 const getConversations = () => {
    setConversations(props.conversationList)
  }
  
  return (
    <div className="conversation-list">
      <ConversationSearch />
      {
        conversations.map(conversation =>
            <ConversationListItem
              key={conversation.name}
              data={conversation}
              convoID={conversation.id}
              activeConvoID={props.activeConvoID}
              setActiveConvoID={props.setActiveConvoID}
            />
        )
      }
    </div>
  );
}