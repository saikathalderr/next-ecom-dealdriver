import React from "react";
import ProductItem from "./Product";

import { type Product } from "@prisma/client";

type ProductsProps = {
  products: Product[];
};

function Products(props: ProductsProps) {
  const { products } = props;
  return (
    <div className="grid grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
