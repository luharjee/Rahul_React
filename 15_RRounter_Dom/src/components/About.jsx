import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      About
      <button onClick={handleClick}>Move to Dashboard</button>
    </div>
  );
};

export default About;
