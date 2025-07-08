import React from "react";
import Rosi from "./Rosi";
import UserCard from "./components/UserCard";

const App = () => {
  return (
    <div>
      <h1>Props in React...</h1>
      <Rosi name="Rosi" age={21} classo="IT" />
      <Rosi name="Rahul" age={22} classo="CSE" />
      <Rosi name="Ramjay" age={23} classo="CA" />
      <UserCard />
    </div>
  );
};

export default App;
