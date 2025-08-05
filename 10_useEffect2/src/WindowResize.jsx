import React, { useState, useEffect } from "react";

export const WindowResize = () => {
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleSize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <div>
      <h1>Window Width : {windowWidth}</h1>
    </div>
  );
};
