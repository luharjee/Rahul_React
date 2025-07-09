import React, { useState } from "react";
import { useEffect } from "react";

const CounterYo = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((c) => c + 1);
  };

  //   useEffect(() => {
  //     alert("I am a don");
  //   });

  //   useEffect(() => {
  //     alert("Count altered");
  //   }, []);

  //   useEffect(() => {
  //     alert("Clicked...PPP");
  //   }, [count]);

  useEffect(() => {
    console.log("Thanku", count);

    return () => {
      console.log("Na kha", count);
    };
  }, [count]);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleCount}>Add</button>
    </div>
  );
};

export default CounterYo;
