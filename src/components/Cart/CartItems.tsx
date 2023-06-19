import React from "react";
import CartItem from "./CartItem";
import type { Cart, Product } from "@prisma/client";

type CartItemsProps = {
  cart: (Cart & {
    product: Product;
  })[];
};

function CartItems(props: CartItemsProps) {
  const { cart } = props;
  return (
    <div className="order-2 grid grid-cols-1 gap-5 lg:order-1">
      {cart.map((item) => (
        <>
          <CartItem key={item.id} item={item} />
          <hr className="my-0" />
        </>
      ))}
    </div>
  );
}

export default CartItems;
