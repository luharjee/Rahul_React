import React, { useContext } from "react";
import { DataContext } from "../ShreeKaka";

const Muna = () => {
  const { data } = useContext(DataContext);
  return (
    <div>
      <h1 className="text-black text-8xl uppercase">{data}</h1>
    </div>
  );
};

export default Muna;
