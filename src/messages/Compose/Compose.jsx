import React from 'react';
import './Compose.css';

export default function Compose(props) {
  console.log(props.rightItems)
    return (
      <div className="compose">
        <input
          type="text"
          className="compose-input"
          placeholder="Type a message"
        />

        {
          props.rightItems
        }
      </div>
    );
}