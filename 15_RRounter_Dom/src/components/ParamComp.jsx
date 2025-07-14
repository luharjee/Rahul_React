import React from "react";
import { useParams } from "react-router-dom";

const ParamComp = () => {
  const params = useParams();

  console.log(params);
  return (
    <div>
      <h1>Mera naam : {params.id}</h1>
    </div>
  );
};

export default ParamComp;
