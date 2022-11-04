import Image from "next/image";
import React from "react";

const RenderSingleComponent = ({ name, description, icon }) => {
  return (
    <div class="max-w-md py-2 px-8 bg-white  border border-slate-500 shadow-xl rounded-3xl mb-4">
      <div class="flex justify-center  -mt-16 ">
        <Image
          className="w-20 h-20 object-cover rounded-full"
          src="/assets/img/iso.png"
          height="100"
          width="100"
          layout="intrinsic"
          alt="card image"
        />
      </div>
      <div className="text-center mb-5 ">
        <h2 class="text-gray-800 text-3xl font-semibold">{name}</h2>
        <p class="mt-2 text-gray-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
          deserunt ea doloremque natus error, rerum quas odio quaerat nam ex
          commodi hic
        </p>
      </div>
    </div>
  );
};

const PaymentEcosystem = () => {
  return (
    <div
      className="hero  "
      style={{ backgroundImage: `url("/assets/img/map-bg.png")` }}
    >
      <div className="hero-overlay bg-white bg-opacity-95"></div>
      <div className="w-full h-full py-10 container px-8 sm:mx-auto   ">
        <div className="h-full w-full flex flex-col items-center ">
          {/* top */}
          <div className="max-w-2xl text-center ">
            <h1 className="font-bold text-2xl mb-3 text-black">
              Payment Ecosystem
            </h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          {/* 3 sections down */}
          <div className="w-full grid grid-cols-1 gap-16 sm:grid-cols-3 sm:gap-5 mt-20 ">
            <RenderSingleComponent name="E-Wallet" />
            <RenderSingleComponent name="Payment Gateway" />
            <RenderSingleComponent name="Point of Sales" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentEcosystem;

{
  /* <div className="w-full navbar bg-white py-5  flex justify-center ">
        <div className="max-w-4xl  px-10 ">
          <p className="font-medium text-md md:text-lg leading-6 text-black tracking-normal sm:tracking-wider text-center">
            The Smart Way for Online and Offline Payment Solution
          </p>
        </div>
      </div> */
}
