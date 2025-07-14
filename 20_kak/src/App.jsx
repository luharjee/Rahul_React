import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let val = useRef(1);

  const handleUpdate = () => {
    setCount((c) => c + 1);
    val.current = val.current + 1;
    console.log(val.current);
  };

  useEffect(() => {
    console.log("I am Rahul Sah from Nepal");
  });

  let btnRef = useRef();

  const handleChange = () => {
    btnRef.current.style.backgroundColor = "blue";
  };

  const [time, setTime] = useState(0);

  let timeRef = useRef(null);

  const startBtn = () => {
    timeRef.current = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
  };

  const stopBtn = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };

  const resetBtn = () => {
    stopBtn();
    setTime(0);
  };

  return (
    <>
      <h1>Kaka Shree</h1>
      <h1>Count : {count}</h1>
      <button ref={btnRef} onClick={handleUpdate}>
        Update Value
      </button>
      <br />
      <br />
      <button onClick={handleChange}>Change Above Button</button>
      <br />
      <br />

      <h1>Time Dekhao Seconds Me : {time}</h1>
      <button onClick={startBtn}>Start</button>
      <button onClick={stopBtn}>Stop</button>
      <button onClick={resetBtn}>Reset</button>
    </>
  );
}

export default App;
