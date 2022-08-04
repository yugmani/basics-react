import React, { Component } from 'react';
import ChildComp from './ChildComp';

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: 'Mom & Dad',
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent() {
    console.log(`Hello ${this.state.parentName}`);
  }

  render() {
    return (
      <div>
        <ChildComp />
      </div>
    );
  }
}

export default ParentComp;
