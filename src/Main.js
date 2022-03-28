import React from "react";
import Button from "./Button";
import Counter from "./Counter";

const Main = () => {
  return (
    <main className="main">
      <Counter count="0" />
      <div className="buttons">
        <Button text="Add five" function="addFive" />
        <Button text="Add one" function="addOne" />
        <Button text="Reset" function="reset" />
        <Button text="Remove one" function="removeOne" />
        <Button text="Remove five" function="removeFive" />
      </div>
    </main>
  );
};

export default Main;
