import { useState } from "react";
import "./App.css";
import ChildA from "./components/ChildA";
import { createContext } from "react";

// const UserContext = createContext();

const TimeContext = createContext();

function App() {
  // const [user, setUser] = useState({ name: "Kaka Shree" });

  const [time, setTime] = useState(1234);

  return (
    <>
      {/* <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider> */}

      <TimeContext.Provider value={time}>
        <ChildA />
      </TimeContext.Provider>
    </>
  );
}

export default App;

// export { UserContext };

export { TimeContext };
