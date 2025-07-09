import React, { useState, useEffect } from "react";

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("You terminated the values");
    };
  }, []);

  return (
    <div>
      <h1>Seconds :: {seconds}</h1>
    </div>
  );
};

export default TimerComponent;
