type ProductRatingProps = {
  rating: number;
};

function ProductRating(props: ProductRatingProps) {
  const { rating } = props;
  return (
    <div className="rating rating-xs inline-flex items-center justify-center gap-1 font-bold text-green-700">
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-green-700"
        aria-label="rating"
        defaultChecked
      />
      <span>{rating}</span>
    </div>
  );
}

export default ProductRating;
