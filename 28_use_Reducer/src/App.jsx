import { useReducer } from "react";
import "./App.css";
import UseReducer from "./UseReducer";

function App() {
  
  const initialState = {
    name: "",
    email: "",
    pass: "",
  };

  const reducerFn = (state, action) => {
    switch (action.type) {
      case "UPDATE_FORM":
        return {
          ...state,
          [action.payload.field]: action.payload.value,
        };
      case "RESET_FORM":
        return initialState;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFn, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FORM",
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleReset = () => {
    dispatch({
      type: "RESET_FORM",
    });
  };

  return (
    <>
      <h1>KakaShree Learning useReducer Hook</h1>
      <input
        type="text"
        placeholder="Enter name"
        name="name"
        value={state.name}
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter email"
        name="email"
        value={state.email}
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        type="Password"
        placeholder="Enter Password"
        name="pass"
        value={state.pass}
        onChange={handleChange}
      />
      <br />
      <br />
      <button onClick={handleReset}>Reset</button>
      {/* <UseReducer /> */}
    </>
  );
}

export default App;
