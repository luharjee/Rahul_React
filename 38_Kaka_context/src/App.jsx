import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChildA from "./components/ChildA";
import { createContext, useReducer, useState } from "react";

const KaamContext = createContext();

function App() {
  const [kaam, setKaam] = useState("Coding");

  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const reducerFn = (state, action) => {
    switch (action.type) {
      case "UPDATE":
        return {
          ...state,
          [action.payload.field]: action.payload.value,
        };

      case "RESET":
        return initialState;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFn, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE",
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleReset = () => {
    dispatch({
      type: "RESET",
    });
  };

  return (
    <>
      <div>
        <KaamContext.Provider value={kaam}>
          <ChildA />
        </KaamContext.Provider>
      </div>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>

      <input
        type="text"
        placeholder="Enter your name"
        value={state.name}
        name="name"
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Enter your email"
        value={state.email}
        name="email"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={state.password}
        name="password"
        onChange={handleChange}
      />

      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;

export { KaamContext };
