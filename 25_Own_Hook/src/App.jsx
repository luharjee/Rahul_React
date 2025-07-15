import "./App.css";
import { useToggle } from "./useToggle";

function App() {
  const [value, toggleValue] = useToggle(true);

  return (
    <>
      <button>Toggle</button>
      <button>Hide</button>
      <button>Show</button>
      {value ? <h1>Learning by doing and I am KakaShree</h1> : null}
    </>
  );
}

export default App;
