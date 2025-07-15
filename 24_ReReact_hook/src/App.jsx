import { useRahul } from "./useRahul";
import "./App.css";
import { useGetWindowSize } from "./utility";

function App() {
  const size = useGetWindowSize();

  const name = useRahul();

  return (
    <>
      <h1>
        Hi... , Count : {size} {name}
      </h1>
    </>
  );
}

export default App;
