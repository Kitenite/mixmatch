import React, {createRef, useEffect, useRef, useState} from 'react';
import Compose from '../Compose/Compose';
import Message from '../Message/Message';
import moment from 'moment';

import './MessageList.css';
import Toolbar from '../Toolbar/Toolbar';
import { subscribeToCreateMessage } from '../../user/GraphOperations';

export default function MessageList(props) {
  const [messages, setMessages] = useState([])
  const [activeConvo, setActiveConvo] = useState()
  const messagesEndRef = createRef()

  useEffect(() => {
    const newActiveConvo = props.convoList.find(convo => convo.id === props.activeConvoID);
    if (newActiveConvo){
      setActiveConvo(newActiveConvo)
      getActiveMessages(newActiveConvo)
    }
  },[props.activeConvoID])


  useEffect(() => {
    const newActiveConvo = props.convoList.find(convo => convo.id === props.activeConvoID);
    if (newActiveConvo){
      subscribeToNewMessages(newActiveConvo)
    }
    scrollToBottom()
  },[messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  
  const getActiveMessages = (activeConvo) => {
    setMessages(activeConvo.messages)
  }
  
  const subscribeToNewMessages = (activeConvo) => {
    subscribeToCreateMessage(activeConvo.matchID).subscribe((next) => {
      addMessage(next.value.data.onMessageCreatedByMatch)
    })
  }

  const addMessage = (message) => {
    setMessages([...messages, message])
  }

  const renderMessages = () => {
    let i = 0;
    let messageCount = messages.length;
    let tempMessages = [];

    while (i < messageCount) {
      let previous = messages[i - 1];
      let current = messages[i];
      let next = messages[i + 1];
      let isMine = current.senderID === props.user.id;
      let currentMoment = moment(current.createdAt);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        let previousMoment = moment(previous.timestamp);
        let previousDuration = moment.duration(currentMoment.diff(previousMoment));
        prevBySameAuthor = previous.senderID === current.senderID;
        
        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        let nextMoment = moment(next.timestamp);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.senderID === current.senderID;

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }
      }

      tempMessages.push(
        <Message
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}
        />
      );

      // Proceed to the next message.
      i += 1;
    }
    tempMessages.push(<div key={i} ref={messagesEndRef}></div>)
    return tempMessages;
  }

  return(
    <div className="message-list">
      <Toolbar
        title={ props.activeConvoName }
      />
      <div className="message-list-container">
        {renderMessages()}
      </div>
      { activeConvo && <Compose activeConvo={activeConvo} user={props.user} /> }
      
    </div>
  );
}