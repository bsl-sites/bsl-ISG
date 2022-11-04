import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <div className=" w-full py-5 px-10">
      <div className="flex justify-center items-center">
        <div className="mr-2 ">
          <Image
            className=" "
            src="/assets/img/logos/startimes.png"
            alt="local picture"
            height="50"
            width="200"
            layout="intrinsic"
          />
        </div>
        <div className="mr-2 ">
          <Image
            className=" "
            src="/assets/img/logos/mtn.png"
            alt="local picture"
            height="50"
            width="200"
            layout="intrinsic"
          />
        </div>
        <div className="mr-2 ">
          <Image
            className=" "
            src="/assets/img/logos/vodafone.png"
            alt="local picture"
            height="50"
            width="200"
            layout="intrinsic"
          />
        </div>
        <div className="mr-2 ">
          <Image
            className=" "
            src="/assets/img/logos/airtetigo.webp"
            alt="local picture"
            height="50"
            width="200"
            layout="intrinsic"
          />
        </div>
        <div className="mr-2 ">
          <Image
            className=" "
            src="/assets/img/logos/ecg.png"
            alt="local picture"
            height="50"
            width="200"
            layout="intrinsic"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
