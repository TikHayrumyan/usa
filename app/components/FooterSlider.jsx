"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Logo from "../../public/Logos/creatordecklogo_CD_WORDMARK_WHITE.png";
import Marquee from "react-fast-marquee";
export const sliderData = [
  {
    heading: "BRANDS: ",
    Text: "LET US HELP YOU ENGINEER INFLUENCE",
  },
  {
    heading: "CREATORS: ",
    Text: "WE HAVE THE RESOURCES TO SUPPORT YOU IN YOUR CREATOR JOURNEY",
  },
  
];
export default function FooterSlider() {
  
  return (
    <>

      <div>
        <Marquee speed={100} delay={0} className="marquee">
          <div
            className="overflow-hidden mr-52"
          >
            <div className="flex items-center marqueeDiv">
              <span className=" text-lg sm:text-4xl-custom font-bold text-[#fe522d]">
                BRANDS:
              </span>

              <span
                className="sm:text-4xl-custom  text-lg font-bold text-white flex w-auto items-center spanMobile"
                style={{ marginLeft: "0.5vw", marginRight: "1.5vw" }}
              >
                LET US HELP YOU ENGINEER INFLUENCE</span>

              <Image
                alt="logo"
                src={Logo}
                width={30}
                height={30}
                className="sliderLogo"
              />
            </div>
          </div>
          <div
            className="overflow-hidden marqueeDiv"
          >
            <div className="flex items-center ">
              <span className=" text-lg sm:text-4xl-custom font-bold text-[#fe522d]">
                CREATORS:
              </span>

              <span
                className="sm:text-4xl-custom  text-lg font-bold text-white flex w-auto items-center spanMobile"
                style={{ marginLeft: "0.5vw", marginRight: "1.5vw" }}
              >
                WE HAVE THE RESOURCES TO SUPPORT YOU IN YOUR CREATOR JOURNEY</span>

              <Image
                alt="logo"
                src={Logo}
                width={30}
                height={30}
                className="sliderLogo"
              />
            </div>
          </div>
          <div
            className="overflow-hidden "
          >
            <div className="flex items-center marqueeDiv">
              <span className=" text-lg sm:text-4xl-custom font-bold text-[#fe522d]">
                BRANDS:
              </span>

              <span
                className="text-lg sm:text-4xl-custom  font-bold text-white flex w-auto items-center spanMobile"
                style={{ marginLeft: "0.5vw", marginRight: "1.5vw" }}
              >
                LET US HELP YOU ENGINEER INFLUENCE</span>

              <Image
                alt="logo"
                src={Logo}
                width={30}
                height={30}
                className="sliderLogo"
              />
            </div>
          </div>
          <div
            className="overflow-hidden marqueeDiv"
          >
            <div className="flex items-center ">
              <span className=" text-lg sm:text-4xl-custom font-bold text-[#fe522d]">
                CREATORS:
              </span>

              <span
                className="sm:text-4xl-custom  text-lg font-bold text-white flex w-auto items-center spanMobile"
                style={{ marginLeft: "0.5vw", marginRight: "1.5vw" }}
              >
                WE HAVE THE RESOURCES TO SUPPORT YOU IN YOUR CREATOR JOURNEY</span>

              <Image
                alt="logo"
                src={Logo}
                width={30}
                height={30}
                className="sliderLogo"
              />
            </div>
          </div>
        </Marquee>
      </div>
    </>
  );
}
