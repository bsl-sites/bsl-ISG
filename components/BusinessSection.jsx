import Link from "next/link";
import React from "react";

const RenderInvestmentItem = ({ value, title }) => (
  <div className="flex flex-col items-center justify-center text-white max-w-md">
    <h1 className="mb-1.5 text-2xl md:text-4xl font-extrabold tracking-wide">
      {value}
    </h1>
    <h1 className="font-light  uppercase sm:tracking-widest">{title}</h1>
  </div>
);

const BusinessSection = () => {
  return (
    <div
      className="hero sm:h-[620px] h-[500px] py-4 sm:py-10  "
      style={{ backgroundImage: `url("assets/img/background-2.jpg")` }}
    >
      {/* <div className="hero-overlay bg-opacity-60"></div> */}
      <div className="w-full h-full flex-col justify-between container mx-auto  px-5 sm:px-0  ">
        {/* first */}
        <div className="flex flex-col justify-between  max-w-lg  mb-4 sm:mb-10 text-white">
          <div className="mb-4 sm:mb-8">
            <h1 className="uppercase font-bold text-md lg:text-4xl tracking-[0.17em]">
              WE&apos;RE INVESTING <br /> $2.3BN
            </h1>
          </div>
          <div>
            <p className=" tracking-normal sm:tracking-widest leading-6 text-md">
              We&apos;re buiding a world-class, gigabit-speed full Fibre network
              that&apos;s ultra-reliable, designed from scracth for the digital
              age and fully fit for the future. By 2025 we&apos;ll be across 285
              cities, towns, and villages representing eight million homes,
              800,000 businesses, 400,000 public sector sites and 250,000 5G
              access points. It&apos;s not getting there as quickly as possible
              that matters though - its about how we get there and the quality
              of service we deliver with our partners.
            </p>
          </div>

          <div className="my-5">
            <button className="flex items-center bg-blue-800 px-4 py-1.5 rounded-sm border border-gray-100 hover:opacity-90">
              <p className="text-center uppercase ">View our coverage</p>
              <svg
                aria-hidden="true"
                className="ml-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {/* second */}
        <div className="flex justify-between  ">
          <RenderInvestmentItem value="$32" title="INVESTING" />
          <RenderInvestmentItem value="2 M" title="HOMES" />
          <RenderInvestmentItem value="143 K" title="business" />
          <RenderInvestmentItem value="102" title="location" />
        </div>
      </div>
    </div>
  );
};

export default BusinessSection;
