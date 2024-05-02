import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OurServices() {
  let services = [
    {
      title: "01. STRATEGY + TREND REPORTING",
      description: `We're a full-service influencer agency who partners with companies looking to scale influencer marketing. Companies with dedicated resources look to us to help shape influencer strategy,execution,reporting and enhance influencer feedback loops.`,
      href: "/",
    },
    {
      title: "02. INFLUENCER CAMPAIGN MANAGEMENT",
      description: `We're a full-service influencer agency who partners with companies looking to scale influencer marketing. Companies with dedicated resources look to us to help shape influencer strategy,execution,reporting and enhance influencer feedback loops.`,
      href: "/",
    },
    {
      title: "03. PUBLIC RELATIONS",
      description: `We're a full-service influencer agency who partners with companies looking to scale influencer marketing. Companies with dedicated resources look to us to help shape influencer strategy,execution,reporting and enhance influencer feedback loops.`,
      href: "/",
    },
    {
      title: "04. SOCIAL + COMMUNITY MANAGEMENT",
      description: `We're a full-service influencer agency who partners with companies looking to scale influencer marketing. Companies with dedicated resources look to us to help shape influencer strategy,execution,reporting and enhance influencer feedback loops.`,
      href: "/",
    },
    {
      title: "05. EXPERENTIAL",
      description: `We're a full-service influencer agency who partners with companies looking to scale influencer marketing. Companies with dedicated resources look to us to help shape influencer strategy,execution,reporting and enhance influencer feedback loops.`,
      href: "/",
    },
    {
      title: "01. AFFILIATE",
      description: `We're a full-service influencer agency who partners with companies looking to scale influencer marketing. Companies with dedicated resources look to us to help shape influencer strategy,execution,reporting and enhance influencer feedback loops.`,
      href: "/",
    },
  ];

  return (
    <div className="container flex flex-col my-10 relative  z-10">
      <h1 className="uppercase font-bold sm:text-[9rem] text-6xl text-[#fe522d] sm:w-[80%] relative sm:mb-16 mb-10">
        our <span className="italic">services</span>
      </h1>
      <div className="flex sm:flex-wrap flex-col sm:flex-row w-full justify-between">
        {services.map((item, index) => {
          return (
            <>
              <div
                className="sm:w-[40%] space-y-5 flex flex-col mb-10"
                key={index}
              >
                <h2 className="font-semibold text-3xl text-white">
                  {item.title}
                </h2>
                <p className="font-normal text-xl text-white sm:flex hidden ml-11">
                  {item.description}
                </p>
                <Link href={item.href}>
                  <Button
                    className="bg-[#fe522d] sm:flex hidden ml-11 px-9"
                    size="lg"
                  >
                    GET STARTED{">>"}
                  </Button>
                </Link>
              </div>
            </>
          );
        })}
        <Link href={"/"} className="sm:hidden flex w-full relative z-50">
          <Button className="bg-[#fe522d] sm:hidden flex w-full">
            GET STARTED{">>"}
          </Button>
        </Link>
      </div>
    </div>
  );
}
