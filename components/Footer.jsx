import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="w-full  bg-gray-100 text-black  pt-10 border-t-4 border-gray-300 ">
        <div className="mx-10 grid lg:grid-cols-5 gap-4 md:grid-cols-4">
          <div className="col-span-2 border-l-2 border-gray-600 pl-2 ">
            <h1 className="font-medium text-lg pb-3">Company</h1>
            <div className="grid grid-cols-2">
              <div className="navLinks ">
                <ul>
                  <Link href="/">About</Link>
                </ul>
                <ul>
                  <Link href="/">Blog</Link>
                </ul>
                <ul>
                  <Link href="/">Press</Link>
                </ul>
                <ul>
                  <Link href="/">Terms of Service</Link>
                </ul>
                <ul>
                  <Link href="/">Privacy</Link>
                </ul>
                <ul>
                  <Link href="/">Security</Link>
                </ul>
              </div>

              <div className="navLinks ">
                <ul>
                  <Link href="/">Digital Services</Link>
                </ul>
                <ul>
                  <Link href="/">Connectivity</Link>
                </ul>
                <ul>
                  <Link href="/">Data Centers</Link>
                </ul>
                <ul>
                  <Link href="/">Enterprise Solutions</Link>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-span-2 border-l-2 border-gray-600 pl-2">
            <h1 className="font-medium text-lg pb-3">Support</h1>
            <div className="grid grid-cols-2">
              <div className="navLinks ">
                <ul>
                  <Link href="/">Help</Link>
                </ul>
                <ul>
                  <Link href="/">Faq</Link>
                </ul>
                <ul>
                  <Link href="/">Order Status</Link>
                </ul>
                <ul>
                  <Link href="/">System Status</Link>
                </ul>
                <ul>
                  <Link href="/">Contact Us</Link>
                </ul>
              </div>

              <div className="navLinks ">
                <ul>
                  <Link href="/">Home Internent</Link>
                </ul>
                <ul>
                  <Link href="/">Bussiness Internet</Link>
                </ul>
                <ul>
                  <Link href="/">Big Business Internet</Link>
                </ul>
                <ul>
                  <Link href="/">Fibre for Properties</Link>
                </ul>
              </div>
            </div>
          </div>

          <div className="col border-l-2 border-gray-600 pl-2 ">
            <Image
              src="/assets/img/ifs-logo.png"
              layout="intrinsic"
              height="75px"
              width="240px"
              className="sm:h-[75px] h-[50px]"
              alt="spectrumfibre"
            />
            <p className="font-medium text-lg mb-3">Follow Us</p>
            <div className="mt-4 sm:mt-0 flex space-x-2 justify-start">
              {/* facebook */}
              <p className="rounded-full bg-transparent border border-black p-1 w-7 h-7 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  // style={{ fill: "#ffffff" }}
                >
                  <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z"></path>
                </svg>
              </p>

              {/* twitter */}
              <p className="rounded-full bg-transparent border border-black p-1 w-7 h-7 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 64 64"
                  // style={{ fill: "#ffffff" }}
                >
                  <path d="M61.932,15.439c-2.099,0.93-4.356,1.55-6.737,1.843c2.421-1.437,4.283-3.729,5.157-6.437	c-2.265,1.328-4.774,2.303-7.444,2.817C50.776,11.402,47.735,10,44.366,10c-6.472,0-11.717,5.2-11.717,11.611	c0,0.907,0.106,1.791,0.306,2.649c-9.736-0.489-18.371-5.117-24.148-12.141c-1.015,1.716-1.586,3.726-1.586,5.847	c0,4.031,2.064,7.579,5.211,9.67c-1.921-0.059-3.729-0.593-5.312-1.45c0,0.035,0,0.087,0,0.136c0,5.633,4.04,10.323,9.395,11.391	c-0.979,0.268-2.013,0.417-3.079,0.417c-0.757,0-1.494-0.086-2.208-0.214c1.491,4.603,5.817,7.968,10.942,8.067	c-4.01,3.109-9.06,4.971-14.552,4.971c-0.949,0-1.876-0.054-2.793-0.165C10.012,54.074,16.173,56,22.786,56	c21.549,0,33.337-17.696,33.337-33.047c0-0.503-0.016-1.004-0.04-1.499C58.384,19.83,60.366,17.78,61.932,15.439"></path>
                </svg>
              </p>

              {/* instagram */}
              <p className="rounded-full bg-transparent border border-black p-1 w-7 h-7 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                  // style={{ fill: "#ffffff" }}
                >
                  <path d="M 12 3 C 7.04 3 3 7.04 3 12 L 3 38 C 3 42.96 7.04 47 12 47 L 38 47 C 42.96 47 47 42.96 47 38 L 47 12 C 47 7.04 42.96 3 38 3 L 12 3 z M 38 8 L 41 8 C 41.55 8 42 8.45 42 9 L 42 12 C 42 12.55 41.55 13 41 13 L 38 13 C 37.45 13 37 12.55 37 12 L 37 9 C 37 8.45 37.45 8 38 8 z M 25 10 C 30.33 10 35.019688 12.8 37.679688 17 L 42 17 L 42 37 C 42 39.76 39.76 42 37 42 L 13 42 C 10.24 42 8 39.76 8 37 L 8 17 L 12.320312 17 C 14.980313 12.8 19.67 10 25 10 z M 25 12 C 17.83 12 12 17.83 12 25 C 12 32.17 17.83 38 25 38 C 32.17 38 38 32.17 38 25 C 38 17.83 32.17 12 25 12 z M 25 16 C 29.96 16 34 20.04 34 25 C 34 29.96 29.96 34 25 34 C 20.04 34 16 29.96 16 25 C 16 20.04 20.04 16 25 16 z"></path>
                </svg>
              </p>

              {/* linkedin */}
              <p className="rounded-full bg-transparent border border-black p-1 w-7 h-7 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  // style={{ fill: "#ffffff" }}
                >
                  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                </svg>
              </p>
            </div>
          </div>
        </div>
        <div className="mx-10 flex justify-between items-end mt-10 pb-5">
          <p className="text-sm">
            &copy;Copyright 2022 Broadspectrum Ltd. All Rights Reserved.
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
