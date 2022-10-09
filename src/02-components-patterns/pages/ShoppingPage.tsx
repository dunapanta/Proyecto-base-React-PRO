import {
  ProductImage,
  ProductTitle,
  ProductButtons,
  ProductCard,
} from "../components";

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
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={"Coffee"} />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title={"Coffee"} />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
