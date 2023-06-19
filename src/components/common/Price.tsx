type PriceProps = {
  price: number;
};

function Price(props: PriceProps) {
  const { price } = props;
  const language = "en-US";
  const formatttedPrice = new Intl.NumberFormat(language, {
    style: "currency",
    currency: "USD",
  }).format(price);

  return formatttedPrice;
}

export default Price;
