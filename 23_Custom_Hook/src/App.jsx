import "./App.css";
import useInternetStatus from "./useInternetStatus";

function App() {
  const isOnline = useInternetStatus();

  return (
    <>
      <h1>Custom Hook By KakaShree</h1>
      <div>{isOnline ? "User is Online" : "USer is offline"}</div>
    </>
  );
}
export default App;
