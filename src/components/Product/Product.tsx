import { generateSlug } from "~/utils";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import ProductRating from "./ProductRating";
import ProductPrice from "./ProductPrice";

type ProductProps = {
  product: Product;
};

function Product(props: ProductProps) {
  const { product } = props;
  const { thumbnail, title, rating, category, price, discountPercentage } =
    product;

  const slug = generateSlug(title);

  return (
    <div className="card card-compact w-full border border-base-200 bg-base-100 shadow">
      <Link href={slug}>
        <figure className="relative h-32 w-full lg:h-40">
          <Image
            fill
            priority
            src={thumbnail}
            alt={title}
            sizes="100%"
            className="rounded-t-2xl"
            style={{
              objectFit: "cover",
            }}
          />
        </figure>
      </Link>
      <div className="card-body gap-1">
        <div className="flex text-xs font-light uppercase text-base-content">
          <span>{category}</span>
        </div>
        <h2 className="text-base font-semibold capitalize text-primary-content">
          {title}
        </h2>
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
