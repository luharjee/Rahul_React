import { useState } from "react";
import Button from "./Button";
import { Drill } from "./Drill";
import ComponentA from "./ComponentA";

function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <ComponentA name="Rosi Shrestha" />
      {/* <Drill name="Kaka Shree">
        <h1>Namaste kaka</h1>
        <p>Are you learning ?</p>
        <h3>Ya beta</h3>
      </Drill>

      <br />
      <br />
      <Button handleClick={handleCount}>
        <h1>{count}</h1>
      </Button> */}
    </>
  );
}

export default App;
