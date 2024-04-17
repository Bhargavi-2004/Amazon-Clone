import React from "react";
import primeBanner from "../Components/img/prime4.png";
import Product from "./Product";
import airpod from "../Components/img/airpods.jpg"
import anker from "../Components/img/anker.jpg"
import ipad from "../Components/img/ipad.jpg"
import watch from "../Components/img/watch.jpg"
import pen from "../Components/img/pen.jpg"
import laptop from "../Components/img/laptop.jpg"

function Home() {
  return (
    <>
      <div className="home bg-gray-100 h-full">
        {/* banner start */}
        <div className="w-full h-auto homePage">
          <img
            src={primeBanner}
            alt="prime"
            className="object-cover object-center w-full h-96"
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) rgba(0,0,0,0))",
              zIndex: -1,
            }}
          />
        </div>
        {/* banner end */}

        {/* products  start*/}
        <div className="homeRow flex flex-row md:mx-12 md:my-12">
          <Product
            title="ANKER Soundcore R50i True Wireless in-Ear Earbuds, TWS with 30H+ Playtime, Clear Calls & High Bass, IPX5-Water Resistant, Soundcore Connect App with 22 Preset EQs, Quick Connectivity, Black Color"
            price={1599}
            image={anker}
            rating={4}
          />
          <Product
            title="Apple iPad (9th Generation): with A13 Bionic chip, 25.91 cm (10.2″) Retina Display, 64GB, Wi-Fi, 12MP front/8MP Back Camera, Touch ID, All-Day Battery Life – Space Grey"
            price={30400}
            image={ipad}
            rating={4}
          />
        </div>
        <div className="homeRow flex flex-row md:mx-12 md:my-12">
          <Product
            title="Apple Watch SE (2nd Gen) [GPS 44 mm] Smart Watch w/Starlight Aluminium Case & Starllight Sport Band. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant"
            price={26499}
            image={watch}
            rating={4}
          />
          <Product
            title="Apple AirPods Pro (2nd Generation) with MagSafe Case"
            price={19499}
            image={airpod}
            rating={4}
          />
          <Product
            title="Kingone Upgraded Stylus Pen,Ipad Pencil,Ultra High Precision&Sensitivity,Palm Rejection,Prevents False On/Off Touch,Power Display,Tilt Sensitivity,Magnetic Adsorption For Ipad 2018&Later,White"
            price={1799}
            image={pen}
            rating={4}
          />
        </div>
        <div className="homeRow md:mx-12 md:my-12">
          <Product
            title="Huion Inspiroy H950P Graphics Drawing Tablet 8.7x5.4 inches with Tilt Feature Battery-Free Pen 8192 Pressure Sensitivity and 8 User-Defined Shortcuts,Compatible with Mac, Linux(Ubuntu), Windows PC, and Android"
            price={3399}
            image={laptop}
            rating={4}
          />
        </div>
      </div>
      {/* products end */}
    </>
  );
}
export default Home;
