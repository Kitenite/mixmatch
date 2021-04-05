import React, {useState, useEffect} from 'react';
import ConversationSearch from '../ConversationSearch/ConversationSearch';
import ConversationListItem from '../ConversationListItem/ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
// import axios from 'axios';

import './ConversationList.css';

export default function ConversationList(props) {
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    getConversations()
  }, [])

 

 const getConversations = () => {
    // setConversations([...conversations, ...newConversations])

    setConversations(props.conversationList)
  }
    return (
      <div className="conversation-list">
        <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        />
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