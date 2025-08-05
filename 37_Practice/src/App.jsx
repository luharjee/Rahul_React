import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState(1);

  const handleAdd = () => {
    setName(name + 1);
  };
  const fruits = ["Mango", "Apple", "Pineapple", "Watermelon", "coconut"];

  const listFruits = fruits.map((fruit) => <li>{fruit}</li>);

  useEffect(() => {
    console.log("Kaka Shree");

    return () => {
      console.log(name);
    };
  });

  useEffect(()=>{},[])

  useEffect(() => {
    console.log(
      "Rahul is not working hard so his family will be in same condition as he had seen then and what he doing nothing"
    );
  }, [name]);

  return (
    <>
      <button onClick={handleAdd}>{name}</button>
      <h1>KakaShree is doing</h1>
      <ol>{listFruits}</ol>
    </>
  );
}

export default App;
