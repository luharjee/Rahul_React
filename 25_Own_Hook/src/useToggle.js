import { useState } from "react";

export function useToggle() {
  const [value, setValue] = useState();
  function toggleVal(val) {
    if (typeof val != "boolean") {
      setValue(!value);
    } else {
      setValue(value);
    }
  }

  return [value, toggleVal];
}
