import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);

  // const [count, setCount] = useState(0);

  // let val = useRef(0);

  // let btnRef = useRef();

  // const handleClick = () => {
  //   val.current = val.current + 1;
  //   console.log("value = ", val.current);
  //   setCount((c) => c + 1);
  // };

  // useEffect(() => {
  //   console.log("Hanyo Ketole");
  // });

  // const handleChange = () => {
  //   btnRef.current.style.backgroundColor = "grey";
  // };

  const timeRef = useRef(null);

  const startTimer = () => {
    timeRef.current = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <>
      {/* <h1>Kaka Shree OP</h1>
      <h2>Count : {count}</h2>
      <button ref={btnRef} onClick={handleClick}>
        Age Chalo
      </button>
      <button onClick={handleChange}>Change color</button> */}

      <h1>Stopwatch : {time} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <br />
      <br />
      <button onClick={stopTimer}>Stop</button>
      <br />
      <br />

      <button onClick={resetTimer}>Reset</button>
    </>
  );
}

export default App;
