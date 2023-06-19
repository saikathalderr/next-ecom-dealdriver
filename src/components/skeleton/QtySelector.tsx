import React from "react";

type QtySelectorProps = {
  quantity: number;
  disabled?: boolean;
  onQtyChange: (qty: number) => void;
};

const quantities = Array.from({ length: 10 }, (_, i) => i + 1);

function QtySelector(props: QtySelectorProps) {
  const { quantity, onQtyChange, disabled } = props;
  return (
    <div className="form-control inline-block">
      <select
        className="select-bordered select select-sm"
        defaultValue={quantity}
        onChange={(e) => onQtyChange(Number(e.target.value))}
        disabled={disabled}
      >
        {quantities.map((qty, idx) => (
          <option key={`qty-${idx + 1}`} value={qty}>
            {qty}
          </option>
        ))}
      </select>
    </div>
  );
}

export default QtySelector;
