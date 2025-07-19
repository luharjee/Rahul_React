import { useReducer } from "react";
import "./App.css";

function App() {
  const initialState = {
    count: 0,
  };

  const reducerFn = (state, action) => {
    switch (action.type) {
      case "Increment":
        return {
          count: state.count + 1,
        };

      case "Decrement":
        return {
          count: state.count - 1,
        };

      case "Reset":
        return {
          count: 0,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFn, initialState);

  return (
    <>
      <h1>KakaShree Firse Sikhrahe hai useReducer</h1>
      <h2> {state.count}</h2>
      <button
        onClick={() =>
          dispatch({
            type: "Increment",
          })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "Decrement",
          })
        }
      >
        Decrement
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "Reset",
          })
        }
      >
        Reset
      </button>
    </>
  );
}

export default App;
