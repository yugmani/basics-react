import React, { Component } from 'react';

// class Welcome extends Component {
//   render() {
//     return (
//       <h2>
//         Welcome {this.props.person} of {this.props.group} group!!!
//       </h2>
//     );
//   }
// }

//Destructuring
class Welcome extends Component {
  render() {
    // destructuring only props
    const { person, group } = this.props;
    // destructuring state if state exists
    // const {state1, state2} = this.state;

    return (
      <h2>
        Welcome {person} of {group} group!!!
      </h2>
    );
  }
}

export default Welcome;
