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

  const language = "en-US";

  const formattedFinalPrice = new Intl.NumberFormat(language, {
    style: "currency",
    currency: "USD",
  }).format(finalPrice);

  const formatttedRegularPrice = new Intl.NumberFormat(language, {
    style: "currency",
    currency: "USD",
  }).format(price);

  return (
    <div className="font-bold">
      <div className="pb-2">
        {discountPercentage && (
          <PriceDiscount discountPercentage={discountPercentage} />
        )}
      </div>
      <span className="font-black text-primary-content">
        {formattedFinalPrice}
      </span>
      {discountPercentage && (
        <>
          <span className="px-1"></span>
          <span className="text-xs text-gray-400 line-through">
            {formatttedRegularPrice}
          </span>
        </>
      )}
    </div>
  );
}

export default ProductPrice;
