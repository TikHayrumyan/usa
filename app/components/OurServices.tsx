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
    <div className="container flex flex-col my-10">
      <h1 className="uppercase font-bold text-[7rem] text-[#fe522d] w-[80%] ">
        our services
      </h1>
      <div className="flex flex-wrap w-full justify-between">
        {services.map((item, index) => {
          return (
            <>
              <div
                className="w-[40%] space-y-5 flex flex-col mb-10"
                key={index}
              >
                <h2 className="font-semibold text-2xl text-white">
                  {item.title}
                </h2>
                <p className="font-normal text-lg text-white">
                  {item.description}
                </p>
                <Link href={item.href}>
                  <Button className="bg-[#fe522d]" size="lg">
                    GET STARTED{">>"}
                  </Button>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
