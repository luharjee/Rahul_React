import "./App.css";
import List from "./List";
import NewList from "./NewList";

function App() {
  // const fruits = [
  //   { id: 1, name: "Apple", calorie: 100 },
  //   { id: 2, name: "Mango", calorie: 110 },
  //   { id: 3, name: "Pineapple", calorie: 99 },
  //   { id: 4, name: "Banana", calorie: 123 },
  //   { id: 5, name: "Coconut", calorie: 132 },
  //   { id: 6, name: "Orange", calorie: 90 },
  // ];

  // const vegetables = [
  //   { id: 1, name: "Potato", calorie: 100 },
  //   { id: 2, name: "CauliFlower", calorie: 110 },
  //   { id: 3, name: "Tomato", calorie: 99 },
  //   { id: 4, name: "Carrot", calorie: 123 },
  //   { id: 5, name: "Radish", calorie: 132 },
  //   { id: 6, name: "Yellow", calorie: 90 },
  // ];

  const vegetables = [
    { id: 1, name: "Tomato", calorie: 111 },
    { id: 2, name: "Potato", calorie: 99 },
    { id: 3, name: "Onion", calorie: 78 },
    { id: 4, name: "Coriender", calorie: 67 },
    { id: 5, name: "Walking", calorie: 100 },
  ];

  return (
    <>
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      <NewList item={vegetables} category="Vegetables" />
      {/* {fruits.length > 0 && <List item={fruits} category="Fruits" />}
      {fruits.length > 0 && <List item={fruits} category="Fruits" />}
      {vegetables.length > 0 && (
        <List item={vegetables} category="Vegetables" />
      )}
      {vegetables.length > 0 && (
        <List item={vegetables} category="Vegetables" />
      )} */}
    </>
  );
}

export default App;
