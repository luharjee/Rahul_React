import React from "react";

const NewList = (props) => {
  const fruits = [
    "Apple",
    "Mango",
    "Banana",
    "Cherry",
    "Coconut",
    "Watermelon",
  ];

  const itemProd = props.item;

  itemProd.sort((a, b) => a.name.localeCompare(b.name));

  const she = [
    { id: 1, name: "Rosi" },
    { id: 2, name: "Shrestha" },
    { id: 3, name: "6" },
    { id: 4, name: "Australia" },
  ];

  const listShe = she.map((sh) => <li key={sh.id}>{sh.name}</li>);

  const lowCalVeg = itemProd.filter((veg) => veg.calorie < 100);

  const vegList = lowCalVeg.map((veg) => (
    <li key={veg.id}>
      {veg.name} : &nbsp; {veg.calorie}
    </li>
  ));

  const listItems = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);

  return (
    <div>
      <ol>{listItems}</ol>
      <ol>{vegList}</ol>
      <ol>{listItems}</ol>
      <ol>{vegList}</ol>
      <ol>{listItems}</ol>
      <br />
      <br />
      <br />
      <br />
      <ol>{listShe}</ol>
    </div>
  );
};

export default NewList;
