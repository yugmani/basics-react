import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h2>Welcome {this.props.person}!!!</h2>;
  }
}

export default Welcome;
