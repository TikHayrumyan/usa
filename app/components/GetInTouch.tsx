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
      className="sm:w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat  "
      style={{ backgroundImage: `url(${getExample.src})` }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideFromBottomText}
      >
        <h2 className="sm:text-[15rem] font-bold text-white sm:mb-20 mb-20 text-7xl">
          GET IN TOUCH.
        </h2>
      </motion.div>
      <Link
        href="/"
        className="sm:w-[20vw] w-[50%] flex items-center justify-center bg-transparent sm:h-[3vw] h-10 border border-white rounded-md text-white"
      >
        INFO {">>"}
      </Link>
    </div>
  );
}
