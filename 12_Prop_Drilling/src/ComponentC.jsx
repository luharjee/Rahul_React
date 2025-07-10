import React from "react";
import ComponentD from "./ComponentD";

const ComponentC = (props) => {
  return (
    <div>
      ComponentC
      <ComponentD name={props.name} />
    </div>
  );
};

export default ComponentC;
