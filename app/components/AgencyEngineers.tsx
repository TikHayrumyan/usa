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
    <div className="container flex flex-col w-full sm:h-[130vh] sm:mb-10 mb-4 relative z-10">
      <div className="sm:flex hidden relative w-full h-[90vh] justify-center items-center mt-10">
        <motion.div
          className="absolute left-0 top-0 z-10 w-[30rem] h-[85%]"
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
          className="w-[90%]"
        >
          <h1 className="relative z-20 font-bold text-[10vw] leading-[13rem]  w-full text-center text-[#fe522d] italic">
            AN AGENCY
            <br /> <span className="not-italic">THAT ENGINEERS</span> INFLUENCE
          </h1>
        </motion.div>
        <motion.div
          className="absolute right-0 bottom-10 z-10 w-[28rem] h-[60%]"
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
        <h2 className="relative z-20 font-bold text-[3.8rem] leading-[4rem] w-full text-center text-[#fe522d] mt-3">
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
      <div className="flex flex-col w-full items-center justify-center h-auto mt-10 text-lg space-y-10">
        <p className="sm:w-[70%] text-center text-lg font-normal leading-[1.2rem] w-full sm:leading-[3rem] text-white relative z-50 sm:text-4xl">
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
          className="bg-[#fe522d] rounded-2xl uppercase  py-14  text-2xl px-36 text-white hover:text-black relative z-20"
        >
          Check out our work {`>>`}
        </Button>
      </div>
    </div>
  );
}
