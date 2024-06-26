"use client";

import Image from "next/image";
import Link from "next/link";
import tiktok from "../../public/socialMedia/logo-tiktok_White.png";
import instagram from "../../public/socialMedia/logo-instagram_white.png";
import linkedin from "../../public/socialMedia/log-linkedin_White.png";
import logo from "../../public/Logos/redLogoMobile.png";
import { useState } from "react";

export const Navlinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Work",
    href: "/comingsoon/work",
  },
  {
    name: "About",
    href: "/comingsoon/about",
  },
  {
    name: "Services",
    href: "/comingsoon/services",
  },
  {
    name: "Resources",
    href: "/comingsoon/resources",
  },
  {
    name: "Login",
    href: "/comingsoon/login",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const subscribe = async (e: any) => {
    e.preventDefault();

    if (
      !email ||
      !email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
    ) {
      return;
    }

    const response = await fetch("http://creator.weflex.am/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    if (!response.ok) {
      throw new Error("Failed");
    }
    const jsonData = await response.json();
    if (jsonData.success) setEmail("");
  };

  return (
    <div className="w-full flex justify-center sm:h-auto bg-[#2e2e2e] sm:mt-0 sm:pt-[4.428vw] pt-5 pb-5 sm:pb-[1.844vw] ">
      <div className="sm:w-[95vw] flex flex-col sm:ml-0 w-[98vw] ml-3 sm:space-y-[1.844vw] space-y-0 sm:my-[1.844vw]">
        <h2 className="text-white sm:mb-[2.2143vw] mb-2 font-bold sm:text-[5.1645vw] text-4xl">
          KEEP UP WITH US
        </h2>
        <p className="text-white font-normal sm:text-3xl-custom sm:mb-0 !mb-4 text-xs">
          Subscribe to our newsletter to stay in touch
        </p>
        <div className="flex items-center ">
          <input
            onChange={(e) => setEmail(e.currentTarget.value)}
            value={email}
            type="email"
            required
            placeholder="EMAIL ADDRESS"
            className="sm:h-[4.8vw] sm:w-[20vw] sm:pt-[0.9217vw] sm:pl-[0.9217vw] sm:mr-[0.9217vw] py-2 pl-1 placeholder:text-sm sm:placeholder:text-[1.5vw] sm:text-[1.3vw] text-[#2E2E2E] font-normal focus-visible:outline-none"
          />
          <button
            onClick={subscribe}
            className="sm:border-4  sm:ml-0 ml-3 border-2 sm:rounded-lg rounded-sm sm:p-[0.7384vw] pt-[0.5vw] px-1 sm:text-2xl-custom text-sm uppercase text-white hover:text-[#2E2E2E] hover:bg-white font-normal sm:w-[10vw] border-white "
          >
            Subscribe
          </button>
        </div>
        <div className="flex sm:space-x-5-custom space-x-3 items-center  sm:max-w-[10vw] sm:justify-center justify-start sm:p-[1.472vw] sm:ml-[-1.472vw] pt-10 pb-6">
          <Link href="https://www.tiktok.com/@creator.deck" target="_blank">
            <Image
              alt="TiktokIcon"
              src={tiktok}
              width={50}
              height={50}
              className="sm:w-[1.5vw] w-4 h-auto"
            />
          </Link>
          <Link href="https://www.instagram.com/creator.deck" target="_blank">
            <Image
              alt="InstagramIcon"
              src={instagram}
              width={50}
              height={50}
              className="sm:w-[1.7vw] w-5 h-auto"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/company/creator-deck"
            target="_blank"
          >
            <Image
              alt="LinkedinIcon"
              src={linkedin}
              width={50}
              height={50}
              className="sm:w-[1.8vw] w-6 h-auto"
            />
          </Link>
        </div>
        <div className="flex items-center justify-between mt-20 sm:mt-[3.6842vw]">
          <div className="flex flex-col sm:space-y-1-custom -space-y-2">
            <p className="w-auto h-auto text-white uppercase mb-3 font-medium sm:text-3xl-custom text-[2.5vw]">
              {Navlinks.map((item, index) => {
                return (
                  <>
                    <Link href={item.href} legacyBehavior passHref>
                      <a className="hover:!text-[#fe522d] font-[500]">
                        {" "}
                        {item.name + " "}{" "}
                      </a>
                    </Link>
                  </>
                );
              })}
            </p>
            <p className="w-auto h-auto text-white font-normal sm:text-3xl-custom text-[2.5vw]">
              2024 Creator Deck. All Rights Reserved.
              <Link href="terms-and-conditions" legacyBehavior passHref>
                <a className="hover:!text-[#fe522d]"> Terms and Conditions</a>
              </Link>
              <Link href="privacy-policy" legacyBehavior passHref>
                <a className="hover:!text-[#fe522d]"> Privacy Policy</a>
              </Link>
            </p>
          </div>
          <Image
            alt="logo"
            src={logo}
            width={55}
            height={55}
            className="sm:w-[4vw] sm:h-auto w-6 sm:mr-0 mr-3"
          />
        </div>
      </div>
    </div>
  );
}
