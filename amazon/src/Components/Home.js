import React from "react";
import primeBanner from "../Components/img/prime4.png";

function Home() {
  return (
    <>
      <div className="home">
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
      </div>
    </>
  );
}
export default Home;
// https://www.youtube.com/watch?v=RDV3Z1KCBvo&t=1427s