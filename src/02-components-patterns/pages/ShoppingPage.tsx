import {
  ProductImage,
  ProductTitle,
  ProductButtons,
  ProductCard,
} from "../components";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";
import "../styles/custom-styles.css";

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

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
