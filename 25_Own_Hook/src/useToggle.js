import { useState } from "react";

export function useToggle() {
  const [value, setValue] = useState();
  function toggleVal(val) {
    if (typeof val != "boolean") {
      setValue(!val);
    } else {
      setValue(val);
    }
  }
}
