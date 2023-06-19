import React from "react";

function HeaderSkeleton() {
  return (
    <div className="bg-base-100 shadow">
      <div className="container mx-auto px-10 py-[25px] md:px-0 lg:px-40">
        <div className="flex gap-5">
          <div className="h-[30px] w-[150px] animate-pulse rounded-full bg-base-300"></div>
          <div className="flex-grow"></div>
          <div className="h-[30px] w-[30px] animate-pulse rounded-full bg-base-300"></div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSkeleton;
