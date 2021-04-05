import React, {useState} from 'react';
import './Compose.css';



export default function Compose(props) {
  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    setMessage(event.target.value)
  }

  const handleSubmit = (event) => {
    alert(message);
    event.preventDefault();
  }

  return (
    <div className="compose">
      <form 
        onSubmit={handleSubmit} 
        className="compose-form">
        <input
          onChange={handleChange}
          type="text"
          className="compose-input"
          placeholder="Type a message"
        />
      </form>
    </div>
  );
}