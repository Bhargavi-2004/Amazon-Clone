import React from "react";
import { Link } from "react-router-dom";
import amazonLogo from "../Components/img/amazonLogo.png";

const Footer = () => {
  return (
    <div className="h-auto w-full bg-slate-800 text-white">
      <a href="/">
        <div className="backToTop bg-slate-700 text-yellow-50 text-center p-4 font-bold">
          Back to Top
        </div>
      </a>
      <div className="footerColumn max-h-min sm:ml-12 sm:mr-12 xl:ml-80 xl:mr-80 md:ml-30 md:mr-30 p-12">
        <div className="footer-1 flex flex-col m-12 gap-y-10 md:flex md:flex-row h-auto md:gap-x-20">
          <div className="footerColumn-1 d-flex justify-center">
            <div className="colHead font-bold md:w-fit">Get to Kow Us</div>
            <ul className="p-3 w-fit">
              <li className="p-1">
                <Link to="/">About us</Link>
              </li>
              <li className="p-1">
                <Link to="/">Careers</Link>
              </li>
              <li className="p-1">
                <Link to="/">Press Releases</Link>
              </li>
              <li className="p-1">
                <Link to="/">Amazon Science</Link>
              </li>
            </ul>
          </div>
          <div className="footerColumn-2 d-flex justify-center">
            <div className="colHead font-bold md:w-fit">Connect with Us</div>
            <ul className="p-3 w-fit">
              <li className="p-1">
                <Link to="/">Facebook</Link>
              </li>
              <li className="p-1">
                <Link to="/">Twitter</Link>
              </li>
              <li className="p-1">
                <Link to="/">Instagram</Link>
              </li>
              <li className="p-1">
                <Link to="/">Amazon Science</Link>
              </li>
            </ul>
          </div>
          <div className="footerColumn-3 d-flex justify-center">
            <div className="colHead font-bold md:w-fit">Make Money with Us</div>
            <ul className="p-3 w-fit">
              <li className="p-1">
                <Link to="/">Sell on Amazon</Link>
              </li>
              <li className="p-1">
                <Link to="/">Sell under amazon Accelerator</Link>
              </li>
              <li className="p-1">
                <Link to="/">Product and Build Your Brand</Link>
              </li>
              <li className="p-1">
                <Link to="/">Amazon Global Selling</Link>
              </li>
              <li className="p-1">
                <Link to="/">Become an Affiliate</Link>
              </li>
              <li className="p-1">
                <Link to="/">Fulfilment by Amazon</Link>
              </li>
              <li className="p-1">
                <Link to="/">Advertise Your Product</Link>
              </li>
              <li className="p-1">
                <Link to="/">Amazon Pay on Merchants</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-2">
        {/* amazon logo */}
        <Link to="/">
          <img
            className="h-12 w-42 m-auto pb-4 object-cover object-center text-white"
            src={amazonLogo}
            alt="not found"
          />
        </Link>
      </div>
      <div className="footer-3 bg-black">
        <div className="bg-black flex flex-col text-center gap-y-1 md:flex md:flex-row sm:ml-12 sm:mr-12 xl:ml-80 xl:mr-80 md:ml-40 md:mr-40 sm:p-2 md:p-4 p-4 h-auto ">
          <div className="m-12 sm:m-1 md:p-4 xl:m-12">
            <a href="">
              AbeBooks<br></br>
            </a>
            <span>
              Books, art <br></br> & collectibles
            </span>
          </div>
          <div className="m-12 sm:m-1 md:p-4 xl:m-12">
            <a href="">
              Amazon Web Services<br></br>
            </a>
            <span>
              Scalable Cloud <br></br>Computing Services
            </span>
          </div>
          <div className="m-12 sm:m-1 md:p-4 xl:m-12">
            <a href="">
              Audible<br></br>
            </a>
            <span>
              Download<br></br> Audio Books
            </span>
          </div>
          <div className="m-12 sm:m-1 md:p-4 xl:m-12 hidden md:block">
            <a href="">
              IMDB<br></br>
            </a>
            <span>
              Movies, TV<br></br>& celebraties
            </span>
          </div>
        </div>
      </div>
      <div className="copyright bg-black">
        <div className="d-flex flex-col text-center">
          <a href="" className="p-4">
            {" "}
            Conditions of Use & Sale{" "}
          </a>
          <a href="" className="p-4">
            {" "}
            Privacy Notice{" "}
          </a>
          <a href="" className="p-4">
            {" "}
            Interse-Based Ads{" "}
          </a>
        </div>
        <div className="text-center">
          &copy; 1996-2024, Amazon.com, Inc. ot its affilites
        </div>
      </div>
    </div>
  );
};

export default Footer;
