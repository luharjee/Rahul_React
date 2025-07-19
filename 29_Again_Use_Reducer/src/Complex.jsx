import React, { useReducer } from "react";

const Complex = () => {
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
      case "RESET":
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
      type: "RESET",
    });
  };

  return (
    <div>
      <h1>Complex</h1>
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
        type="password"
        placeholder="Enter your password"
        name="pass"
        value={state.pass}
        onChange={handleChange}
      />
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Complex;
