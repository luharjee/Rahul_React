import React from "react";

export const Drill = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <div>{props.children}</div>
    </div>
  );
};
