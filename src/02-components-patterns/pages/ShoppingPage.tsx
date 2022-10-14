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
        className="bg-dark"
        product={product}
      >
        {({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" title={"Coffee"} />
            <ProductButtons className="custom-buttons" />

            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}> -2 </button>
            {!isMaxCountReached && (
              <button onClick={() => increaseBy(2)}> +2 </button>
            )}
            <span>
              {count} - {maxCount}
            </span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
