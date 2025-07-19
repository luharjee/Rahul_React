import { useReducer } from "react";
import "./App.css";
import Complex from "./Complex";

function App() {
  // const initialState = {
  //   count: 0,
  // };

  // const reducerFn = (state, action) => {
  //   console.log(state, "state");
  //   console.log(action, "action");
  //   switch (action.type) {
  //     case "Increment":
  //       return { count: state.count + 1 };
  //     case "Decrement":
  //       return { count: state.count - 1 };
  //     case "Reset":
  //       return { count: 0 };
  //     default:
  //       return state;
  //   }
  // };

  // const [state, dispatch] = useReducer(reducerFn, initialState);

  return (
    <>
      {/* <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
      <h1>{state.count}</h1> */}
      <Complex />
    </>
  );
}

export default App;
