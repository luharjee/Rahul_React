import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div>
      Home is in Kaka Shree
      <button onClick={handleClick}>Move to About</button>
    </div>
  );
};

export default Home;
