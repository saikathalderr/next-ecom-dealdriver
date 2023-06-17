import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

import Logo from "./Logo";
import Link from "next/link";

function Header() {
  return (
    <div className="navbar bg-base-100 shadow">
      <div className="container mx-auto">
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex-none">
          <Link href={"/cart"}>
            <button className="btn-ghost btn">
              <FontAwesomeIcon icon={faBagShopping} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
