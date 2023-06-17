type PriceDiscountProps = {
  discountPercentage: number;
};

function PriceDiscount(props: PriceDiscountProps) {
  const { discountPercentage } = props;
  return (
    <span className="rounded bg-secondary p-1 text-xs text-secondary-content">
      {discountPercentage}%
    </span>
  );
}

export default PriceDiscount;
