import Head from "next/head";
import React from "react";
import CartItems from "~/components/Cart/CartItems";
import EmptyCart from "~/components/Cart/EmptyCart";
import OrderSummary from "~/components/Cart/OrderSummary";
import { api } from "~/utils/api";

const taxRate = 9; // 9%

function Cart() {
  const { data: data, isLoading, error, isError } = api.cart.getAll.useQuery();
  if (!data) return null;
  const { cart } = data;

  const subTotal = cart.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  const tax = (subTotal * taxRate) / 100;
  const orderTotal = subTotal + tax;

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
