import { useMemo, useState } from "react";
import "./App.css";
import Kaka from "./Kaka";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  const handleCount = () => {
    setCount((c) => c + 1);
  };

  const expensiveTask = (num) => {
    console.log("Inside Expensive Task");
    for (let i = 0; i <= 1000000000; i++) {}

    return num * 2;
  };

  let doubleValue = useMemo(() => expensiveTask(input), [input]);
  return (
    <>
      <h1>Rahul Kaka Studying useMemo</h1>
      <h2>Kaka Count : {count}</h2>
      <button onClick={handleCount}>BAdhaO</button>
      <input
        type="number"
        placeholder="Enter number"
        onChange={(e) => setInput(e.target.value)}
      />
      <div>{doubleValue}</div>
      <Kaka />
    </>
  );
}

export default App;
