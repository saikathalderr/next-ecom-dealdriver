import Error from "next/error";
import Head from "next/head";
import React from "react";
import CartItems from "~/components/cart/CartItems";
import CartSkeleton from "~/components/skeleton/CartSkeleton";
import EmptyCart from "~/components/cart/EmptyCart";
import OrderSummary from "~/components/cart/OrderSummary";
import { api } from "~/utils/api";

const taxRate = 9; // 9%

function Cart() {
  const { data: data, isLoading, error, isError } = api.cart.getAll.useQuery();
  if (!data || isLoading) return <CartSkeleton />;
  const { cart } = data;

  const subTotal = cart.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  const tax = (subTotal * taxRate) / 100;
  const orderTotal = subTotal + tax;

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
            />
          </div>
        )}
      </main>
    </>
  );
}

export default Cart;
