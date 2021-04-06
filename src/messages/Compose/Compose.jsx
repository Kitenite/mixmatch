import React, {useState} from 'react';
import { createMessage } from '../../user/GraphOperations';
import './Compose.css';

export default function Compose(props) {
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    createMessage("f655f338-4c83-41fd-934b-3c76862e0574", "c8e6ba55-fd86-4f17-b1a0-7aaaa1936a93", message)
    const newMessage = {
      id: 0,
      senderID: "c8e6ba55-fd86-4f17-b1a0-7aaaa1936a93",
      content: message,
      createdAt: new Date().toISOString()
    }
    props.addMessage(newMessage)
    setMessage('')
    event.preventDefault();
  }

  const handleChange = (event) => {
    setMessage(event.target.value)
  }

  return (
    <div className="compose">
      <form 
        onSubmit={handleSubmit} 
        className="compose-form">
        <input
          value={message}
          onChange={handleChange}
          type="text"
          className="compose-input"
          placeholder="Type a message"
        />
      </form>
    </div>
  );
}