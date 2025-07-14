import { createContext, useState } from "react";
import "./App.css";
import ChildA from "./components/ChildA";

//step1 :  Creating context

// const UserContext = createContext();

// Step2 : Wrap all the child in provider

// Step3 : Pass values

// Step4: consumer ke andar jake consume karlo

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  // const [user, setUser] = useState({ name: "Rahul" });

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div style={{ backgroundColor: theme }}>
          <ChildA />
        </div>
      </ThemeContext.Provider>
      {/* <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider> */}
    </>
  );
}

export default App;

// export { UserContext };
export { ThemeContext };
