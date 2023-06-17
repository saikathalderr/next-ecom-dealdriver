import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductRating from "./ProductRating";
import ProductPrice from "./ProductPrice";

type ProductProps = {
  product: Product;
};

function Product(props: ProductProps) {
  const { product } = props;
  const {
    thumbnail,
    title,
    rating,
    category,
    price,
    discountPercentage,
    brand,
  } = product;
  return (
    <div className="card card-compact w-full bg-base-100 shadow">
      <Link href={"/p"}>
        <figure className="relative h-40 w-full">
          <Image
            src={thumbnail}
            alt={title}
            className="rounded-t-2xl"
            fill
            style={{
              objectFit: "cover",
            }}
            sizes="100%"
            priority
          />
        </figure>
      </Link>
      <div className="card-body gap-1">
        <div className="flex text-xs font-light uppercase text-base-content">
          <span>{category}</span>
          <span className="px-1">•</span>
          <span>{brand}</span>
        </div>
        <h2 className="text-base font-semibold text-neutral">{title}</h2>
        <div>
          <ProductRating rating={rating} />
          <div className="my-2">
            <ProductPrice
              price={price}
              discountPercentage={discountPercentage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
