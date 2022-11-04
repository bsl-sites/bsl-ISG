import Image from "next/image";
import React from "react";

const AccreditationSection = () => {
  return (
    <div className="py-10 px-5 bg-white">
      <div className="text-center ">
        <h1 className="font-bold text-2xl text-black tracking-wide mb-4">
          We&apos;re Accredited
        </h1>
        <p className="text-gray-500 text-center text-sm sm:text-lg mb-5">
          We&apos;re delighted whenever we&apos;re recognised for our commitment
          to serving the channel <br /> and for delivering superior full fibre
          connectivity. Here are just a few
        </p>

        <div className="flex justify-center gap-2 sm:gap-10">
          <Image
            className="w-full"
            src="/assets/img/iso.png"
            alt="Sunset in the mountains"
            height="100"
            width="100"
            layout="intrinsic"
          />
          <Image
            className="w-full"
            src="/assets/img/iso.png"
            alt="Sunset in the mountains"
            height="100"
            width="100"
            layout="intrinsic"
          />
          <Image
            className="w-full"
            src="/assets/img/iso.png"
            alt="Sunset in the mountains"
            height="100"
            width="100"
            layout="intrinsic"
          />
        </div>
      </div>
    </div>
  );
};

export default AccreditationSection;
