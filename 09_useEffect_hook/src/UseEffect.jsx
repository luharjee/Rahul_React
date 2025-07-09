import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((c) => c + 1);
  };

  const handleClick2 = () => {
    setCount((c) => c - 1);
  };

  useEffect(() => {
    console.log("Rahul Jee");

    return () => {
      console.log("Rahul is not working hard for his family");
    };
  }, []);

  useEffect(() => {
    console.log("Ek aur baar dabao button ko", count);

    return () => {
      console.log("Deleted", count);
    };
  }, [count]);

  return (
    <div>
      <h1>Learning useEffect Hook</h1>
      <h2>Count : {count}</h2>
      <button onClick={handleCount}>Add</button>
      <button onClick={handleClick2}>Sub</button>
    </div>
  );
};

export default UseEffect;
