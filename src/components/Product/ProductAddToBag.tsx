import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ProductAddToBagProps = {
  onBagClick: () => void;
  loading?: boolean;
};

function ProductAddToBag(props: ProductAddToBagProps) {
  const { onBagClick, loading } = props;
  return (
    <button
      className="btn-neutral btn-block btn-sm btn capitalize shadow"
      disabled={loading}
      onClick={onBagClick}
    >
      {loading ? "Adding..." : "Add to bag"}
      {loading ? (
        <span className="loading loading-spinner loading-xs"></span>
      ) : (
        <FontAwesomeIcon icon={faBagShopping} size="1x" />
      )}
    </button>
  );
}

export default ProductAddToBag;
