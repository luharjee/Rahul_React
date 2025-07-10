import React from "react";

const Button = (props) => {
  return (
    <div>
      <div>{props.children}</div>
      <button onClick={props.handleClick}>Add</button>
    </div>
  );
};

export default Button;
