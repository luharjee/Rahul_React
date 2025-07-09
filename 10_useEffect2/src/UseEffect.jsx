import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);

  // Runs on each render
  //   useEffect(() => {
  //     alert("I am kaun");
  //   });

  // Runs on only first render

  //   useEffect(() => {
  //     alert("Ek choti matra ke!!!");
  //   }, []);

  //   Variation 3

  //   useEffect(() => {
  //     alert("I will run each time if count update");
  //   }, [count]);

  // Variation 4

  //   useEffect(() => {
  //     alert("Yesyes");
  //   }, [count, total]);

  // Variation 5

  useEffect(() => {
    console.log("Yo go maon", count);

    return () => {
      console.log("Count is unmounted from UI", count);
    };
  }, [count]);

  const handleClick = () => {
    setCount((c) => c + 1);
    setTotal((t) => t + 1);
  };

  return (
    <div>
      <h2>UseEffect</h2>
      <h1>Count : {count} </h1>
      <h3>Total : {total}</h3>
      <button onClick={handleClick}>BAdhao</button>
    </div>
  );
};

export default UseEffect;
