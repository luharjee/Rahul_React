import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <h1>Hello, RAhul How are you</h1>
      <input type="text" placeholder="NAme your name" />
      <button>Add</button>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
