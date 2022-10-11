import { useEffect, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({
  product,
  onChange,
  value = 0,
}: useProductArgs) => {
  const [counter, setCounter] = useState(value);

  useEffect(() => {
    setCounter(value);
  }, [value]);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  return {
    counter,
    increaseBy,
  };
};
