import Error from "next/error";
import Head from "next/head";

import CartItems from "~/components/cart/CartItems";
import CartSkeleton from "~/components/skeleton/CartSkeleton";
import EmptyCart from "~/components/cart/EmptyCart";
import OrderSummary from "~/components/cart/OrderSummary";
import { api } from "~/utils/api";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

const taxRate = 9; // 9%

function Cart() {
  const router = useRouter();
  const { data: data, isLoading, error, isError } = api.cart.getAll.useQuery();
  const { mutate: checkout, isLoading: isCheckoutLoading } =
    api.order.checkout.useMutation();
  const { mutate: clearCart } = api.cart.clearCart.useMutation();

  if (!data || isLoading) return <CartSkeleton />;
  const { cart } = data;

  const subTotal = cart.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  const tax = (subTotal * taxRate) / 100;
  const orderTotal = subTotal + tax;

  const handleCheckout = () => {
    checkout(
      {
        items: cart.map((item) => ({
          productId: item.product.id,
          quantity: item.quantity,
        })),
      },
      {
        onSuccess: () => {
          const successMessage = "checkout success and order created!";
          console.log(successMessage);
          toast.success(successMessage);
          clearCart();
          void router.push("/");
        },
        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
  };

  if (isError) return <Error statusCode={500} title={error.message} />;

  return (
    <>
      <Head>
        <title>shopee - Cart</title>
        <meta name="description" content="shopee cart page" />
      </Head>
      <main>
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <CartItems cart={cart} />
            <OrderSummary
              subTotal={subTotal}
              tax={tax}
              orderTotal={orderTotal}
              taxRate={taxRate}
              checkout={
                <button
                  className="btn-primary btn-block btn"
                  disabled={isCheckoutLoading}
                  onClick={handleCheckout}
                >
                  {isCheckoutLoading ? "Checking Out..." : "Checkout"}
                </button>
              }
            />
          </div>
        )}
      </main>
    </>
  );
}

export default Cart;
