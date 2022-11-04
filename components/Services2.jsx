import Image from "next/image";
import React, { useState } from "react";

const servicesItems = [
  { name: "Air Freight" },
  { name: "Rail Freight" },
  { name: "LTE Freight" },
  { name: "Sea Freight" },
  { name: "Land Freight" },
  { name: "Warehousing" },
];

const RenderSingleItem = ({ name }) => {
  return (
    <p className="flex items-center my-1 ">
      <svg
        fillRule="text-bslpink"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        className="text-red-800 hi-solid hi-check-circle inline-block w-4 h-4 sm:w-5 sm:h-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span className="ml-2 text-lg sm:text-lg text-gray-600 ">{name}</span>
    </p>
  );
};

const Services2 = () => {
  const [servicesItemState, setServicesItemState] = useState(2);
  return (
    <>
      <div className="w-full container mx-auto  ">
        <div className="w-full  border-b-2 border-gray-100">
          <div className="flex flex-wrap text-black justify-center ">
            {servicesItems.map((item, i) => (
              <button
                key={i}
                className={` ${
                  servicesItemState === i && "border-b-4 border-bslpink"
                }  px-8 py-2 text-lg sm:text-xl font-bold tracking-wide hover:border-b-4 hover:border-bslpink`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-4  my-5 mx-4 sm:mx-0">
          <div className="w-full h-full">
            <Image
              className="w-full h-full "
              src="/assets/img/logistics-3.jpeg"
              alt="local picture"
              height="130"
              width="200"
              layout="responsive"
            />
          </div>
          <div className="w-full h-full pt-5 flex flex-col  p-1 sm:px-5 ">
            <h1 className="font-bold text-black text-2xl sm:text-5xl text-center sm:text-left mt-2 mb-2 tracking-wide">
              Fast and reliable <br /> logistics services
            </h1>
            <p className="text-gray-600 text-lg my-5 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>
            <div className="w-full">
              <RenderSingleItem name="Startups & Early" />
              <RenderSingleItem name="Growing Businesses" />
              <RenderSingleItem name="Press Release" />
              <RenderSingleItem name="Legal Notice" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services2;
