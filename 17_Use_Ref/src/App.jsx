import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);

  let timerRef = useRef(null);

  let btnRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  // const [count, setCount] = useState(0);

  // let btnRef = useRef();

  // let val = useRef(0);

  // useEffect(() => {
  //   console.log("State Changed ", count);
  // });

  // const handleClick = () => {
  //   setCount((c) => c + 1);
  //   val.current = val.current + 1;
  //   console.log("Value", val.current);
  // };

  // const changeColor = () => {
  //   btnRef.current.style.backgroundColor = "blue";
  //   console.log(btnRef.current);
  // };

  const changeColor = () => {
    btnRef.current.style.backgroundColor = "brown";
  };

  return (
    <>
      <div>
        <h1>StopWatch : {time} seconds</h1>
        <button ref={btnRef} onClick={startTimer}>
          Start
        </button>
        <br />
        <br />
        <button onClick={stopTimer}>Stop</button>
        <br />
        <br />
        <button
          onClick={() => {
            resetTimer(), changeColor();
          }}
        >
          Reset
        </button>
      </div>
      {/* <h1>Kaka Shree learning Use Ref Hook in React</h1>
      <h2>Count : {count}</h2>
      <button ref={btnRef} onClick={handleClick}>
        Dabao
      </button>
      <br />
      <button onClick={changeColor}>Change Color of first button</button> */}
    </>
  );
}

export default App;
