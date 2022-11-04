import Image from "next/image";
import React from "react";

const ProductCard = ({ title }) => {
  return (
    <div className="max-w-sm  overflow-hidden shadow-lg bg-white border border-gray-400  ">
      <div className="p-2">
        <Image
          className="w-full"
          src="/assets/img/microwave.jpeg"
          alt="Sunset in the mountains"
          height="200"
          width="300"
          layout="responsive"
        />

        <div className=" pt-2 pb-4 sm:pb-6 ">
          <div className="font-bold text-sm sm:text-xl  mb-2 text-blue-900">
            {title}
          </div>
          <p className="text-gray-800 text-xs sm:text-sm">
            Spectrum fibre offers intenet services over its ultra-modern fibre
            network ...
          </p>
        </div>

        <button className="flex items-center bg-blue-900 px-1 sm:px-4 py-1 sm:py-1.5 rounded-sm text-white border border-gray-100 mb-2 hover:opacity-90">
          <p className="text-center uppercase  text-xs">View our coverage</p>
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
  );
};

const ProductSection = () => {
  return (
    <React.Fragment>
      <div className="bg-sky-200 py-10 px-5 ">
        <div className="container mx-auto flex flex-col ">
          <div className="w-full  flex justify-center ">
            <div className="max-w-4xl mb-8">
              <h1 className="text-center font-bold text-2xl text-black tracking-wide mb-3">
                Our Products
              </h1>
              <p className="text-gray-500 text-center text-sm sm:text-lg">
                Partners can rely on the superiority of our full fibre broadband
                and ethernet products to serve the demanding expectations of
                customers because they&apos;re built better by design
              </p>
            </div>
          </div>
          {/* now th e cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 ">
            <ProductCard title="Backhaul" />
            <ProductCard title="Dark Fibre" />
            <ProductCard title="Metro Solutions" />
            <ProductCard title="Microwave" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductSection;
