// src/components/Counter.js
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>🧮 React Class Component Example</h2>
        <h3>Current Count: {this.state.count}</h3>
        <button onClick={this.increment}>➕ Increment</button>
        <button onClick={this.decrement} style={{ margin: "0 10px" }}>
          ➖ Decrement
        </button>
        <button onClick={this.reset}>🔁 Reset</button>
      </div>
    );
  }
}

export default Counter;
