import React, { Component, useDebugValue } from "react";

import Button from "../UI components/Button";
import classes from "./Main.module.css";

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
    this.state.counter - 5 >= 0
      ? this.setState({
          counter: this.state.counter - 5,
        })
      : this.setState({ counter: 0 });
  };

  removeOneHandler = () => {
    this.state.counter - 1 >= 0
      ? this.setState({
          counter: this.state.counter - 1,
        })
      : this.setState({ counter: 0 });
  };

  resetHandler = () => {
    this.setState({
      counter: this.state.counter - this.state.counter,
    });
  };

  render() {
    let counterClass = "counter";

    if (this.state.counter === 0) {
      counterClass = "counter";
    } else if (this.state.counter % 2 === 0) {
      counterClass += " even";
    } else {
      counterClass += " odd";
    }

    return (
      <main className={classes.main}>
        <div className={counterClass}>
          <h1 className="count">{this.state.counter}</h1>
        </div>
        <div className="buttons">
          <Button click={this.addFiveHandler}>Add five</Button>
          <Button click={this.addOneHandler}>Add one</Button>
          <Button click={this.resetHandler}>Reset</Button>
          <Button click={this.removeOneHandler}>Remove one</Button>
          <Button click={this.removeFiveHandler}>Remove five</Button>
        </div>
      </main>
    );
  }
}

export default Main;
