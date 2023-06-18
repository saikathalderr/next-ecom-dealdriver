import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

import Logo from "./Logo";
import Link from "next/link";

function Header() {
  return (
    <div className="navbar sticky top-0 z-10 bg-base-100 shadow">
      <div className="container mx-auto px-10 md:px-0 lg:px-40">
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex-none">
          <Link href={"/cart"} aria-label="cart-button">
            <button
              className="btn-ghost btn-circle btn"
              aria-label="cart-button"
            >
              <FontAwesomeIcon icon={faBagShopping} size="1x" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
