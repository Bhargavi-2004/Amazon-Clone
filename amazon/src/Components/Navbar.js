import React from "react";
import amazonLogo from "../Components/img/amazonLogo.png";
import searchGlass from "../Components/img/searchGlass.png";
import cartIcon from "../Components/img/cartIcon.png";

function Navbar() {
  return (
    <>
      {/* navbar start */}

      <div className="navbar bg-gray-900 h-14 flex">
        {/* amazon logo */}
        <img
          className="h-14 w-42 px-2 py-3 object-cover object-center text-white"
          src={amazonLogo}
          alt="not found"
        />

        {/* input + search bar */}
        <input type="text" className="w-1/2 h-8 ml-1 my-3 bg-white" />
        <img
          src={searchGlass}
          alt="search"
          className="bg-yellow-500 h-8 my-3 ml-0 p-1.5"
        />

        {/* sign in */}
        <div className="flex text-white flex-row mx-5 space-x-5">
          <div className="option">
            <span className="text-xs">Hello, sign in</span>
            <br />
            <span className="font-bold text-md">Accounts & Lists</span>
          </div>
          <div className="option">
            <span className="text-xs">Returns</span>
            <br />
            <span className="font-bold text-md">& Orders</span>
          </div>
          <div className="option">
            <span className="text-xs">Your</span>
            <br />
            <span className="font-bold text-md">Prime</span>
          </div>
          <div className="option">
            <img src={cartIcon} alt="search" className="h-12 my-2 ml-0 p-1.5" />
          </div>
        </div>
      </div>

      {/* navbar-end */}
    </>
  );
}

export default Navbar;
