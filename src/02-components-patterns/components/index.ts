import { ProductCard as ProductCardHOC } from "./ProductCard";

export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";
export { ProductButtons } from "./ProductButtons";

import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductCardHOCProps } from "../interfaces/interfaces";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
