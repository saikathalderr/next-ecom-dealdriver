import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={"/"}>
      <button className="btn-ghost btn gap-0 text-xl font-black normal-case">
        Shop
        <span className="text-primary">ee</span>
      </button>
    </Link>
  );
}

export default Logo;
