import React from "react";
import ComponentB from "./ComponentB";

const ComponentA = (props) => {
  return (
    <div>
      ComponentA
      <ComponentB name={props.name} />
    </div>
  );
};

export default ComponentA;
