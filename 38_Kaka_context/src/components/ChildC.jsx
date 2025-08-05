import React, { useContext } from "react";
import { KaamContext } from "../App";

const ChildC = () => {
  const naya = useContext(KaamContext);

  return (
    <div>
      <h1>I am a engineer and i do {naya}</h1>
    </div>
  );
};

export default ChildC;
