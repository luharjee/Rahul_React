import React, { useState } from "react";

const OnChange = () => {
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [shipping, setShipping] = useState("");

  const [payment, setPayment] = useState("VISA");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleArea = (e) => {
    setArea(e.target.value);
  };

  const handlePayment = (e) => {
    setPayment(e.target.value);
  };

  const handleShipping = (e) => {
    setShipping(e.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <h2>Your Name is : {name}</h2>
      <br />
      <textarea
        onChange={handleArea}
        value={area}
        placeholder="Enter comment"
      />
      <p>Comment : {area}</p>

      <br />
      <select onChange={handlePayment}>
        <option value="">Select choice</option>
        <option value="visa">VISA</option>
        <option value="mastercard">MASTERCARD</option>
      </select>
      <h2>Payment Mode : {payment}</h2>

      <br />
      <br />
      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping == "Pick Up"}
          onChange={handleShipping}
        />
        Pick Up
      </label>

      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping == "Delivery"}
          onChange={handleShipping}
        />
        Delivery
      </label>

      <p>Shipp : {shipping}</p>
    </div>
  );
};

export default OnChange;
