import {
  ProductImage,
  ProductTitle,
  ProductButtons,
  ProductCard,
} from "../components";

import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "../../../public/coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard className="bg-dark" product={product}>
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-white" title={"Coffee"} />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard className="bg-dark" product={product}>
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white" title={"Coffee"} />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard style={{ backgroundColor: "#4bf3f0" }} product={product}>
          <ProductImage style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)"}} />
          <ProductTitle title={"Coffee"} style={{ fontWeight: "bold" }} />
          <ProductButtons style={{ display: "flex", justifyContent: "end" }} />
        </ProductCard>
      </div>
    </div>
  );
};
