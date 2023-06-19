import Skeleton from "./Skeleton";
import React from "react";

function ProductsSkeleton() {
  return (
    <>
      <div className="grid grid-cols-4 gap-6">
        {Array.from({ length: 40 }).map((_, index) => (
          <Skeleton key={index} />
        ))}
      </div>
    </>
  );
}

export default ProductsSkeleton;
