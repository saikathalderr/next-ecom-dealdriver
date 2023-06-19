import React from "react";

function CartSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      <div className="order-2 lg:order-1">
        <div className="card card-compact w-full gap-5 shadow">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="card-body gap-1">
              <div className="flex flex-col gap-2">
                <div className="flex h-5 w-4/6 rounded-full bg-base-200 text-xs font-light uppercase text-base-content" />
                <div className="flex h-5 w-2/6 rounded-full bg-base-200 text-xs font-light uppercase text-base-content" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="card card-compact order-1 h-fit w-full shadow lg:order-2">
        <div className="card-body gap-1">
          <div className="flex flex-col gap-2">
            <div className="flex h-5 w-4/6 rounded-full bg-base-200 text-xs font-light uppercase text-base-content" />
            <div className="flex h-5 w-2/6 rounded-full bg-base-200 text-xs font-light uppercase text-base-content" />
            <div className="flex h-5 w-1/6 rounded-full bg-base-200 text-xs font-light uppercase text-base-content" />
          </div>
          <div className="py-1"></div>
          <div className="flex gap-2">
            <div className="flex h-5 w-20 rounded-full bg-base-200 text-xs font-light uppercase text-base-content" />
            <div className="flex h-5 w-20 rounded-full bg-base-200 text-xs font-light uppercase text-base-content" />
            <div className="flex h-5 w-20 rounded-full bg-base-200 text-xs font-light uppercase text-base-content" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSkeleton;
