import Price from "../common/Price";

type OrderSummaryProps = {
  subTotal: number;
  tax: number;
  orderTotal: number;
  taxRate: number;
  checkout: JSX.Element;
};

function OrderSummary(props: OrderSummaryProps) {
  const { subTotal, tax, orderTotal, taxRate, checkout } = props;
  return (
    <div className="card-body order-1 h-fit rounded-xl py-6 shadow-xl lg:sticky lg:top-40 lg:order-2 ">
      <h1 className="text-lg font-bold">Order Summary</h1>
      <div className="my-6 font-mono text-sm uppercase">
        <p className="flex justify-between">
          <span>Subtotal</span> <Price price={subTotal} />
        </p>
        <hr className="my-2" />
        <p className="flex justify-between">
          <span>Tax - {taxRate}% </span>
          <Price price={tax} />
        </p>
        <hr className="my-2" />
        <p className="font-base flex justify-between text-base font-bold">
          <span>Order Total</span> <Price price={orderTotal} />
        </p>
      </div>
      <div>{checkout}</div>
    </div>
  );
}

export default OrderSummary;
