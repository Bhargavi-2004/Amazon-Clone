import React, { useEffect } from "react";
import { useStateValue } from "../context/StateProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product(props) {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log("this is a basket", basket);

  const addToBasket = () => {
    // dispacth the item into the data layer
    if (user) {
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
    }
    if (!user) {
      toast.error("Please sign in to procceed further!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.success("Added to basket!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
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
          className="btn animate-bounce bg-yellow-500 p-2 font-bold border-2 rounded-md mb-5 "
          onClick={addToBasket}
        >
          Add to basket
        </button>
      </div>
    </>
  );
}

export default Product;
