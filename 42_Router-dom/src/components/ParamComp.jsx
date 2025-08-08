import React from "react";
import { useParams } from "react-router-dom";

const ParamComp = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Id ja sou : {id}</h1>
    </div>
  );
};

export default ParamComp;
