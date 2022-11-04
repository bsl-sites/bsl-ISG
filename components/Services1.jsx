import Image from "next/image";
import React from "react";

const Services1 = () => {
  return (
    <>
      <div className="w-full container mx-auto py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2  sm:gap-20  my-5 mx-4 sm:mx-0">
          <div className="w-full h-full pt-5 flex flex-col justify-center  sm:gap-5 sm:px-10 border border-red-500 ">
            <div className="">
              <h1 className="font-bold text-black text-2xl sm:text-5xl text-center sm:text-left tracking-wide">
                Fast and reliable <br /> logistics services
              </h1>
              <p className="text-gray-600 text-lg my-5 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </p>
            </div>
            <hr />
            <div>
              <h1 className="text-xl font-bold tracking-wide">
                View more about our Services
              </h1>
            </div>
          </div>

          <div className="w-full h-full border border-red-500">
            <Image
              className="w-full h-full "
              src="/assets/img/logistics-4.jpeg"
              alt="local picture"
              height="100"
              width="200"
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services1;
