import React from 'react';

class MessageComponent extends React.Component {
  constructor(props) {
    super(props);
    let { message } = this.props
    this.state = {
      message: message,
      clickCount: 0,
      sender: 'Abraham Lincoln'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let { clickCount } = this.state
    let newClickCount = clickCount + 1;
    this.setState({ clickCount: newClickCount })
  }

  render() {
    let { message, clickCount, sender } = this.state;
    return (
      <div onClick={this.handleClick}>
        <h1>Component Message: {message}</h1>
        <h1>Component Click Count: {clickCount}</h1>
        <h1>Component Sender: {sender}</h1>
      </div>
    )
  }
}

export default MessageComponent;
