import React, { Component } from 'react';

class ClassClick extends Component {
  //event handler
  clickHandler() {
    console.log('You Clicked the button');
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Class Click</button>
      </div>
    );
  }
}

export default ClassClick;
