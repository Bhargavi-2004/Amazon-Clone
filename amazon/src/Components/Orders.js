import React, { useEffect, useState } from "react";
import { useStateValue } from "../context/StateProvider";
import { db } from "../firebase";
import {
  collection,
  doc,
  orderBy,
  onSnapshot,
  query,
} from "firebase/firestore";
import Order from "./Order";
import { getBasket } from "../context/reducer";
import CurrencyFormat from "react-currency-format";

const Orders = () => {
  const [{ basket, user }, dispacth] = useStateValue();
  const [orders, setOrders] = useState([]);

  // having brackets as dependancy is important than having not and also both are different
  useEffect(() => {
    if (user) {
      const ordersRef = query(
        collection(db, "users", user?.uid, "orders"),
        orderBy("created", "desc")
      );

      console.log("user.uid:", user?.uid);
      console.log("ordersRef:", ordersRef);

      onSnapshot(ordersRef, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
      console.log("orders", orders);
    } else {
      setOrders([]);
    }
  }, [user]);
  console.log("Order after--->", orders);
  let itemPrice = 0;
  return (
    <div className="orders pl-20 pr-20 pt-4 pb-4">
      <h1 className="font-bold text-3xl m-3">Your Orders</h1>
      <div className=" all_order bg-white">
        <h2 className="text-2xl font-bold p-5 text-left">Order</h2>
        {orders.map((order, index) => {
          itemPrice += order.data.amount;
          return <Order order={order} key={index} />;
        })}
        <CurrencyFormat
          renderText={(value) => (
            <div className="text-left">
              <p>
                Order Total:
                <strong>{value}</strong>
              </p>
            </div>
          )}
          decimalScale={2}
          value={itemPrice}
          displayType="text"
          thousandSeparator={true}
          prefix="₹"
        />
      </div>
    </div>
  );
};

export default Orders;
