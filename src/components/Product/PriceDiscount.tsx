type PriceDiscountProps = {
  discountPercentage: number;
};

function PriceDiscount(props: PriceDiscountProps) {
  const { discountPercentage } = props;
  return (
    <span className="rounded bg-green-600 bg-opacity-10 p-0.5 px-2 text-xs text-primary-content">
      -{discountPercentage}%
    </span>
  );
}

export default PriceDiscount;
