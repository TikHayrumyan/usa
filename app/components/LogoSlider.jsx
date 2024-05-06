"use client";
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import Image from "next/image";
export const sliderImg = [
  {
    path: "/ClientLogos/3.png",
  },
  {
    path: "/ClientLogos/2.png",
  },
  {
    path: "/ClientLogos/1.png",
  },
  {
    path: "/ClientLogos/7.png",
  },
  {
    path: "/ClientLogos/5.png",
  },
  {
    path: "/ClientLogos/6.png",
  },
  {
    path: "/ClientLogos/4.png",
  },
  {
    path: "/ClientLogos/10.png",
  },
  {
    path: "/ClientLogos/9.png",
  },
  {
    path: "/ClientLogos/8.png",
  },
  {
    path: "/ClientLogos/11.png",
  },
  {
    path: "/ClientLogos/12.png",
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
          perView: 6,
          gap: 10,
        },
        640: {
          perView: 5,
          // gap: 50,
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
      <div className={`glide-${num ? num : "09"} relative w-full z-20`}>
        {/* <!-- Slides --> */}
        <div data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 items-center">
            {sliderImg.map((item, index) => {
              return (
                <>
                  <li key={index} className="logos">
                    <Image
                      src={item.path}
                      className="h-auto object-contain py-5 "
                      width={250}
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
