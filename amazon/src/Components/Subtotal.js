import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../context/StateProvider";
import { getBasket } from "../context/reducer";
import { useNavigate } from "react-router-dom";

const Subtotal = () => {
  const [{ basket }] = useStateValue();
  const [itemCount, setItemCount] = React.useState(basket.length); // State for item count

  const navigate = useNavigate();

  // eslint-disable-next-line
  var priceCount = 0;

  const handleItemCountChange = (event) => {
    setItemCount(event.target.checked ? 1 : 0); // Update count based on checkbox
  };

  basket.forEach((value) => {
    priceCount += value.price;
  });

  return (
    <div
      className="flex flex-col w-80 h-32 px-4 gap-3
    py-4 bg-slate-100 border border-y-yellow-50 border-r-2 m-5"
    >
      <CurrencyFormat
        renderText={(value) => (
          <div className="text-left">
            <p>
              Subtotal ({basket.length} item{basket.length === 1 ? "" : "s"}):{" "}
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
          </div>
        )}
        decimalScale={2}
        value={getBasket(basket)}
        displayType="text"
        thousandSeparator={true}
        prefix="₹"
      />
      <button
        onClick={() => navigate("/payment")}
        className="bg-yellow-500 font-bold border-2 rounded-md "
      >
        Procees to checkout
      </button>
    </div>
  );
};

export default Subtotal;
