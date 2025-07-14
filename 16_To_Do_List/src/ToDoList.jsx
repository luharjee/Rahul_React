import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTask] = useState(["Wake up", "Drink Water"]);

  const handleAdd = () => {
    const kaam = document.querySelector("#todo").value;
    console.log(kaam);
    setTask([...tasks, kaam]);
    document.querySelector("#todo").value = "";
  };

  const deleteTask = (index) => {
    setTask(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input type="text" placeholder="Enter your task" id="todo" />
      <button onClick={handleAdd}>Add</button>
      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} onClick={() => deleteTask(index)}>
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
