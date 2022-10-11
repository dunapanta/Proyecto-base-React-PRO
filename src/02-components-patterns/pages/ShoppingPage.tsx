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

  const onProductCountChange = () => {
    console.log("onProductCountChange");
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
            onChange={() => onProductCountChange()}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" title={"Coffee"} />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}

        <div className="shopping-card">
          <ProductCard
            className="bg-dark"
            product={product2}
            style={{ width: "100px" }}
            onChange={() => onProductCountChange()}
          >
            <ProductImage className="custom-image" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>

          <ProductCard
            className="bg-dark"
            product={product1}
            style={{ width: "100px" }}
          >
            <ProductImage className="custom-image" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        </div>
      </div>
    </div>
  );
};
