import React, { useState, useEffect } from 'react';
import { getMatchesFromUser } from '../../user/GraphOperations';
import ConversationList from '../ConversationList/ConversationList';
import MessageList from '../MessageList/MessageList';
import './Messenger.css';

export default function Messenger(props) {

  const [activeConvoID, setActiveConvoID] = useState(0)
  const [convoList, setConvoList] = useState([]);

  useEffect(()=>{
    getConvoList()
  }, [])

  const getConvoList =  async() => {
    const userID = 'c8e6ba55-fd86-4f17-b1a0-7aaaa1936a93' //props.userID
    getMatchesFromUser(userID).then( async (matches) => {
      console.log(matches)
      const newConvoList = matches.matches.items.map( (match) => {
        const messageList = [...match.targetUser.messages.items, ...match.sourceUser.messages.items].sort((a, b) => {
          return new Date(a.createdAt) - new Date(b.createdAt);
        })
        const newMatch = {
          photo:match.targetUser.alignedImage,
          name:match.targetUser.name,
          id:match.targetUser.id,
          messages:messageList,
        }
        console.log(newMatch)
        return newMatch
      })
      setConvoList(newConvoList)
    })
  }
  // const conversationList = [
  //   {
  //     photo: "https://randomuser.me/api/portraits/men/21.jpg", 
  //     name: "Bill", 
  //     text: "Hello world! This is a long message that needs to be truncated.",
  //     id:0
  //   },
  //   {
  //     photo: "https://randomuser.me/api/portraits/women/95.jpg", 
  //     name: "Maria", 
  //     text: "I am maria, I am bot.",
  //     id:1
  //   }
  // ]
  
  return (
    <div className="messenger">
      <div className="scrollable sidebar">
        <ConversationList 
          setActiveConvoID={setActiveConvoID} 
          convoList={convoList} 
          activeConvoID={activeConvoID}
        />
      </div>
      <div className="scrollable content">
        <MessageList 
          activeConvoID={activeConvoID} 
          convoList={convoList}
        />
      </div>
    </div>
  );
}