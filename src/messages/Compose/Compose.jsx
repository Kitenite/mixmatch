import React, {useState} from 'react';
import './Compose.css';

export default function Compose(props) {
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
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