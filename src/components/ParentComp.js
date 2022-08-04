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

  greetParent(childName) {
    console.log(`Hello ${this.state.parentName} from ${childName}`);
  }

  render() {
    return (
      <div>
        <ChildComp greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComp;
