import React from "react";

const Card = (props) => {
  return (
    <div>
      <input type="text" onChange={(e) => props.setName(e.target.value)} />
      {/* <h3>Hi, I am Name : {props.name}</h3> */}
    </div>
  );
};

export default Card;
