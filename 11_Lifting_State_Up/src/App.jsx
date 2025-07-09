import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [name, setName] = useState("");
  return (
    <>
      <h1>Learning Lifting Step Up</h1>
      <Card name={name} setName={setName} />
      <h2>I am inside parent : {name}</h2>
    </>
  );
}

export default App;
