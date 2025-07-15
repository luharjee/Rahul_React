import { useState, useEffect } from "react";
export function useGetWindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log(window.innerWidth);
      setWidth(window.innerWidth);
    });
  }, []);

  return width;
}
