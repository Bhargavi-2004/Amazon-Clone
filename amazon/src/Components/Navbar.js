import React from "react";
import amazonLogo from "../Components/img/amazonLogo.png";
import searchGlass from "../Components/img/searchGlass.png";
import cartIcon from "../Components/img/cartIcon.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Navbar() {
  const [{ basket, user }] = useStateValue();

  const handlAuthentication = () => {
    if (user) {
      // eslint-disable-next-line
      const signout = signOut(auth);
    }
  };
  const link =
    "https://www.primevideo.com/detail/Login/0HBWDH95AN3UG2SX0M4YXRQ80W";
  return (
    <>
      {/* navbar start */}

      <div className="navbar bg-gray-900 h-14 flex">
        {/* amazon logo */}
        <Link to="/">
          <img
            className="h-14 w-42 px-2 py-3 object-cover object-center text-white"
            src={amazonLogo}
            alt="not found"
          />
        </Link>

        {/* input + search bar */}
        <input type="text" className="w-2/3 h-8 ml-1 my-3 bg-white" />
        <img
          src={searchGlass}
          alt="search"
          className="bg-yellow-500 h-8 my-3 ml-0 p-1.5"
        />

        {/* sign in */}
        <div className="flex text-white flex-row mx-5 space-x-5">
          <Link to={!user && "/login"}>
            <div onClick={handlAuthentication} className="option flex flex-col">
              <span className="text-xs">Hello, {user?.email || "Guest"}</span>
              <span className="font-bold text-sm">
                {user ? "Sign out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/orders">
            <div className="option flex flex-col">
              <span className="text-xs">Returns</span>
              <span className="font-bold text-sm">& Orders</span>
            </div>
          </Link>
          <Link to={link} target="_blank">
            <div className="option flex flex-col">
              <span className="text-xs">Your</span>
              <span className="font-bold text-sm">Prime</span>
            </div>
          </Link>
          <Link to="/checkout">
            <div className="option flex flex-row">
              <img
                src={cartIcon}
                alt="search"
                className="basket h-12 my-2 ml-0 p-1.5"
              />
              <span className="py-5 font-bold">{basket?.length}</span>
            </div>
          </Link>
        </div>
      </div>

      {/* navbar-end */}
    </>
  );
}

export default Navbar;
