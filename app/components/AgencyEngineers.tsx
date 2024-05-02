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
    <div className="container flex flex-col sm:h-[110vh] mb-10 relative z-10">
      <div className="sm:flex hidden relative w-full h-[85vh] justify-center items-center mt-10">
        <motion.div
          className="absolute left-0 top-0 z-10 w-80 h-[85%]"
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
          className="w-[70%]"
        >
          <h1 className="relative z-20 font-bold text-[6.5rem] w-full text-center text-[#fe522d] italic">
            AN AGENCY THAT ENGINEERS INFLUENCE
          </h1>
        </motion.div>
        <motion.div
          className="absolute right-0 bottom-0 z-10 w-80 h-[70%]"
          initial="hidden"
          whileInView="visible"
          variants={slideFromBottomGif}
        >
          <Image
            alt="img"
            src={ICESKAKTER_UD}
            fill
            className="absolute right-0 bottom-0 z-10 object-cover"
          />
        </motion.div>
      </div>
      {/* mobile */}
      <div className="sm:hidden flex flex-col items-center mt-5">
        <h2 className="relative z-20 font-bold text-6xl w-full text-center text-[#fe522d]">
          AN AGENCY
        </h2>
        <Image
          alt="img"
          src={LAROLLETTES_HOMPAGE}
          width={200}
          height={200}
          className="flex w-72 mt-5 z-20 object-cover"
        />
        <h2 className="relative z-20 font-bold text-6xl w-full text-center text-[#fe522d] mt-5">
          THAT ENGINEERS INFLUENCE
        </h2>
        <Image
          alt="img"
          src={ICESKAKTER_UD}
          width={200}
          height={200}
          className="flex w-72 mt-5 z-20 object-cover"
        />
      </div>
      <div className="flex flex-col w-full items-center justify-center h-auto mt-10 text-lg space-y-5">
        <p className="sm:w-[65%] text-center font-normal text-white relative z-50 sm:text-2xl">
          Over the past 10 years, we&apos;ve fueled the evolution of influencer
          marketing. We understand how to construct campaigns that drive
          results, identify industry opportunities and build solutions that
          propel success in the years ahead.
        </p>
        <Button
          variant="secondary"
          size="lg"
          className="bg-[#fe522d] uppercase sm:px-24 sm:py-8 sm:text-xl text-white hover:text-black relative z-20"
        >
          Check out our work {`>>`}
        </Button>
      </div>
    </div>
  );
}
