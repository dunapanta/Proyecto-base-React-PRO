import { useState } from "react";

export const useProduct = (onChange?: () => void) => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));
    onChange && onChange();
  };

  return {
    counter,
    increaseBy,
  };
};
