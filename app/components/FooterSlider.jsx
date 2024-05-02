"use client";
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import Image from "next/image";
import Logo from "../../public/Logos/creatordecklogo_CD_WORDMARK_WHITE.png"
export const sliderData = [
  {
    heading: "BRANDS: ",
    Text: "LET US HELP YOU ENGINEER INFLUENCE",
  },
  {
    heading: "CREATORS: ",
    Text: "WE HAVE THE RESOURCES TO SUPPORT YOU IN YOUR CREATOR JOURNEY",
  },
  {
    heading: "BRANDS: ",
    Text: "LET US HELP YOU ENGINEER INFLUENCE",
  },
  {
    heading: "CREATORS: ",
    Text: "WE HAVE THE RESOURCES TO SUPPORT YOU IN YOUR CREATOR JOURNEY",
  },
  {
    heading: "BRANDS: ",
    Text: "LET US HELP YOU ENGINEER INFLUENCE",
  }
];
export default function FooterSlider() {
  useEffect(() => {
    const slider = new Glide(`.glide-19`, {
      type: "carousel",
      autoplay: 1,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 2,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 1,
        },
        640: {
          perView: 1,
          gap: 36,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Testimonial carousel --> */}
      <div className={`glide-19 relative w-full`}>
        {/* <!-- Slides --> */}
        <div data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 items-center">
            {sliderData.map((item, index) => {
              return (
                <>
                  <li key={index} >
                    <div className="flex items-center " >
                      <span className=" text-sm sm:text-lg font-bold text-[#fe522d]">{item.heading}</span>
                      <span className="sm:text-lg text-xs font-bold text-white flex w-auto items-center " style={{marginLeft:"0.5vw",marginRight:"1vw"}}>{item.Text}</span>
                      <Image alt="logo" src={Logo} width={30} height={30} className="sm:w-auto w-4"/>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
      {/*<!-- End Testimonial carousel --> */}
    </>
  );
}