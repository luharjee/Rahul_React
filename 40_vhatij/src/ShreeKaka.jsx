import { useState, createContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState("Anish Munna");

  const beta = () => setData("Anish");

  return (
    <DataContext.Provider value={{ data, beta }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext };
