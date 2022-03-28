import React from "react";

const Button = (props) => {
  return (
    <button className="button" onClick={props.function}>
      {props.text}
    </button>
  );
};

export default Button;
