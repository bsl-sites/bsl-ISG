import React from "react";

const Services3 = () => {
  return (
    <>
      <div
        className="hero sm:h-[650px] h-[350px]   "
        style={{ backgroundImage: `url("/assets/img/logistics-2.jpeg")` }}
      >
        <div className="hero-overlay bg-blue-400 bg-opacity-40"></div>
        <div className="w-full h-full flex items-center sm:items-center container mx-auto  ">
          <div className=" mb-0  sm:mb-20 text-white  text-center  ">
            <h1 className=" mb-5 text-xl sm:text-4xl sm:font-bold font-semibold  tracking-wide text-center sm:text-left z-40">
              We provide the best and <br />
              fastest courier services <br />
              nowadays
            </h1>
            <p className="text-center  font-medium tracking-wider">
              We guarantee no complications and full refunds in case of damages
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services3;
