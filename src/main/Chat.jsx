import React from 'react';
import { ChatFeed, Message } from 'react-chat-ui';

const users = {
  You: 0,
  Other: 'Your match'
};

const styles = {
    container:{
        paddingLeft: 50,
        paddingRight: 50
    },
    input:{
        width:'98%',
        height:30,
        border: '2px solid #ddd',
        borderRadius: 50,
        paddingLeft: '1%',
        paddingRight: '1%'
    },
    inputFocus:{
        border: '1px solid #f19e38'
    }
}
class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [
        new Message({ id: users.Other, message: 'Hello Kiet!', senderName: users.Other })
      ],
      curr_user: users.You,
    };
  }

  onMessageSubmit(e) {
    const input = this.message;
    e.preventDefault();
    if (!input.value) {
      return false;
    }
    this.pushMessage(this.state.curr_user, input.value);
    input.value = '';
    return true;
  }

  pushMessage(recipient, message) {
    const prevState = this.state;
    const newMessage = new Message({
      id: recipient,
      message,
      senderName: users[recipient],
    });
    prevState.messages.push(newMessage);
    this.setState(this.state);
  }

  render() {
    return (
      <div className="container" >
        <div className="chatfeed-wrapper" style={styles.container}>
          <ChatFeed
            maxHeight={250}
            messages={this.state.messages} // Boolean: list of message objects
            showSenderName
          />

          <form onSubmit={e => this.onMessageSubmit(e)} >
            <input
              ref={m => {
                this.message = m;
              }}
              style={styles.input}
              placeholder="Type a message..."
              className="message-input"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Chat