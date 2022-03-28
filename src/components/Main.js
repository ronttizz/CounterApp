import React, { Component, useDebugValue } from "react";

// import Button from "./Button";
// import Counter from "./Counter";

class Main extends Component {
  state = {
    counter: 0,
  };

  addFiveHandler = () => {
    this.setState({
      counter: this.state.counter + 5,
    });
  };

  addOneHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  removeFiveHandler = () => {
    this.setState({
      counter: this.state.counter - 5,
    });
  };

  removeOneHandler = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  resetHandler = () => {
    this.setState({
      counter: this.state.counter - this.state.counter,
    });
  };

  render() {
    return (
      <main className="main">
        <div className="counter">
          <h1 className="count">{this.state.counter}</h1>
        </div>
        <div className="buttons">
          <button onClick={this.addFiveHandler}>Add five</button>
          <button onClick={this.addOneHandler}>Add one</button>
          <button onClick={this.resetHandler}>Reset</button>
          <button onClick={this.removeOneHandler}>Remove one</button>
          <button onClick={this.removeFiveHandler}>Remove five</button>
        </div>
      </main>
    );
  }
}

export default Main;
