import React from "react";
// import { UserContext } from "../App";
// import { useContext } from "react";

import { TimeContext } from "../App";
import { useContext } from "react";

const ChildC = () => {
  //   const user = useContext(UserContext);

  const time = useContext(TimeContext);

  return (
    <div>
      {/* <h1>{user.name}</h1> */}
      <h1>
        <i>
          <b>{time}</b>
        </i>
      </h1>
    </div>
  );
};

export default ChildC;
