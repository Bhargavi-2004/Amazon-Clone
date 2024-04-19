import React from "react";
import { useStateValue } from "../context/StateProvider";

function Product(props) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("this is a basket", basket);
  const addToBasket = () => {
    // dispacth the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };

  return (
    <div className="product flex flex-col bg-white z-1 items-center mx-3 my-2">
      {/* product info */}
      <div className="productInfo text-left px-5">
        <p>{props.title}</p>
        {/* product price */}
        <p className="productPrice ">
          <small>₹</small>
          <strong>{props.price}</strong>
        </p>
        {/* product rating */}
        <div className="flex">
          {Array(props.rating)
            .fill()
            .map((_, i) => {
              return <p>🌟</p>;
            })}
        </div>
      </div>
      <img
        src={props.image}
        alt="product"
        className="productImage w-auto h-auto mx-12 my-4 p-5"
      />
      <button
        className="bg-yellow-500 p-2 font-bold border-2 rounded-md "
        onClick={addToBasket}
      >
        Add to basket
      </button>
    </div>
  );
}

export default Product;
