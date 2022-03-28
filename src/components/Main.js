import React, { Component } from "react";

// import Button from "./Button";
// import Counter from "./Counter";

class Main extends Component {
  state = {
    counter: 0,
  };

  render() {
    return (
      <main className="main">
        <div className="counter">
          <h1 className="count">{this.state.counter}</h1>
        </div>
        <div className="buttons">
          <button onClick={clickHandler}>Add five</button>
          <button onClick={clickHandler}>Add one</button>
          <button onClick={clickHandler}>Reset</button>
          <button onClick={clickHandler}>Remove one</button>
          <button onClick={clickHandler}>Remove five</button>
        </div>
      </main>
    );
  }
}

const clickHandler = () => {
  console.log("clicked");
};

export default Main;
