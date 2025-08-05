import React, { useContext } from "react";
import { CountContext } from "../kaka";

const Body = () => {
  const { count } = useContext(CountContext);
  return (
    <div>
      <h1>{count}</h1>
      <ul style={{ listStyle: "none" }}>
        <li>Kaka</li>
        <li>Shree</li>
        <li>In</li>
        <li>The</li>
        <li>House</li>
      </ul>
    </div>
  );
};

export default Body;
