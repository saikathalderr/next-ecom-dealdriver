import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { api } from "~/utils/api";

import Logo from "./Logo";
import Link from "next/link";
import HeaderSkeleton from "../skeleton/HeaderSkeleton";

function Header() {
  const { data, isLoading } = api.cart.getAll.useQuery();
  if (!data || isLoading) return <HeaderSkeleton />;
  const { totalCartItem } = data;
  return (
    <div className="navbar sticky top-0 z-10 bg-base-100 shadow">
      <div className="container mx-auto px-10 py-2 md:px-0 lg:px-40">
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex-none">
          <div className="indicator">
            <span className="badge badge-primary badge-sm indicator-start indicator-item font-bold">
              {isLoading ? (
                <span className="loading loading-bars loading-xs"></span>
              ) : totalCartItem === 0 ? (
                <span>0</span>
              ) : (
                <span className="countdown">{totalCartItem}</span>
              )}
            </span>
            <Link href={"/cart"} aria-label="cart-button">
              <button
                className="btn-ghost btn-sm btn-circle btn"
                aria-label="cart-button"
              >
                <FontAwesomeIcon icon={faBagShopping} size="1x" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
