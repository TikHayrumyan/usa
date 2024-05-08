import { cn } from "@/lib/utils";
import Image from "next/image";
import Lusa from "../../public/imgs/MAYBELLINE_LUSA_HOMEPAGE.gif";
import Shein from "../../public/imgs/SHEIN_HOMEPAGE.gif";
import openFarm from "../../public/imgs/OPENFARM_HOMEPAGE.gif";
import REDKEN from "../../public/imgs/REDKEN_HOMEPAGE.gif";
import { Separator } from "@/components/ui/separator";
export default function StrongRelationship() {
  const data = [
    {
      id: 1,
      description:
        "Deliver always-on programs across social while increasing earned content and viral moments",
      name: "- LUSA",
      img: Lusa,
      percentOne: "214MM+",
      percentOneName: "DELIVERED IMPRESSIONS",
      percentTwo: "53%",
      percentTwoName: "   ENGAGEMENT    RATE",
      percentTree: "70%",
      percentTreeName: "    EARNED     CONTENT",
    },
    {
      id: 2,
      description:
        "Create strategies to drive social content lower down the funnel, generating more traffic and sales and showing bottom-line impact to your business",
      name: "- SHEIN",
      img: Shein,
      percentOne: "418%",
      percentOneName: "       RETURN ON        AD SPEND",
      percentTwo: "3,040%",
      percentTwoName: "INCREASE IN YEAR-OVER-YEAR SALES",
      percentTree: "2.4M",
      percentTreeName: "IN SALES                        ",
    },
    {
      id: 3,
      description:
        "Help launch and position your product in engaging and exciting ways that center on a human-centric approach to storytelling",
      name: "- REDKEN",
      img: REDKEN,
      percentOne: "$0.01",
      percentOneName: "COST PER VIEW",
      percentTwo: "76%",
      percentTwoName: "EARNED CONTENT",
      percentTree: "18%",
      percentTreeName: "ENGAGEMENT RATE",
    },
    {
      id: 4,
      description:
        "Generate brand love, cultivate community, and build advocacy for your products",
      name: "- OPEN FARM",
      img: openFarm,
      percentOne: "4.7MM+",
      percentOneName: "VIEWS",
      percentTwo: "15%",
      percentTwoName: "ENGAGEMENT RATE",
      percentTree: "$0.41",
      percentTreeName: "CPM",
    },
  ];
  return (
    <div className="container flex flex-col space-y-10-custom sm:pb-[5vw]">
      <h1 className="text-[#2a2a2a] uppercase font-bold sm:text-[9.211vw] leading-[1] sm:w-full">
        WE&apos;RE Built on Strong Relationships To:
      </h1>
      <div className="w-full flex flex-col">
        {data.map(
          ({
            id,
            description,
            name,
            img,
            percentOne,
            percentOneName,
            percentTwo,
            percentTwoName,
            percentTree,
            percentTreeName,
          }) => {
            return (
              <>
                <div
                  key={id}
                  className={cn(
                    id % 2 !== 1
                      ? "sm:flex-row-reverse flex-col-reverse"
                      : "flex sm:flex-row flex-col-reverse",
                    `w-full flex  items-center justify-between`
                  )}
                >
                  <div className="flex flex-col sm:w-[44vw] space-y-7-custom">
                    <p className="font-[700] sm:text-6xl-custom sm:mt-0  text-[#2e2e2e]">
                      {description}
                    </p>
                  </div>
                  <div className="flex relative sm:w-[34.5vw] justify-center sm:mt-0">
                    <Image
                      alt="img"
                      src={img}
                      width={600}
                      height={600}
                      className="sm:w-[25.830vw] sm:h-[40.4vw] object-cover"
                    />
                    <div className="absolute flex w-full h-[7vw] bg-[#fe522d] bottom-0 rounded-xl items-center justify-center">
                      <div className="flex w-[90%] items-center justify-between">
                        <div className="flex flex-col items-center justify-between sm:max-w-[33%]">
                          <span className="sm:text-5xl-custom sm:font-bold mb-[0.3692vw]  text-white">
                            {percentOne}
                          </span>
                          <span className="sm:text-xl-custom   text-white text-center">
                            {percentOneName}
                          </span>
                        </div>
                        <Separator
                          orientation="vertical"
                          className="bg-white text-white h-[5.5vw]"
                        />
                        <div className="flex flex-col items-center justify-between sm:max-w-[33%]">
                          <span className="sm:text-5xl-custom sm:font-bold mb-[0.3692vw] text-white">
                            {percentTwo}
                          </span>
                          <span className="sm:text-xl-custom   text-white text-center">
                            {percentTwoName}
                          </span>
                        </div>
                        <Separator
                          orientation="vertical"
                          className="bg-white text-white  h-[5.5vw]"
                        />
                        <div className="flex flex-col items-center justify-between sm:max-w-[33%]">
                          <span className="sm:text-5xl-custom sm:font-bold mb-[0.3692vw] text-white">
                            {percentTree}
                          </span>
                          <span className="sm:text-xl-custom  text-white text-center">
                            {percentTreeName}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          }
        )}
      </div>
    </div>
  );
}
