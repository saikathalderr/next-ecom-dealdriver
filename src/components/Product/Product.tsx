import { Product } from "@prisma/client";
import Image from "next/image";

import ProductRating from "./ProductRating";
import ProductPrice from "./ProductPrice";

import { api } from "~/utils/api";
import ProductAddToBag from "./ProductAddToBag";

type ProductProps = {
  product: Product;
};

function Product(props: ProductProps) {
  const { product } = props;
  const { thumbnail, title, rating, category, price, discountPercentage, id } =
    product;

  const {
    mutate: addToCart,
    isLoading,
    isError,
    error,
    isSuccess,
  } = api.cart.addToCart.useMutation();
  const { refetch: refetchCartCount } = api.cart.getAll.useQuery();

  const handleAddToCart = () => {
    addToCart({
      productId: id,
      quantity: 1,
    });
  };

  if (isSuccess) {
    void refetchCartCount();
  }

  return (
    <div className="card-compact card w-full border border-base-200 bg-base-100 shadow">
      <figure className="relative h-28 w-full lg:h-40">
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
      <div className="card-body gap-1">
        <div className="flex text-xs font-light uppercase text-base-content">
          <span>{category}</span>
        </div>
        <h2 className="truncate text-base font-semibold capitalize text-primary-content">
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
        <div>
          <ProductAddToBag onBagClick={handleAddToCart} loading={isLoading} />
        </div>
      </div>
    </div>
  );
}

export default Product;
