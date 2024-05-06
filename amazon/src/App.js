import { useEffect } from "react";
import "./App.css";
import Checkout from "./Components/Checkout";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { auth } from "./firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./context/StateProvider.js";
import Payment from "./Components/Payment.js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders.js";

const promise = loadStripe(
  "pk_test_51PBGZRSGsNbt9fDSRrWJBb0vWprdxocSxiOWOXIu5fXvsnS0lJnWe90wejVJfkWG2lH22fdGcfGBRMRqFfVgPxvc005C7QWYU0"
);

function App() {
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when app component loads...
    // eslint-disable-next-line
    const listner = onAuthStateChanged(auth, (authUser) => {
      console.log("The User is --> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in.
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out.
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

