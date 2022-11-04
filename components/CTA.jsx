import React from "react";

const CTA = () => {
  return (
    <div className="w-full flex flex-col items-center py-10 bg-gray-200 ">
      <div className="max-w-3xl text-center px-10">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-black font-bold tracking-wide mb-2">
            Start using BSpay today
          </h1>
          <p className="text-md text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt tempor incididunt
          </p>

          <div className="flex flex-col sm:flex-row  gap-5 mt-5">
            <button className="px-5 py-2 border border-gray-800 rounded-full text-gray-900">
              Explore Buiness Solutions
            </button>
            <button className="px-5 py-2 bg-bslred rounded-full text-white hover:bg-opacity-95">
              Sign Up New
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
