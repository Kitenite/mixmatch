import React, {useState} from 'react';
import { createMessage } from '../../user/GraphOperations';
import './Compose.css';

export default function Compose(props) {
  const [message, setMessage] = useState('')
 
  const handleSubmit = (event) => {
    createMessage(props.activeConvo.matchID, props.user.id, message)
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