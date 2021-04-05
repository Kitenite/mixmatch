import React, {useEffect, useState} from 'react';
import Compose from '../Compose/Compose';
import Message from '../Message/Message';
import moment from 'moment';

import './MessageList.css';
import Toolbar from '../Toolbar/Toolbar';

const MY_USER_ID = 'apple';

export default function MessageList(props) {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    getActiveMessages();
  },[props.activeConvoID])

  // var tempMessages = [
  //   {
  //     messages: [{
  //       id: 1,
  //       author: 'apple',
  //       message: 'We have the best conversation, am I right?',
  //       timestamp: new Date().getTime()
  //     },
  //     {
  //       id: 2,
  //       author: 'orange',
  //       message: 'We sure do. In fact, this long text message is even wrapped because it is so long that it needs to be done. I literally cannot think of any way to send this message in a shorter format',
  //       timestamp: new Date().getTime()
  //     }]
  //   },
  //   {
  //     messages: [{
  //       id: 1,
  //       author: 'apple',
  //       message: 'This is a different conversation',
  //       timestamp: new Date().getTime()
  //     },
  //     {
  //       id: 2,
  //       author: 'orange',
  //       message: 'It sure is',
  //       timestamp: new Date().getTime()
  //     }]
  //   }

  // ]
  
  const getActiveMessages = () => {
    const activeConvo = props.convoList.find(convo => convo.id === props.activeConvoID);
    setMessages(activeConvo.messages.items)
  }

  const addMessage = (message) => {
    const newMessage = {
      id: 1,
      author: 'apple',
      message: message,
      timestamp: new Date().getTime()
    }
    setMessages([...messages, newMessage])
  }

  const renderMessages = () => {
    let i = 0;
    let messageCount = messages.length;
    let tempMessages = [];

    while (i < messageCount) {
      let previous = messages[i - 1];
      let current = messages[i];
      let next = messages[i + 1];
      let isMine = current.author === MY_USER_ID;
      let currentMoment = moment(current.timestamp);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        let previousMoment = moment(previous.timestamp);
        let previousDuration = moment.duration(currentMoment.diff(previousMoment));
        prevBySameAuthor = previous.author === current.author;
        
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
        nextBySameAuthor = next.author === current.author;

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

    return tempMessages;
  }

    return(
      <div className="message-list">
        <Toolbar
          title={ props.activeConvoName }
        />
        <div className="message-list-container">{renderMessages()}</div>
        <Compose addMessage={addMessage}/>
      </div>
    );
}