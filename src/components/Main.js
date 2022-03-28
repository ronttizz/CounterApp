import React from "react";

import Button from "./Button";
import Counter from "./Counter";

const Main = () => {
  return (
    <main className="main">
      <Counter count="0" />
      <div className="buttons">
        <Button text="Add five" />
        <Button text="Add one" />
        <Button text="Reset" />
        <Button text="Remove one" />
        <Button text="Remove five" />
      </div>
    </main>
  );
};

export default Main;
