import React, {useState} from 'react';
import { createMessage } from '../../user/GraphOperations';
import './Compose.css';

export default function Compose(props) {
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    createMessage("f655f338-4c83-41fd-934b-3c76862e0574", "35180c22-1f51-4b69-87eb-035577d691dc", message)
    props.addMessage(message)
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