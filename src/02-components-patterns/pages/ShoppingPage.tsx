import {
  ProductImage,
  ProductTitle,
  ProductButtons,
  ProductCard,
} from "../components";
import { products } from "../data/products";
import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <ProductCard
        initialValues={{ count: 4, maxCount: 10 }}
        key={product.id}
        product={product}
      >
        {({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
          <>
            <ProductImage  />
            <ProductTitle  />
            <ProductButtons />

          </>
        )}
      </ProductCard>
    </div>
  );
};
