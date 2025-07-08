import React from "react";

const List = (props) => {
  const itemList = props.item;

  const category = props.category;

  //   fruits.sort((a, b) => a.name.localeCompare(b.name));
  //   fruits.sort((a, b) => b.name.localeCompare(a.name));
  //   fruits.sort((a, b) => a.calorie - b.calorie);
  //   fruits.sort((a, b) => b.calorie - a.calorie);

  //   const lowCalFruits = fruits.filter((fruit) => fruit.calorie < 100);
  //   const highCalFruits = fruits.filter((fruit) => fruit.calorie > 100);

  const listFruits = itemList.map((item) => (
    <li key={item.id}>
      {" "}
      {item.name} :&nbsp; {item.calorie}
    </li>
  ));

  return (
    <div>
      <h1>{category}</h1>
      <ol>{listFruits}</ol>
    </div>
  );
};

export default List;
