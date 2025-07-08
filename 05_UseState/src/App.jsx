import "./App.css";
import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);
  console.log(count);
  console.log(setCount);

  return (
    <>
      <p>Count is : {count}</p>

      <button onClick={() => setCount((c) => c + 1)}>BAdhao</button>

      <hr />
      <br />
      <br />
      <Counter />
    </>
  );
}

export default App;
