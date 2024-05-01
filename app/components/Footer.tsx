import Image from "next/image";
import Link from "next/link";
import tiktok from "../../public/socialMedia/logo-tiktok_White.png";
import instagram from "../../public/socialMedia/logo-instagram_white.png";
import linkedin from "../../public/socialMedia/log-linkedin_White.png";
import logo from "../../public/Logos/redLogoMobile.png";

export default function Footer() {
  return (
    <div className="w-full h-auto bg-[#3f3f3f] py-1">
      <div className="container flex flex-col sm:space-y-10 space-y-5 my-10">
        <h2 className="text-white font-bold sm:text-7xl text-4xl">KEEP UP WITH US</h2>
        <p className="text-white font-normal sm:text-2xl text-lg">
          Subscribe to our newsletter to stay in touch
        </p>
        <div className="flex items-center ">
          <input
            placeholder="EMAIL ADDRESS"
            className="sm:h-[4vw] sm:w-[15vw] p-5 mr-5"
          />
          <button className="border-4 rounded-lg p-2 text-white font-normal sm:w-[10vw] border-white ">
            Subscribe
          </button>
        </div>
        <div className="flex space-x-5 items-center sm:border sm:max-w-[10vw] sm:justify-center p-3">
          <Link href="/">
            <Image
              alt="socialIcons"
              src={tiktok}
              width={50}
              height={50}
              className="sm:w-[1.35vw] w-8 h-auto"
            />
          </Link>
          <Link href="/">
            <Image
              alt="socialIcons"
              src={instagram}
              width={50}
              height={50}
              className="sm:w-[1.5vw] w-10 h-auto"
            />
          </Link>
          <Link href="/">
            <Image
              alt="socialIcons"
              src={linkedin}
              width={50}
              height={50}
              className="sm:w-[1.6vw] w-11 h-auto"
            />
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col space-y-1">
            <p className="w-auto h-auto text-white uppercase font-medium sm:text-lg text-xs">
              home work about services resources login
            </p>
            <p className="w-auto h-auto text-white font-normal sm:text-lg text-xs">
              2024 Creator Deck. All Rights Reserved Terms and Conditions
              Privacy Policy
            </p>
          </div>
          <Image
            alt="logo"
            src={logo}
            width={55}
            height={55}
            className="sm:w-[3vw] sm:h-[3vw] w-10"
          />
        </div>
      </div>
    </div>
  );
}
