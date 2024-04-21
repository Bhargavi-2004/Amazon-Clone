import React from "react";
import banner from "../Components/img/banner.jpg";
import Subtotal from "./Subtotal";
import { useStateValue } from "../context/StateProvider";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkoutPage bg-white flex justify-evenly">
      {/* leftPart */}
      <div className="checkoutLeft">
        <img
          src={banner}
          alt="not find"
          className="shadow-lg shadow-gray-200 "
        />
        <div className="checkoutList">
          <h1 className="text-2xl text-left font-bold ml-8">Your Shopping Basket</h1>

          {/* CheckoutProducts */}
          {basket.map((item) => {
            return <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />;
          })}
        </div>
      </div>

      {/* rightPart */}
      <div className="checkoutRight flex flex-col">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
// https://youtu.be/RDV3Z1KCBvo?si=xvdqu-wjJo5ikMDB&t=7202
