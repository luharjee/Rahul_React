import React, { useMemo, useState } from "react";

const Kaka = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((c) => c + 1);
  };

  const expensiveWork = (num) => {
    console.log("India");
    for (let i = 1; i <= 1234432234; i++) {}
    return num * 4;
  };

  const value = useMemo(() => expensiveWork(23), []);

  return (
    <div>
      KakaShree
      <h1>Count : {count}</h1>
      <button onClick={handleCount}>Add</button>
      <h3>VAlue: {value}</h3>
    </div>
  );
};

export default Kaka;
