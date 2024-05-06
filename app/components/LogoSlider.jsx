"use client";
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import Image from "next/image";
export const sliderImg = [
  {
    path: "/ClientLogos/IMG_2569.PNG",
  },
  {
    path: "/ClientLogos/IMG_2570.PNG",
  },
  {
    path: "/ClientLogos/IMG_2571.PNG",
  },
  {
    path: "/ClientLogos/IMG_2572.PNG",
  },
  {
    path: "/ClientLogos/IMG_2573.PNG",
  },
  {
    path: "/ClientLogos/IMG_2574.PNG",
  },
  {
    path: "/ClientLogos/IMG_2575.PNG",
  },
  {
    path: "/ClientLogos/IMG_2576.PNG",
  },
  {
    path: "/ClientLogos/IMG_2577.PNG",
  },
  {
    path: "/ClientLogos/IMG_2578.PNG",
  },
  {
    path: "/ClientLogos/IMG_2579.PNG",
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
          perView: 4,
          // gap: 36,
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
                      width={450}
                      height={300}
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
