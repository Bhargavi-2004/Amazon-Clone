import React from "react";
import { useStateValue } from "../context/StateProvider";

const CheckoutProduct = (props) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    // rempve the item from vasket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
  };

  return (
    <div className="checkOutProduct flex my-20 mx-2">
      <img
        className="CheckOutImage object-contain w-44 h-44"
        src={props.image}
        alt="product"
      />
      {/* info */}
      <div className="CheckOutInfo text-left px-5">
        {/* title */}
        <p className="CheckoutTitle text-xl">{props.title}</p>
        {/* price */}
        <p className="CheckoutPrice">
          <small>₹</small>
          <strong>{props.price}</strong>
        </p>
        {/* rating */}
        <div className="CheckoutRating flex">
          {Array(props.rating)
            .fill()
            .map((_, i) => {
              return <p>🌟</p>;
            })}
        </div>
        <button
          className="bg-yellow-500 p-2 font-bold border-2 rounded-md"
          onClick={removeFromBasket}
        >
          Remove from basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
