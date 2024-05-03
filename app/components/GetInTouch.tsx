"use client";
import { url } from "inspector";
import Link from "next/link";
import getExample from "../../public/imgs/GETINTOUCH.jpg";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function GetInTouch() {
  const scrollRef = useRef(null);
  const slideFromBottomText = {
    hidden: { y: +100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };
  return (
    <div
      className="sm:w-[100vw] sm:h-[100vh] h-[24vh] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat  "
      style={{ backgroundImage: `url(${getExample.src})` }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideFromBottomText}
      >
        <h2 className="sm:text-[22.5rem] font-bold text-white sm:mb-20 mb-0 text-[4.8rem]">
          GET IN TOUCH.
        </h2>
      </motion.div>
      <Link
        href="/"
        className="sm:w-[23vw] sm:text-2xl text-xs w-[35%] rounded-sm flex items-center justify-center bg-transparent sm:h-[4vw] h-6 border-2 sm:border-4 border-white sm:rounded-xl text-white"
      >
        INFO {">>"}
      </Link>
    </div>
  );
}
