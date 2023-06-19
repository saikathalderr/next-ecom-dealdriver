import CartItem from "./CartItem";
import type { Cart, Product } from "@prisma/client";
import React from "react";

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
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default CartItems;
