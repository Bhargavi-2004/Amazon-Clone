import React from "react";
import banner from "../Components/img/banner.jpg";
import Subtotal from "./Subtotal";

const Checkout = () => {
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
          <h1 className="text-2xl text-left font-bold">Your Shopping Basket</h1>
        </div>
      </div>
      {/* rightPart */}
      <div className="checkoutRight flex flex-col justify-evenly">
        <Subtotal />
        <h1 className="text-2xl text-left font-bold">
          The subtotal will go here
        </h1>
      </div>
    </div>
  );
};

export default Checkout;
// https://youtu.be/RDV3Z1KCBvo?si=xvdqu-wjJo5ikMDB&t=7202
