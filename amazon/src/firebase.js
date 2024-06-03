// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBu8JeluqYwPGCWBb6fPLLU_u00MJYoKwA",
  authDomain: "challenge-cd848.firebaseapp.com",
  databaseURL: "https://challenge-cd848-default-rtdb.firebaseio.com",
  projectId: "challenge-cd848",
  storageBucket: "challenge-cd848.appspot.com",
  messagingSenderId: "754280295314",
  appId: "1:754280295314:web:54a8f74f64587606b96f4b",
  measurementId: "G-8YM9J3SPQK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
