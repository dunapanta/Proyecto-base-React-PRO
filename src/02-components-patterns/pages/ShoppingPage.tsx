import { useState } from "react";
import {
  ProductImage,
  ProductTitle,
  ProductButtons,
  ProductCard,
} from "../components";
import { Product } from "../interfaces/interfaces";

import "../styles/custom-styles.css";

const product1 = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "../../../public/coffee-mug.png",
};

const product2 = {
  id: "2",
  title: "Coffee Mug - Meme",
  img: "../../../public/coffee-mug2.png",
};

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
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

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            className="bg-dark"
            product={product}
            value={shoppingCart[product.id]?.count || 0}
            onChange={(event) => onProductCountChange(event)}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" title={"Coffee"} />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}

        <div className="shopping-card">
          {shoppingCart &&
            Object.values(shoppingCart).map((product) => (
              <ProductCard
                key={product.id}
                className="bg-dark"
                product={product}
                style={{ width: "100px" }}
                value={product.count}
                onChange={(event) => onProductCountChange(event)}
              >
                <ProductImage className="custom-image" />
                <ProductButtons className="custom-buttons" />
              </ProductCard>
            ))}
        </div>
      </div>

      <div>
        <code>
          <pre>{JSON.stringify(shoppingCart, null, 5)}</pre>
        </code>
      </div>
    </div>
  );
};
