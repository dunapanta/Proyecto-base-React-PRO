import { createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";

import {
  ProductContextProps,
  Product,
  onChangeArgs,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  style?: React.CSSProperties;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  value,
  onChange,
}: Props) => {
  const { counter, increaseBy } = useProduct({ onChange, product, value });

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
