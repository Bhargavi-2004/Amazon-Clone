import React, { useEffect, useState } from "react";
import { useStateValue } from "../context/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, Navigate } from "react-router-dom";
import { getBasket } from "../context/reducer";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "./axios";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payment = () => {
  // eslint-disable-next-line
  const [{ basket, user }, dispatch] = useStateValue();

  let stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(null);
  const [succeed, setSucceed] = useState();
  const [processing, setProcessing] = useState();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer

    const getClietSecret = async () => {
      const initialBasket = basket;
      console.log("initialBasket", initialBasket);
      if (initialBasket <= 0) {
        console.error("Invalid amount: Please enter a valid amount to pay.");
        return;
      }

      stripe = await loadStripe(
        "pk_test_51PBGZRSGsNbt9fDSRrWJBb0vWprdxocSxiOWOXIu5fXvsnS0lJnWe90wejVJfkWG2lH22fdGcfGBRMRqFfVgPxvc005C7QWYU0"
      );

      try {
        const response = await axios({
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          url: `http://localhost:5001/challenge-cd848/us-central1/api/payment/create?total=${getBasket(
            initialBasket
          )}`,
        });

        console.log("response: ", response);
        setClientSecret(response.data.clientSecret);
        console.log("c", clientSecret);
      } catch (error) {
        console.log("error", error.message);
      }
    };

    getClietSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    //  do all the fency stripe stuff...
    event.preventDefault();
    setProcessing(true);
    try {
      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      console.log("Resolved ----> ", payload);
      // payment_intent = payment confirmation
      const userId = user?.uid; // Assuming `user` is an object with a `uid` property
      if (!userId) {
        console.error("User ID is required for creating an order document.");
        return;
      }

      const amount = payload.paymentIntent?.amount;
      const id = payload.paymentIntent?.id;
      const created = payload.paymentIntent?.created;

      const cleanedBasket = basket.map((item) => {
        const newItem = {}; // Create a new object
        newItem.id = item.id;
        newItem.title = item.title;
        newItem.price = item.price;
        newItem.rating = item.rating;
        newItem.image = item.image; // Assuming you have an 'image' property
        // Include other necessary properties
        return newItem;
      });

      try {
        const ordersRef = doc(db, "users", userId, "orders", id);

        await setDoc(ordersRef, {
          amount: amount,
          created: created,
          basket: cleanedBasket,
        });
        toast.success(
          "Payment is done successfully & you will get your order at delivered address!!",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
      } catch (error) {
        console.log("Error creating database in firebase:", error);
      }

      setSucceed(true);
      setError(null);
      setProcessing(false);
    } catch (error) {
      console.log("Error creating payment intent:", error);
    } finally {
      dispatch({
        type: "EMPTY_BASKET",
      });
    }
  };
  if (succeed) {
    return <Navigate to="/orders" replace="true" />;
  }
  const handleChange = (event) => {
    // listen for changes in the CardElement
    // and display any errors as the customer types their card details

    setDisable(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment bg-white">
      <div className="paymentContainer text-left">
        <h1 className="font-bold bg-gray-300 text-2xl text-center p-5">
          Chechout{" "}
          {
            <Link to="/checkout" className="text-purple-700">
              ({basket?.length} items)
            </Link>
          }
        </h1>

        {/* paymnet section - delivery address */}
        <div className="border border-b-gray-300 p-10 flex flex-row">
          <div className="payment_title">
            <h3 className="font-bold text-xl pr-12">Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>Samras Hostel Ahmedabad</p>
            <p>Gujarat</p>
          </div>
        </div>

        {/* paymnet section - review items */}
        <div className="border border-b-gray-300 p-10">
          <div className="payment_title flex flex-col">
            <h3 className="font-bold text-xl">Review items and delivery</h3>
            <div className="payment_items">
              {/* products */}
              {basket.map((item) => {
                return (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* paymnet section - payment methods */}
        <div className="border border-b-gray-300 p-10 flex flex-col">
          <div className="payment_title ">
            <h3 className="font-bold text-xl">Payment Methods</h3>
          </div>
          <div className="payment_details">
            {/* stripe magic will go */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="priceContainer my-3">
                <CurrencyFormat
                  renderText={(value) => (
                    <div className="text-left">
                      <>
                        <h3 className="font-bold text-xl">
                          Order Total: {value}
                        </h3>
                      </>
                    </div>
                  )}
                  decimalScale={2}
                  value={getBasket(basket)}
                  displayType="text"
                  thousandSeparator={true}
                  prefix="₹"
                />
                <button
                  type="submit"
                  disabled={processing || disable || succeed}
                >
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
// https://youtu.be/RDV3Z1KCBvo?si=_2X_rVPVVYfYCWOf&t=31207
