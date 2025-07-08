import React from "react";

const Button = () => {
  const handleChange = (e) => {
    console.log("Hello RAhul");
    e.target.innerHTML = "OOUCH!!!";
    console.log(e);
  };

  const handleChange2 = (name, e) => {
    console.log(name, " Stop");
    e.target.innerHTML = "Rosi";
  };
  return (
    <div>
      {/* <button onClick={() => handleChange2("Rahul")}>Click me!</button> */}
      <button onClick={(e) => handleChange(e)}>Click me!</button>
      <button onClick={(e) => handleChange2("Kali", e)}>Help Me</button>
      <h3>Rahul SAh from Different world</h3>
    </div>
  );
};

export default Button;
