import React from "react";
import primeBanner from "../Components/img/prime4.png";
import Product from "./Product";
import airpod from "../Components/img/airpods.jpg";
import anker from "../Components/img/anker.jpg";
import ipad from "../Components/img/ipad.jpg";
import watch from "../Components/img/watch.jpg";
import pen from "../Components/img/pen.jpg";
import laptop from "../Components/img/laptop.jpg";
import kurta from "../Components/img/kurta.jpg";
import mens from "../Components/img/mens.jpg";
import shoes from "../Components/img/shoes.jpg";
import book from "../Components/img/book.jpg";
import laptopImage from "../Components/img/laptopImage.jpg";
import soap from "../Components/img/soap.jpg";
import bottle from "../Components/img/bottle.jpg";
import pad from "../Components/img/pad.jpg";
import slide from "../Components/img/slide.jpg";

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
        <div className="homeRow md:flex md:flex-row grid md:mx-12 md:my-12">
          <Product
            id="12321341"
            title="ANKER Soundcore R50i True Wireless in-Ear Earbuds, TWS with 30H+ Playtime, Clear Calls & High Bass, IPX5-Water Resistant, Soundcore Connect App with 22 Preset EQs, Quick Connectivity, Black Color"
            price={1599}
            image={anker}
            rating={4}
            hideButton={false}
          />
          <Product
            id="49538094"
            title="Apple iPad (9th Generation): with A13 Bionic chip, 25.91 cm (10.2″) Retina Display, 64GB, Wi-Fi, 12MP front/8MP Back Camera, Touch ID, All-Day Battery Life – Space Grey"
            price={30400}
            image={ipad}
            rating={4}
            hideButton={false}
          />
          <Product
            id="49539023"
            title="realme Book(Slim) Evo Core i5 11th Gen 1135G7 - (8 GB/512 GB SSD/Windows 10 Home) RMNB1002 Thin and Light Laptop (14 inch, Real Gray, 1.38 kg, with MS Office) "
            price={42490}
            image={laptopImage}
            rating={4}
            hideButton={false}
          />
          <Product
            id="90823432"
            title="ZUVINO Cotton Kurta Set for Women || Kurti Set for Women || Kurti for Women || Latest Stylish Cotton Kurtis for Women || Kurta Sets Summers || Office Kurta Set || Plus Size Kurta"
            price={249}
            image={kurta}
            rating={4}
            hideButton={false}
          />
        </div>
        <div className="homeRow md:flex md:flex-row grid md:mx-12 md:my-12">
          <Product
            id="49539094"
            title="The Power of Your Subconscious Mind: Original Edition | Premium Paperback | How to control your mind and achieve your dreams | Original "
            price={413}
            image={book}
            rating={4}
            hideButton={false}
          />
          <Product
            id="4903850"
            title="Apple Watch SE (2nd Gen) [GPS 44 mm] Smart Watch w/Starlight Aluminium Case & Starllight Sport Band. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant"
            price={26499}
            image={watch}
            rating={4}
            hideButton={false}
          />
          <Product
            id="23445930"
            title="Apple AirPods Pro (2nd Generation) with MagSafe Case, amazon basics True Wireless in-Ear Earbuds with Mic, Touch Control, IPX5 Water-Resistance, Bluetooth 5.3, Up to 36 Hours Play Time, Voice Assistance and Fast Charging (White)"
            price={19499}
            image={airpod}
            rating={4}
            hideButton={false}
          />
          <Product
            id="3254354345"
            title="Kingone Upgraded Stylus Pen,Ipad Pencil,Ultra High Precision&Sensitivity,Palm Rejection,Prevents False On/Off Touch,Power Display,Tilt Sensitivity,Magnetic Adsorption For Ipad 2018&Later,White"
            price={1799}
            image={pen}
            rating={4}
            hideButton={false}
          />
        </div>

        <div className="homeRow md:flex md:flex-row grid md:mx-12 md:my-12">
          <Product
            id="90829332"
            title="Huion Inspiroy H950P Graphics Drawing Tablet 8.7x5.4 inches with Tilt Feature Battery-Free Pen 8192 Pressure Sensitivity and 8 User-Defined Shortcuts,Compatible with Mac, Linux(Ubuntu), Windows PC, and Android"
            price={3399}
            image={laptop}
            rating={4}
            hideButton={false}
          />
          <Product
            id="90821132"
            title="Campus Men's OXYFIT (N) BT.GRN/Gry Walking Shoes - 9UK/India 22G-574"
            price={649}
            image={shoes}
            rating={4}
            hideButton={false}
          />
          <Product
            id="3254284345"
            title=" hummel Calin Round Neck Half Sleeve Solid Regular fit Polyester T-Shirt for Men Comfortable Breathable Fabric Stretchable for Everyday Use Ideal for Yoga Training Gym Running or Performance"
            price={499}
            image={mens}
            rating={4}
            hideButton={false}
          />
        </div>

        <div className="homeRow md:flex md:flex-row grid md:mx-12 md:my-12">
          <Product
            id="29829332"
            title="Earthy Sapo Handmade Nuts Over Coconuts Body Cum Hair Soap (coconut milk, mango butter), 100g - Pack of 1"
            price={250}
            image={soap}
            rating={4}
            hideButton={false}
          />
          <Product
            id="90821189"
            title="HYETA 32 OZ Water Bottle with Times to Drink and Straw, Motivational Time Marker Water Bottles with Strap, Leakproof & BPA Free, 1 Liter Reusable Sports Water Bottle for Fitness, Gym & Outdoors, Green-Purple"
            price={479}
            image={bottle}
            rating={4}
            hideButton={false}
          />
          <Product
            id="3254904345"
            title="HUION HS64 Graphics Drawing Tablet Battery-Free Stylus Android Windows macOS with 6.3 x 4 inch Working Area Pen Tablet for Linux, Mac, Windows PC and Androidhummel Calin Round Neck Half Sleeve Solid Regular fit Polyester T-Shirt for Men Comfortable Breathable Fabric Stretchable for Everyday Use Ideal for Yoga Training Gym Running or Performance"
            price={2178}
            image={pad}
            rating={4}
            hideButton={false}
          />
        </div>
      </div>
      {/* products end */}
    </>
  );
}
export default Home;
