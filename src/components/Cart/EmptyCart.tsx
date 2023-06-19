import Link from "next/link";
import React from "react";

function EmptyCart() {
  return (
    <div className="hero bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-3xl font-bold">Your cart is empty</h1>
          <p className="py-6">
            Looks like you have not added any items to your cart yet. Please go
            back to the homepage to continue shopping. Thank you!
          </p>
          <Link href="/">
            <button className="btn-neutral btn">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
