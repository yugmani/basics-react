import React, { Component } from 'react';

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Welcome Vistor',
    };
  }

  changeMessage() {
    this.setState({
      message: 'Thank you for subscribing',
      text: 'red',
    });
  }

  render() {
    return (
      <div className="welcome-section">
        <h1 className={this.state.text}>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
