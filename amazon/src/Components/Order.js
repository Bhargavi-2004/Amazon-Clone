import React from "react";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";

const Order = (props) => {
  return (
    <div className="order_all pl-5 bg-white">
      <p className="text-left text-late-100xl -mt-4">
        {moment.unix(props.order.data.created).format("MMMM Do YYYY, h:mma")}
      </p>
      <p className="oreder_id text-left">
        <small>{props.order.id}</small>
      </p>
      <div className="-mt-12">
        {props.order.data.basket?.map((item) => {
          return (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              hideButton={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Order;
