import { Product } from "@/types";
import React from "react";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  return <div>product-card</div>;
};

export default ProductCard;
