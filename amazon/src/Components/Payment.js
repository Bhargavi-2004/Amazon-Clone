import React, { useEffect, useState } from "react";
import { useStateValue } from "../context/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, Navigate } from "react-router-dom";
import { getBasket } from "../context/reducer";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "./axios";
import { db } from "../firebase";
import { collection } from "firebase/firestore";
import { loadStripe } from "@stripe/stripe-js";

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
      stripe = await loadStripe(
        "pk_test_51PBGZRSGsNbt9fDSRrWJBb0vWprdxocSxiOWOXIu5fXvsnS0lJnWe90wejVJfkWG2lH22fdGcfGBRMRqFfVgPxvc005C7QWYU0"
      );

      try {
        const response = await axios
          .post(`/payment/create?total=${getBasket(basket)}`, {
            headers: {
              "Content-Type": "application/json",
            },
            // stripe expects the total in a currency subunits
          })
          .catch(function (error) {
            console.log(error.toJSON());
          });

        console.log("response: ", response);
        setClientSecret(response.data.clientSecret);
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

    // const payload = await stripe
    //   .confirmCardPayment(clientSecret, {
    //     payment_method: {
    //       card: elements.getElement(CardElement),
    //     },
    //   })
    //   .then(async ({ paymentIntent }) => {
    //     // paymentIntent = payment confirmation
    //     console.log("db: ", db);
    //     console.log("id", paymentIntent);

    //     try {
    //       const userId = user?.uid; // Assuming `user` is an object with a `uid` property

    //       if (!userId) {
    //         console.error(
    //           "User ID is required for creating an order document."
    //         );
    //         return; // Handle the error or exit gracefully
    //       }

    //       const ordersCollection = collection(db, "users", user?.uid, "orders");

    //       ordersCollection.doc(paymentIntent.id).set({
    //         basket: basket,
    //         amount: paymentIntent.amount,
    //         created: paymentIntent.created,
    //       });
    //     } catch (error) {
    //       alert("incorrect way");
    //     }

    //   setSucceed(true);
    //   setError(null);
    //   setProcessing(false);

    //   dispatch({
    //     type: "EMPTY_BASKET",
    //   });
    // });
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
