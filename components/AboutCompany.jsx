import Image from "next/image";
import React from "react";

const RenderSingleItem = ({ name }) => {
  return (
    <p className="flex items-center">
      <svg
        fillRule="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        className="text-violet-900 hi-solid hi-check-circle inline-block w-4 h-4 sm:w-5 sm:h-5"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span className="ml-2 text-sm sm:text-lg text-gray-600 ">{name}</span>
    </p>
  );
};

const AboutCompany = () => {
  return (
    <div className="w-full flex items-center">
      <div className="container mx-auto max-w-5xl h-fit">
        <div className=" grid grid-cols-1 sm:grid-cols-2  gap-4  my-5 mx-4 sm:mx-0">
          <div className="w-full relative ">
            <div className="w-full pt-10 pl-20 absolute  ">
              <Image
                className="w-full h-full rounded-3xl  "
                src="/assets/img/about.jpg"
                alt="local picture"
                height="250"
                width="220"
                layout="responsive"
              />
            </div>
            <div className=" pr-20 pb-20 ">
              <Image
                className="w-full h-full rounded-3xl"
                src="/assets/img/abena.jpg"
                alt="local picture"
                height="230"
                width="220"
                layout="responsive"
              />
            </div>
          </div>
          <div className="w-full h-full pt-5 flex flex-col  p-1 sm:p-5">
            <h1 className="text-gray-500">About Company</h1>
            <h1 className="font-semibold text-black text-2xl mt-5 mb-2 tracking-widest">
              Help every phase of <br />
              your Busines Growth
            </h1>

            <p className="text-gray-600 text-lg ">
              We help in making the lives of our customers better by creating a
              range of avenues through which thier lives can be better with
              Payment solutions and services using our brands, which include
              TrendiPay and many more
            </p>
            <div className="flex justify-between py-5 ">
              <div className="w-full">
                <RenderSingleItem name="Startups & Early" />
                <RenderSingleItem name="Growing Businesses" />
                <RenderSingleItem name="Press Release" />
                <RenderSingleItem name="Legal Notice" />
              </div>

              <div className="w-full">
                <RenderSingleItem name="Subscriptions" />
                <RenderSingleItem name="Ticket Support" />
                <RenderSingleItem name="Merchant refund" />
                <RenderSingleItem name="In-Store Payment" />
              </div>
            </div>

            <div className="my-3">
              <button className="px-6 py-2 bg-bslred text-white rounded-md hover:opacity-95">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
