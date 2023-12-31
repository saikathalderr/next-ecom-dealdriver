import ProductItem from "./Product";
import { type Product } from "@prisma/client";
import React from "react";

type ProductsProps = {
  products: Product[];
};

function Products(props: ProductsProps) {
  const { products } = props;
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
