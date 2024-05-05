"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import LAROLLETTES_HOMPAGE from "../../public/imgs/LAROLLETTES_HOMPAGE.jpg";
import ICESKAKTER_UD from "../../public/imgs/ICESKAKTER_UD-HOMPAGE.gif";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
// import { slideFromBottom } from "@/utils/motion";

export default function AgencyEngineers() {
  const scrollRef = useRef(null);
  const slideFromBottomText = {
    hidden: { y: +100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      zIndex: 3,
      transition: {
        delay: 0.8,
        duration: 1,
      },
    },
  };
  const slideFromBottomPic = {
    hidden: { y: +100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      zIndex: 2,

      transition: {
        delay: 0.6,
        duration: 1,
      },
    },
  };
  const slideFromBottomGif = {
    hidden: { y: +100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      zIndex: 2,
      transition: {
        delay: 1,
        duration: 1,
      },
    },
  };

  return (
    <div className="container flex flex-col w-full sm:h-[61.7vw] sm:mb-[1.844vw] mb-4 relative z-10">
      <div className="sm:flex hidden relative w-full h-[42.857vw] justify-center items-center mt-[1.844vw]">
        <motion.div
          className="absolute left-0 top-0 z-10 w-[22.143vw] h-[36vw]"
          initial="hidden"
          whileInView="visible"
          variants={slideFromBottomPic}
        >
          <Image
            alt="img"
            src={LAROLLETTES_HOMPAGE}
            fill
            className="absolute left-0 top-0 z-10 object-cover"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideFromBottomText}
          className="w-[80vw]"
        >
          <h1 className="relative z-20 font-bold text-[10vw] leading-[9.6vw]  w-full text-center text-[#fe522d] italic">
            AN AGENCY
            <br /> <span className="not-italic">THAT ENGINEERS</span> INFLUENCE
          </h1>
        </motion.div>
        <motion.div
          className="absolute right-0 bottom-[1.844vw] z-10 w-[20.6vw] h-[26vw]"
          initial="hidden"
          whileInView="visible"
          variants={slideFromBottomGif}
        >
          <Image
            alt="img"
            src={ICESKAKTER_UD}
            fill
            className="absolute right-0 z-10 object-cover"
          />
        </motion.div>
      </div>
      {/* mobile */}
      <div className="sm:hidden flex flex-col items-center mt-5">
        <h2 className="relative z-20 font-bold text-7xl w-full italic text-center text-[#fe522d]">
          AN AGENCY
        </h2>
        <Image
          alt="img"
          src={LAROLLETTES_HOMPAGE}
          width={200}
          height={200}
          className="flex w-[92%] h-80 mt-3 z-20 object-cover"
        />
        <h2 className="relative z-20 font-bold text-[14vw] text-nowrap leading-[1] w-full text-center text-[#fe522d] mt-3">
          THAT ENGINEERS
          <br />
          <span className="italic">INFLUENCE</span>
        </h2>
        <Image
          alt="img"
          src={ICESKAKTER_UD}
          width={200}
          height={200}
          className="flex w-[92%] h-80 mt-3 z-20 object-cover"
        />
      </div>
      <div className="flex flex-col w-full items-center justify-center h-auto mt-[1.844vw] text-lg space-y-10">
        <p className="sm:w-[60vw] text-center text-lg not-italic font-normal leading-[1.2rem] w-full sm:leading-[2.2143vw] text-white relative z-50 sm:text-4xl-custom">
          Over the past 10 years, we&apos;ve fueled the evolution of influencer
          marketing.
          <br />
          We understand how to construct campaigns that drive results, identify
          industry opportunities and build solutions that propel success in the
          years ahead.
        </p>
        <Button
          variant="secondary"
          size="lg"
          className="bg-[#fe522d] sm:hover:bg-[#fe522d] sm:hover:text-white sm:rounded-[0.7384vw] uppercase sm:py-[2.5803vw] sm:text-2xl-custom  sm:px-[6.646vw] text-white hover:text-black relative z-20"
        >
          Check out our work {`>>`}
        </Button>
      </div>
    </div>
  );
}
