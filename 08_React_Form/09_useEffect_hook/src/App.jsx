import "./App.css";
import UseEffect from "./UseEffect";
import { useState } from "react";

function App() {
  const [state, setState] = useState(true);
  return (
    <>
      <button
        onClick={() => {
          setState(!state);
        }}
      >
        Toggle
      </button>
      {state && <UseEffect />}
    </>
  );
}

export default App;
