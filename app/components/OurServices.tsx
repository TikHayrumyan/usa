import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OurServices() {
  let services = [
    {
      num: "01. ",
      title: "  STRATEGY + TREND REPORTING",
      description: `We're a full-service influencer agency who partners with companies looking to scale influencer marketing. Companies with dedicated resources look to us to help shape influencer strategy,execution,reporting and enhance influencer feedback loops.`,
      href: "/",
    },
    {
      num: "02. ",
      title: `INFLUENCER CAMPAIGN MANAGEMENT`,
      description: `We're a full-service influencer agency who partners with companies looking to scale influencer marketing. Companies with dedicated resources look to us to help shape influencer strategy,execution,reporting and enhance influencer feedback loops.`,
      href: "/",
    },
    {
      num: "03. ",
      title: "PUBLIC RELATIONS",
      description: `We're a full-service influencer agency who partners with companies looking to scale influencer marketing. Companies with dedicated resources look to us to help shape influencer strategy,execution,reporting and enhance influencer feedback loops.`,
      href: "/",
    },
    {
      num: "04. ",
      title: "SOCIAL + COMMUNITY MANAGEMENT",
      description: `We're a full-service influencer agency who partners with companies looking to scale influencer marketing. Companies with dedicated resources look to us to help shape influencer strategy,execution,reporting and enhance influencer feedback loops.`,
      href: "/",
    },
    {
      num: "05. ",
      title: " EXPERENTIAL",
      description: `We're a full-service influencer agency who partners with companies looking to scale influencer marketing. Companies with dedicated resources look to us to help shape influencer strategy,execution,reporting and enhance influencer feedback loops.`,
      href: "/",
    },
    {
      num: "06. ",
      title: " AFFILIATE",
      description: `We're a full-service influencer agency who partners with companies looking to scale influencer marketing. Companies with dedicated resources look to us to help shape influencer strategy,execution,reporting and enhance influencer feedback loops.`,
      href: "/",
    },
  ];

  return (
    <div className="container flex flex-col sm:my-24 my-6 relative  z-10">
      <h1 className="uppercase font-bold sm:text-[13rem] text-7xl text-[#fe522d] sm:w-[80%] relative sm:mb-36 mb-10">
        our <span className="italic">services</span>
      </h1>
      <div className="flex sm:flex-wrap flex-col sm:flex-row w-full justify-between">
        {services.map((item, index) => {
          return (
            <>
              <div
                className="sm:w-[45%] sm:space-y-5 -space-y-16 flex flex-col mb-10"
                key={index}
              >
                <div className="flex sm:items-start items-center space-x-1 mb-[1rem] sm:min-h-[120px]">
                  <span className="font-semibold sm:text-6xl text-2xl text-white">
                    {item.num}
                  </span>
                  <h2 className="font-semibold leading-[4rem] sm:text-6xl text-2xl text-white ">
                    {item.title}
                  </h2>
                </div>
                <p className="font-normal sm:text-4xl  leading-[3.5rem] text-white sm:flex hidden ml-[4.9rem]">
                  {item.description}
                </p>
                <Link href={item.href}>
                  <Button
                    className="bg-[#fe522d] sm:flex hidden sm:mt-[0.8em]  ml-[5rem] px-16 py-8 rounded-lg text-2xl"
                    size="lg"
                  >
                    GET STARTED {" >>"}
                  </Button>
                </Link>
              </div>
            </>
          );
        })}
        <Link href={"/"} className="sm:hidden flex w-[55%] self-center  relative z-50 mt-7">
          <Button className="bg-[#fe522d] text-xs py-3 px-7 sm:hidden flex w-full h-[50%]">
            CHECK OUT OUR WORK {">>"}
          </Button>
        </Link>
      </div>
    </div>
  );
}
