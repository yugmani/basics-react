import React, { Component } from 'react';

class EventBind extends Component {
  constructor() {
    super();

    this.state = {
      message: 'Hi! How are you?',
    };

    //official binding method
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      message: 'Goodbye!',
      event: 'event-bind',
    });
    // console.log(this);
  }

  render() {
    return (
      <div>
        <h1>Event Binding</h1>
        <p className={this.state.event}>{this.state.message}</p>
        {/* binding 'this' with bind(this) */}
        {/* <button onClick={this.clickHandler.bind(this)}>Event Click</button> */}

        {/* binding with arrow function body */}
        {/* <button onClick={() => this.clickHandler()}>Event Click</button> */}

        {/* Official binding method */}
        <button onClick={this.clickHandler}>Event Click</button>
      </div>
    );
  }
}

export default EventBind;
