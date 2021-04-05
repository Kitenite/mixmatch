import React, { useState, useEffect } from 'react';
import resolveImage from '../../helpers/resolveImage';
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
    getMatchesFromUser(userID).then( (matches) => {
      console.log(matches.matches.items[0])
      const newConvoList = matches.matches.items.map( (match) => {
        const newMatch = {
          photo:match.targetUser.alignedImage,
          name:match.targetUser.name,
          id:match.targetUser.id,
          messages:match.targetUser.messages,
          text:'Hello'
        }
        if (newMatch.photo){
          resolveImage(newMatch.photo).then(url => {
            newMatch.photo = url
          })
        }
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
          conversationList={convoList} 
          activeConvoID={activeConvoID}
        />
      </div>
      <div className="scrollable content">
        {/* <MessageList 
          activeConvoID={activeConvoID} 
          activeConvoName={convoList[activeConvoID].name}
        /> */}
      </div>
    </div>
  );
}