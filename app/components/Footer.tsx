import Image from "next/image";
import Link from "next/link";
import tiktok from "../../public/socialMedia/logo-tiktok_White.png";
import instagram from "../../public/socialMedia/logo-instagram_white.png";
import linkedin from "../../public/socialMedia/log-linkedin_White.png";
import logo from "../../public/Logos/redLogoMobile.png";

export default function Footer() {
  return (
    <div className="w-full sm:h-auto bg-[#2e2e2e] sm:mt-0 sm:pt-24 pt-5 pb-5 sm:pb-10 ">
      <div className="sm:container flex flex-col sm:ml-0 ml-3 sm:space-y-10 space-y-0 sm:my-10">
        <h2 className="text-white sm:mb-12 mb-2 font-bold sm:text-[7rem] text-4xl">KEEP UP WITH US</h2>
        <p className="text-white font-normal sm:text-3xl sm:mb-0 !mb-4 text-xs">
          Subscribe to our newsletter to stay in touch
        </p>
        <div className="flex items-center ">
          <input
            placeholder="EMAIL ADDRESS"
            className="sm:h-[4.8vw] sm:w-[20vw] sm:pt-5 sm:pl-5 sm:mr-5 py-2 pl-1 placeholder:text-sm sm:placeholder:text-3xl"
          />
          <button className="sm:border-4  sm:ml-0 ml-3 border-2 sm:rounded-lg rounded-sm sm:p-4 pt-[0.5vw] px-1 sm:text-2xl text-sm uppercase text-white font-normal sm:w-[10vw] border-white ">
            Subscribe
          </button>
        </div>
        <div className="flex sm:space-x-5 space-x-3 items-center sm:border sm:max-w-[10vw] sm:justify-center justify-start sm:p-8 pt-10 pb-6">
          <Link href="/">
            <Image
              alt="socialIcons"
              src={tiktok}
              width={50}
              height={50}
              className="sm:w-[1.5vw] w-4 h-auto"
            />
          </Link>
          <Link href="/">
            <Image
              alt="socialIcons"
              src={instagram}
              width={50}
              height={50}
              className="sm:w-[1.7vw] w-5 h-auto"
            />
          </Link>
          <Link href="/">
            <Image
              alt="socialIcons"
              src={linkedin}
              width={50}
              height={50}
              className="sm:w-[1.8vw] w-6 h-auto"
            />
          </Link>
        </div>
        <div className="flex items-center justify-between mt-20">
          <div className="flex flex-col sm:space-y-1 -space-y-2">
            <p className="w-auto h-auto text-white uppercase mb-3 font-medium sm:text-3xl text-[0.7rem]">
              home work about services resources login
            </p>
            <p className="w-auto h-auto text-white font-normal sm:text-3xl text-[0.7rem]">
              2024 Creator Deck. All Rights Reserved Terms and Conditions
              Privacy Policy
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
