import React, { useState } from "react";
import logo from "./img/amazonLogo.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();

    // eslint-disable-next-line
    const signin = signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          toast.success("Signed in successfully!!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          return navigate("/");
        }
      })
      .catch((error) => {
        toast.error(
          `Username with this email id does not exist, Please register first!! `,
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
        // alert(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();

    // eslint-disable-next-line
    const validate = createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // if successfully created a new user with email & password
        console.log(auth);
        if (auth) {
          toast.success("Registered successfully!!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          return navigate("/");
        }
      })
      .catch((error) => {
        toast.error(`Username with this email is already exist..!!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        // alert(error.message);
        console.log(error.message);
      });
  };

  return (
    <div className="login flex flex-col m-auto items-center h-full">
      <Link to="/">
        <img
          src={logo}
          alt="loginPage"
          className="w-32 mt-2 text-black object-contain"
        />
      </Link>

      {/* container */}
      <div className="loginContainer flex flex-col items-start w-72 border border-3 border-black rounded-md h-fit bg-slate-200">
        <h1 className="font-bold text-3xl p-3">Sign-in</h1>

        <form action="" className="flex flex-col items-start w-full gap-1 p-3">
          <h5 className="text-xl">E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-black rounded-md w-full"
          />

          <h5 className="text-xl">Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-black rounded-md w-full"
          />

          <button
            type="submit"
            onClick={signIn}
            className="bg-yellow-500 p-1 w-full font-bold border-2 border-white rounded-md mt-2"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm mb-2 p-2 text-left">
          By sigining-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button
          onClick={register}
          className="bg-yellow-500 p-1 w-fit items-center m-auto font-bold border-2 mb-3 border-white rounded-md"
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
