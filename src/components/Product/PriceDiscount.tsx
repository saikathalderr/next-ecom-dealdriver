type PriceDiscountProps = {
  discountPercentage: number;
};

function PriceDiscount(props: PriceDiscountProps) {
  const { discountPercentage } = props;
  return (
    <span className="rounded bg-success bg-opacity-10 p-0.5 px-2 text-xs text-success">
      {discountPercentage}% Off
    </span>
  );
}

export default PriceDiscount;
