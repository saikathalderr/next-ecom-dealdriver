import PriceDiscount from "./PriceDiscount";

type ProductPriceProps = {
  price: number;
  discountPercentage?: number;
};

function ProductPrice(props: ProductPriceProps) {
  const { price, discountPercentage } = props;
  const finalPrice = discountPercentage
    ? price - (price * discountPercentage) / 100
    : price;

  const language = navigator.language || "en-US";

  const formattedFinalPrice = new Intl.NumberFormat(language, {
    style: "currency",
    currency: "USD",
  }).format(finalPrice);

  const formatttedRegularPrice = new Intl.NumberFormat(language, {
    style: "currency",
    currency: "USD",
  }).format(price);

  return (
    <div className="items-center justify-center font-bold">
      <span> {formattedFinalPrice}</span>
      {discountPercentage && (
        <>
          <span className="px-1"></span>
          <span className="text-xs text-gray-400 line-through">
            {formatttedRegularPrice}
          </span>
          <span className="px-1"></span>
          <PriceDiscount discountPercentage={discountPercentage} />
        </>
      )}
    </div>
  );
}

export default ProductPrice;
