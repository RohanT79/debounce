import { useState, useEffect } from "react";

export const useDebounce = (inputValue, delay = 300) => {
  const [debounceValue, setDebonceValue] = useState(inputValue);

  useEffect(() => {
    const timer = setTimeout(() => setDebonceValue(inputValue), delay);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue, delay]);

  return debounceValue;
};
