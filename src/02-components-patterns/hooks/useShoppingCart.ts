import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    //console.log("onProductCountChange", count, product);
    setShoppingCart((prev) => {

       if (count === 0) {
            const { [product.id]: _, ...rest } = prev;
            return rest;
          }
          return {
            ...prev,
            [product.id]: {
              ...product,
              count,
            },
          };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
