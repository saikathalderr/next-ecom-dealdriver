type RatingProps = {
  rating: number;
  color?: string;
  size?: "rating-xs" | "rating-sm" | "rating-md" | "rating-lg";
};

function Rating(props: RatingProps) {
  const { rating, color, size } = props;
  const ratingClass = size || "rating-xs";
  const ratingColor = color || "bg-orange-400";

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const rates: number[] = [...Array(5)];

  const isCheck = (index: number) => {
    return Math.floor(rating) >= index + 1;
  };
  return (
    <div className={`rating ${ratingClass}`}>
      {rates.map((_, index) => (
        <input
          type="radio"
          key={`${index + 1}-rating`}
          name={`rating-${rating}`}
          className={`mask mask-star-2 ${ratingColor}`}
          defaultChecked={isCheck(index)}
        />
      ))}
    </div>
  );
}

export default Rating;
