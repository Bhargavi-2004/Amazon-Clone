import React from "react";
import amazonLogo from "../Components/img/amazonLogo.png";
import searchGlass from "../Components/img/searchGlass.png";
import cartIcon from "../Components/img/cartIcon.png";
import { Link } from "react-router-dom";

function Navbar() {
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
        <input type="text" className="w-1/2 h-8 ml-1 my-3 bg-white" />
        <img
          src={searchGlass}
          alt="search"
          className="bg-yellow-500 h-8 my-3 ml-0 p-1.5"
        />

        {/* sign in */}
        <div className="flex text-white flex-row mx-5 space-x-5">
          <div className="option flex flex-col">
            <span className="text-xs">Hello, sign in</span>
            <span className="font-bold text-sm">Accounts & Lists</span>
          </div>
          <div className="option flex flex-col">
            <span className="text-xs">Returns</span>
            <span className="font-bold text-sm">& Orders</span>
          </div>
          <div className="option flex flex-col">
            <span className="text-xs">Your</span>
            <span className="font-bold text-sm">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="option">
              <img
                src={cartIcon}
                alt="search"
                className="h-12 my-2 ml-0 p-1.5"
              />
            </div>
          </Link>
        </div>
      </div>

      {/* navbar-end */}
    </>
  );
}

export default Navbar;
