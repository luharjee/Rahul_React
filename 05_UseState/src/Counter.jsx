import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handlleAdd = () => {
    setCount((c) => c + 1);
  };

  const handleSub = () => {
    setCount((c) => c - 1);
  };

  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Counter is What I need in life.</h1>
      <h2>Count : {count}</h2>
      <br />
      <button onClick={handlleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
