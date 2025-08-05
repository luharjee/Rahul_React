import { createContext, useState } from "react";

const CountContext = createContext();

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(1);
  const increse = () => setCount((c) => c + 1);

  return (
    <CountContext.Provider value={{ count, increse }}>
      {children}
    </CountContext.Provider>
  );
};

export { CountContext };
