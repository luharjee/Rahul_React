import React, { useState } from "react";

const Rahul = ({ name, age, place }) => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [shipping, setShipping] = useState("");

  const anotherData = () => {
    alert("No more data to show");
  };

  const handleText = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const handleShipping = (e) => {
    setShipping(e.target.value);
  };

  return (
    <div>
      <h2>About me</h2>
      <h4>Count : {count}</h4>
      <span
        style={{
          margin: "50px",
          color: "red",
          background: "yellow-transparent",
          padding: "10px",
          borderRadius: "6px",
        }}
      >
        X
      </span>
      <h3>From Nepal trying out different thing to make an impact</h3>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <div
        className="portfolio"
        style={{
          border: "3px solid yellow",
          borderRadius: "15px",
          marginTop: "10px",
        }}
      >
        <h1>Name : {name}</h1>
        <h2>Age : {age}</h2>
        <h3>Place : {place}</h3>
      </div>

      <button className="mt-20" onClick={anotherData}>
        Dusra
      </button>
      <input
        type="text "
        placeholder="Enter the name"
        onChange={(e) => handleText(e)}
      />
      <h5>{text}</h5>

      <input
        type="radio"
        value="delivery"
        checked={shipping === "delivery"}
        onChange={handleShipping}
      />

      <input
        type="radio"
        value="pickup"
        checked={shipping === "pickup"}
        onChange={handleShipping}
      />
      <p>Shipping : {shipping}</p>
    </div>
  );
};

export default Rahul;
