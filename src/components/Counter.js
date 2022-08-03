import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    if (this.state.count < 25) {
      this.setState(
        (prevState) => ({
          count: prevState.count + 1,
        }),
        () => {
          console.log('cb: ', this.state.count);
        }
      );
    }
  }

  decrement() {
    if (this.state.count > 0) {
      this.setState(
        {
          count: this.state.count - 1,
        },
        () => {
          console.log('cb:', this.state.count);
        }
      );
      console.log(this.state.count);
    } else return;
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <div>Count {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
        <button onClick={() => this.incrementFive()}> + Five</button>
      </div>
    );
  }
}

export default Counter;
