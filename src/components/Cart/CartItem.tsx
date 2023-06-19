import Price from "../common/Price";
import QtySelector from "../Product/QtySelector";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Cart, Product } from "@prisma/client";
import Image from "next/image";
import React from "react";
import { toast } from "react-hot-toast";
import { api } from "~/utils/api";

type CartItemProps = {
  item: Cart & {
    product: Product;
  };
};

function CartItem(props: CartItemProps) {
  const { item } = props;
  const { product, quantity, id } = item;
  const { title, price, thumbnail } = product;

  const { mutate: updateCart, isLoading: updatingItemInCart } =
    api.cart.updateCart.useMutation();

  const { mutate: deleteFromCart, isLoading: deletingItemFromCart } =
    api.cart.deleteFromCart.useMutation();

  const { refetch } = api.cart.getAll.useQuery();

  const handleQtyChange = (qty: number) => {
    updateCart(
      { id, quantity: qty },
      {
        onSuccess: () => {
          void refetch();
          toast.success("Item qty updated", {
            icon: "🌈",
          });
        },
        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
  };

  const handleDelete = () => {
    deleteFromCart(
      {
        id,
      },
      {
        onSuccess: () => {
          void refetch();
          toast.success("Deleted item from cart", {
            icon: "🥲",
          });
        },
        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
  };

  return (
    <div className="flex items-center justify-start gap-5 rounded-2xl bg-base-100">
      <div className="relative h-[80px] w-[80px]">
        <Image
          priority
          src={thumbnail}
          alt={title}
          sizes="100%"
          className="rounded-xl"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="flex-1">
        <h2 className="text-sm">{title}</h2>
        <div className="flex items-center gap-5">
          <Price price={price} />
          <div className="flex-grow"></div>
          <QtySelector
            quantity={quantity}
            onQtyChange={handleQtyChange}
            disabled={updatingItemInCart || deletingItemFromCart}
          />
          <button
            className="btn-ghost btn-circle btn text-red-500"
            aria-label="delete-button"
            onClick={handleDelete}
            disabled={updatingItemInCart || deletingItemFromCart}
          >
            <FontAwesomeIcon icon={faTrash} size="1x" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
