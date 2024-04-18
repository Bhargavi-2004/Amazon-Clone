import React from "react";
import CurrencyFormat from 'react-currency-format';

const Subtotal = () => {
  const [itemCount, setItemCount] = React.useState(0); // State for item count

  const handleItemCountChange = (event) => {
    setItemCount(event.target.checked ? 1 : 0); // Update count based on checkbox
  };

  return (
    <div className="flex flex-col justify-between w-80 h-24 p-20 bg-slate-100 border border-y-yellow-50 border-r-2 m-5">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({itemCount} item{itemCount === 1 ? "" : "s"}):{" "}
              <strong>{value}</strong>
            </p>
            <small>
              <input
                type="checkbox"
                checked={itemCount > 0} // Set checkbox based on count
                onChange={handleItemCountChange}
              />{" "}
              The order contains a gift.
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType="text"
        thousandSeparator={true}
        prefix="$"
      />
      <button>Procees to checkout</button>
    </div>
  );
};

export default Subtotal;
