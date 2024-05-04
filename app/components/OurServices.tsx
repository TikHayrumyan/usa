import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OurServices() {
  let services = [
    {
      num: "01. ",
      title: "  STRATEGY + TREND REPORTING",
      description: `We're a full-service influencer agency who partners with companies looking to scale influencer marketing. Companies with dedicated resources look to us to help shape influencer strategy, execution, reporting and enhance influencer feedback loops.`,
      href: "/",
    },
    {
      num: "02. ",
      title: `INFLUENCER CAMPAIGN MANAGEMENT`,
      description: `We're a full-service influencer agency who partners with companies looking to scale influencer marketing. Companies with dedicated resources look to us to help shape influencer strategy, execution, reporting and enhance influencer feedback loops.`,
      href: "/",
    },
    {
      num: "03. ",
      title: "PUBLIC RELATIONS",
      description: `We're a full-service influencer agency who partners with companies looking to scale influencer marketing. Companies with dedicated resources look to us to help shape influencer strategy, execution, reporting and enhance influencer feedback loops.`,
      href: "/",
    },
    {
      num: "04. ",
      title: "SOCIAL + COMMUNITY MANAGEMENT",
      description: `We're a full-service influencer agency who partners with companies looking to scale influencer marketing. Companies with dedicated resources look to us to help shape influencer strategy, execution, reporting and enhance influencer feedback loops.`,
      href: "/",
    },
    {
      num: "05. ",
      title: " EXPERIENTIAL",
      description: `We're a full-service influencer agency who partners with companies looking to scale influencer marketing. Companies with dedicated resources look to us to help shape influencer strategy, execution, reporting and enhance influencer feedback loops.`,
      href: "/",
    },
    {
      num: "06. ",
      title: " AFFILIATE",
      description: `We're a full-service influencer agency who partners with companies looking to scale influencer marketing. Companies with dedicated resources look to us to help shape influencer strategy, execution, reporting and enhance influencer feedback loops.`,
      href: "/",
    },
  ];

  return (
    <div className="container flex flex-col sm:my-[4.428vw] my-6 relative  z-10">
      <h1 className="uppercase font-bold sm:text-[9.584vw] text-[16vw] text-[#fe522d] sm:w-[80vw] relative sm:mb-[6.646vw] mb-[3vw]">
        our <span className="italic">services</span>
      </h1>
      <div className="flex sm:flex-wrap flex-col sm:flex-row w-full justify-between">
        {services.map((item, index) => {
          return (
            <>
              <div
                className="sm:w-[39.1vw] sm:space-y-5 -space-y-[21vw] flex flex-col mb-10 sm:mb-[1.844vw]"
                key={index}
              >
                <div className="flex sm:items-start items-center space-x-1 mb-[1rem] sm:mb-[0.7384vw] ">
                  <span className="font-semibold sm:text-6xl-custom text-[5.2vw]  text-white">
                    {item.num}
                  </span>
                  <h2 className="font-semibold leading-[4rem] sm:text-6xl-custom text-[5.2vw]  text-white ">
                    {item.title}
                  </h2>
                </div>
                <p className="font-normal sm:text-4xl-custom sm:leading-[2.5vw]  leading-[3.5rem] text-white sm:flex hidden ml-[4.9rem] sm:ml-[3.615vw]">
                  {item.description}
                </p>
                <Link href={item.href}>
                  <Button
                    className="bg-[#fe522d] sm:flex hidden sm:mt-[0.5905vw] mb-[4vw]  ml-[5rem] sm:ml-[3.6842vw] px-16 sm:px-[2.951vw] py-8 sm:py-[1.472vw] rounded-lg sm:text-2xl-custom"
                    size="lg"
                  >
                    GET STARTED {" >>"}
                  </Button>
                </Link>
              </div>
            </>
          );
        })}
        <Link
          href={"/"}
          className="sm:hidden flex w-[55%] self-center  relative z-50 mt-7"
        >
          <Button className="bg-[#fe522d] text-xs py-3 px-7 sm:hidden flex w-full h-[50%]">
            CHECK OUT OUR WORK {">>"}
          </Button>
        </Link>
      </div>
    </div>
  );
}
