import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = (props) => {
  return (
    <div>
      ComponentB
      <ComponentC name={props.name} />
    </div>
  );
};

export default ComponentB;
