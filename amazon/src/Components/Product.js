import React from "react";
// eslint-disable-next-line
import productImage from "../Components/img/prime.jpeg";

function Product(props) {
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
      <button className="bg-yellow-500 p-2 font-bold border-2 rounded-md ">
        Add to basket
      </button>
    </div>
  );
}

export default Product;
