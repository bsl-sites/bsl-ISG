import Image from "next/image";
import React from "react";

const RenderSingleItem = ({ percentage, title, description }) => (
  <div className="w-full ">
    <div className=" h-20 w-20 ">
      <p className="border-2 border-white rounded-full h-full w-full  text-center py-5 text-white text-3xl">
        {percentage}%
      </p>
    </div>

    <h1 className="text-white mb-4 font-semibold mt-1">{title}</h1>
    <p className="text-sm text-gray-300">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor
    </p>
  </div>
);

const OurExperienceSection = () => {
  return (
    <div className="w-full bg-violet-900">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="flex flex-col mx-5 sm:mx-16 my-5   pr-0 sm:pr-20">
          <p className="text-white font-medium mb-2">Our Experience</p>
          <h1 className="text-bslred font-bold tracking-wide text-2xl sm:text-3xl mb-2 ">
            Our Roadmap to Reach <br /> Your Easy Payment Solution
          </h1>
          <p className="text-white text-ld">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
          <div className="w-full grid grid-cols-2 mt-5">
            <RenderSingleItem title="Success Payment" percentage="72" />
            <RenderSingleItem title="Positive Review" percentage="95" />
          </div>
        </div>
        <div className="">
          <Image
            className="w-full"
            src="/assets/img/picture-3.png"
            alt="sample picture"
            layout="responsive"
            width="200"
            height="120"
          />
        </div>
      </div>
    </div>
  );
};

export default OurExperienceSection;
