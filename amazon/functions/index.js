const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51PBGZRSGsNbt9fDSgEHnRVf5NVA8b3eiIK6veuJJTpn0zmM4i0KMYtmyXIjlzuAmvKskqAre8tjXbB7DPAthuL6B00oq2U2EGG"
);

// API

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (request, response) => {
  response.status(200).send("Hello world");
});

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved!! for this amount --->  ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of currencycur
    currency: "usd",
  });

  //OK- Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint:
// http://127.0.0.1:5001/challenge-cd848/us-central1/api

// Deployed:
// https://challenge-cd848.web.app/checkout
