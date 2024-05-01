"use client";
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import Image from "next/image";
export const sliderImg = [
  {
    path: "/ClientLogos/Yves_Saint_Laurent_white.png",
  },
  {
    path: "/ClientLogos/57e1f21f7a9f9975eb85408f0a647c77.png",
  },
  {
    path: "/ClientLogos/loreal-logo_white.png",
  },
  {
    path: "/ClientLogos/IT_Cosmetics_white.png",
  },
  {
    path: "/ClientLogos/maybelline-new-york-logo-WHITE.png",
  },
  {
    path: "/ClientLogos/michaels-logo_white.png",
  },
  {
    path: "/ClientLogos/OpenFarm_White.png",
  },
  {
    path: "/ClientLogos/Pair-of-Thieves-New-Logo-white.png",
  },
  {
    path: "/ClientLogos/patron-logo_white.png",
  },
  {
    path: "/ClientLogos/pf-changs-logo-white.png",
  },
  {
    path: "/ClientLogos/Shein-logo_White.png",
  },
  {
    path: "/ClientLogos/UD-Logo_White.png",
  },
];
export default function LogoSlider({ num }) {
  useEffect(() => {
    const slider = new Glide(`.glide-${num ? num : "09"}`, {
      type: "carousel",
      autoplay: 1,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 6,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 4,
        },
        640: {
          perView: 2,
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
      <div className={`glide-${num ? num : "09"} relative w-full`}>
        {/* <!-- Slides --> */}
        <div data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 items-center">
            {sliderImg.map((item, index) => {
              return (
                <>
                  <li key={index}>
                    <Image
                      src={item.path}
                      className="h-auto object-cover py-5"
                      width={150}
                      height={100}
                      alt="Logo"
                    />
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
