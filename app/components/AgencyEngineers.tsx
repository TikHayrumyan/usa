"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import LAROLLETTES_HOMPAGE from "../../public/imgs/LAROLLETTES_HOMPAGE.jpeg";
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
      transition: {
        delay: 1,
        duration: 1,
      },
    },
  };
  const slideFromBottomPic = {
    hidden: { y: +100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 1,
      },
    },
  };
  const slideFromBottomGif = {
    hidden: { y: +100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1.2,
        duration: 1,
      },
    },
  };

  return (
    <div className="container flex flex-col h-[110vh] mb-10">
      <div className="flex relative w-full h-[85vh] justify-center items-center mt-10">
        <motion.div
          className="absolute left-0 top-0 z-10 w-96 h-[90%]"
          initial="hidden"
          whileInView="visible"
          variants={slideFromBottomPic}
        >
          <Image
            alt="img"
            src={LAROLLETTES_HOMPAGE}
            fill
            className="absolute left-0 top-0 z-10"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideFromBottomText}
          className="w-[60%]"
        >
          <h1 className="relative z-20 font-bold text-8xl w-full text-center text-[#fe522d]">
            AN AGENCY THAT ENGINEERS INFLUENCE
          </h1>
        </motion.div>
        <motion.div
          className="absolute right-0 bottom-0 z-10 w-96 h-[80%]"
          initial="hidden"
          whileInView="visible"
          variants={slideFromBottomGif}
        >
          <Image
            alt="img"
            src={ICESKAKTER_UD}
            fill
            className="absolute right-0 bottom-0 z-10 "
          />
        </motion.div>
      </div>
      <div className="flex flex-col w-full items-center justify-center h-auto mt-10 text-lg space-y-5">
        <p className="w-[60%] text-center font-normal text-white">
          Over the past 10 years,we&apos;ve fueled the evolution of influencer
          marketing,We understand how to construct campaigns that drive
          results,identify industry opportunities,and build solutions that
          propel success in the years ahead.
        </p>
        <Button
          variant="secondary"
          size="lg"
          className="bg-[#fe522d] uppercase px-10 py-7 text-white hover:text-black"
        >
          Check out our work {`>>`}
        </Button>
      </div>
    </div>
  );
}
