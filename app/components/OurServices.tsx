import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OurServices() {
  let services = [
    {
      num: "01. ",
      title: "  STRATEGY + TREND REPORTING",
      description: `We help our brand partners understand where to play and how to win by taking a nuanced approach to understanding each brand profile and providing strategic insight into what moves the needle through the lens of trending and culturally relevant marketing.`,
      href: "/",
    },
    {
      num: "02. ",
      title: `INFLUENCER CAMPAIGN MANAGEMENT`,
      description: `We utilized our proprietary software and years of campaign process refinement to help our brands scale their campaign operations to build influencer advocacy through seamless and agile outreach, onboarding, creative briefing, contracting, and campaign support.`,
      href: "/",
    },
    {
      num: "03. ",
      title: "PUBLIC RELATIONS",
      description: `We provide seasoned PR expertise and strategic counsel tailored to your unique business objectives, forging meaningful relationships with key opinion leaders and securing impactful coverage that amplifies your brand's reach and credibility.`,
      href: "/",
    },
    {
      num: "04. ",
      title: "SOCIAL AND COMMUNITY MANAGEMENT",
      description: `We increase brand loyalty and evangelize new fans by leveraging owned channels and implementing an intentional brand strategy to showcase brand value that ties in key seasonal moments while leaving space to activate trends.`,
      href: "/",
    },
    {
      num: "05. ",
      title: " EXPERIENTIAL",
      description: `We assemble experiences that create authentic connections and impactful storytelling while also leading public relations and partner strategy to drive lasting impact beyond the event, garnering attention and driving organic conversation and love around the brand.`,
      href: "/",
    },
    {
      num: "06. ",
      title: " AFFILIATE",
      description: `We understand the need to create bottom-of-the-funnel impact so we help brands drive sales and traffic by creating affiliate networks and strategies that engage creators to organically and consistently drive conversion of products.`,
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
                className="sm:w-[39.1vw] sm:space-y-5 -space-y-[21vw] flex flex-col mb-[10vw] sm:mb-[1.844vw]"
                key={index}
              >
                <div className="flex sm:items-start items-center  sm:space-x-1 sm:mb-[0.7384vw] ">
                  <span className="font-[700] sm:text-6xl-custom text-[5vw]  text-white">
                    {item.num}
                  </span>
                  <h2 className="font-[700] sm:text-6xl-custom text-[5vw] text-white sm:ml-0 ml-[1vw]">
                    {item.title}
                  </h2>
                </div>
                <p className="font-normal sm:text-4xl-custom sm:leading-[2.5vw]  text-white sm:flex hidden  sm:ml-[3.615vw]">
                  {item.description}
                </p>
                <Link href="/comingsoon/work">
                  <Button
                    className="bg-[#fe522d] hover:bg-[#ffffff] hover:text-black sm:flex hidden sm:mt-[0.5905vw] mb-[4vw]  ml-[5rem] sm:ml-[3.6842vw] px-16 sm:px-[2.951vw] py-8 sm:py-[1.472vw] rounded-lg sm:text-2xl-custom"
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
          href={"/comingsoon/work"}
          className="sm:hidden flex w-[55%] self-center  relative z-50 mt-7"
        >
          <Button className="bg-[#fe522d] hover:text-black hover:bg-[#ffffff] text-xs py-3 px-7 sm:hidden flex w-full h-[50%]">
            CHECK OUT OUR WORK {">>"}
          </Button>
        </Link>
      </div>
    </div>
  );
}
