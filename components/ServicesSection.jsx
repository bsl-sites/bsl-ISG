import Image from "next/image";
import React from "react";

const ServiceCard = ({ title, description }) => {
  return (
    <div className="max-w-sm  overflow-hidden bg-transparent ">
      <div className=" text-left">
        <Image
          className="w-full"
          src="/assets/img/community.png"
          alt="Sunset in the mountains"
          height="200"
          width="200"
          layout="intrinsic"
        />

        <div className=" pt-2 pb-4 sm:pb-6 ">
          <div className="font-bold text-sm sm:text-xl  mb-2 text-blue-900">
            {title}
          </div>
          <p className="text-gray-800 text-xs sm:text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <React.Fragment>
      <div className="bg-white">
        <div className="my-10 container mx-auto px-10 sm:px-0">
          <div className="flex flex-col">
            <div className="text-center mb-4">
              <h1 className="font-bold text-lg sm:text-2xl text-black  sm:tracking-wide mb-4">
                We provide quality internet services
              </h1>
              <p className="text-gray-500">
                We&apos;re bringing big city speeds and beyond <br /> to the
                Villages and Small Towns
              </p>
            </div>

            {/* 3 sections */}
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-5">
              <ServiceCard
                title="Residential"
                description="We go beyong today's broadband
            with the final connectiont to your home being made
            by the humble copper wire (FTTC). We offer full fibre 
            broadband (FTTH). Works, surf and play beyond limitations"
              />
              <ServiceCard
                title="Businesses"
                description="Make your business more productive with spectrum fibre ISP business broadband. 
            We offer dedicated line which you can share with nobody, with bandwidth availabilty ranging from 
            100Mb to 10Gb with speeds"
              />
              <ServiceCard
                title="Communities"
                description="We know that we can improve your telecommnunications on your developments. 
            We aim to deliver the best service, both to you as developers and to our shared customers"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ServicesSection;
