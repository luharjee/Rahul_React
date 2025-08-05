import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { DataProvider } from "./ShreeKaka";
import Muna from "./component/Muna";

function App() {
  return (
    <>
      <div className="flex justify-between">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <DataProvider>
        <Muna />
      </DataProvider>
    </>
  );
}

export default App;
