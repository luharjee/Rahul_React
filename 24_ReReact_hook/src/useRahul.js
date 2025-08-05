import { useEffect, useState } from "react";

export function useRahul() {
  const [name, setName] = useState("Raj");

  useEffect(() => {
    console.log("I am working for my father and uncle");
    setName("Rosi, Kali ");
  }, []);

  return name;
}
