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

  const conversationList = [
    {
      photo: "https://randomuser.me/api/portraits/men/21.jpg", 
      name: "امیر مرادی", 
      text: "Hello world! This is a long message that needs to be truncated."
    },
    {
      photo: "https://randomuser.me/api/portraits/women/95.jpg", 
      name: "Maria Mills", 
      text: "I am maria mills, I am bot."
    }
  ]

 const getConversations = () => {
    // axios.get('https://randomuser.me/api/?results=20').then(response => {
    //     let newConversations = response.data.results.map(result => {
    //       return {
    //         photo: result.picture.large,
    //         name: `${result.name.first} ${result.name.last}`,
    //         text: 'Hello world! This is a long message that needs to be truncated.'
    //       };
    //     });
    //     console.log(String(newConversations[0]))
    //     setConversations([...conversations, ...newConversations])

    // });
    setConversations(conversationList)
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
            />
          )
        }
      </div>
    );
}