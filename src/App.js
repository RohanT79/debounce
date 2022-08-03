import React, { useState, useEffect } from "react";
import { useDebounce } from "./hooks";

export default function App() {
  const [value, setValue] = useState("");
  const debounceValue = useDebounce(value);

  useEffect(() => {
    // console.log(`API call with ${value}`)
    console.log(`API call with debounce ${debounceValue}`);
  }, [debounceValue]);

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}
