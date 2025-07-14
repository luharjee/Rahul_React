import React, { useContext } from "react";
import { ThemeContext } from "../App";

const ChildD = () => {
  //   const user = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    if (theme == "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <div>
      <h1>{theme}</h1>
      <button onClick={handleClick}>Change theme</button>
      {/* <h1>Name : {user.name}</h1> */}
    </div>
  );
};

export default ChildD;
