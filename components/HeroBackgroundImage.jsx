import React from "react";

const HeroBackgroundImage = () => {
  return (
    <React.Fragment>
      <div
        className="hero sm:h-[650px] h-[350px] border border-black  -mt-20 z-0"
        style={{ backgroundImage: `url("/assets/img/logistics-1.png")` }}
      >
        <div className="hero-overlay bg-blue-500 bg-opacity-30"></div>
        <div className="w-full h-full flex items-center sm:items-center container mx-auto   ">
          <div className="max-w-2xl mb-0  sm:mb-20 text-white  text-center  ">
            <h1 className="mx-10 sm:mx-0 mb-5 text-xl sm:text-4xl sm:font-bold font-semibold  tracking-wide text-center sm:text-left z-40">
              We provide super fast and <br />
              fuss-free logistics services
            </h1>
            <p className="mx-10 sm:mx-0 text-center  font-bold tracking-wider">
              We guarantee no complications and full refunds in case of damages
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroBackgroundImage;
