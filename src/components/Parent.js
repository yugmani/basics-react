import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  constructor(props){
    super(props)

    this.state = {
      parentName = 'Mom & Dad'
    }

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(){
    console.log(`Hello ${this.state.parentName}`);
  }

  render(){
    return (
      <div>  
        <Child />
      </div>
    )
  }
}

export default Parent;