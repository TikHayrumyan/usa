import { cn } from "@/lib/utils";
import Image from "next/image";
import Lusa from "../../public/imgs/MAYBELLINE_LUSA_HOMEPAGE.gif";
import Shein from "../../public/imgs/SHEIN_HOMEPAGE.gif";
import openFarm from "../../public/imgs/OPENFARM_HOMEPAGE.gif";
import REDKEN from "../../public/imgs/REDKEN_HOMEPAGE.gif";
import { Separator } from "@/components/ui/separator";
export default function StrongRelationshipMobile() {
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
      percentTwoName: "      ENGAGEMENT       RATE",
      percentTree: "70%",
      percentTreeName: "EARNED CONTENT",
    },
    {
      id: 2,
      description:
        "Create strategies to drive social content lower down the funnel, generating more traffic and sales and showing bottom-line impact to your business",
      name: "- SHEIN",
      img: Shein,
      percentOne: "418%",
      percentOneName: "         RETURN ON          AD SPEND",
      percentTwo: "3,040%",
      percentTwoName: "INCREASE IN YEAR-OVER-YEAR SALES",
      percentTree: "2.4M",
      percentTreeName: "IN SALES",
    },
  ];
  return (
    <div className="container flex flex-col sm:space-y-1-custom0 space-y-5">
      <h1 className="text-[#2a2a2a] uppercase font-bold sm:text-[12rem] text-[3.6rem] leading-[4rem] sm:w-full">
        WE&apos;RE BUILT ON STRONG RELATIONSHIPS
      </h1>
      <div className="w-full flex flex-col ">
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
                  <div
                    className={cn(
                      id % 2 == 1 ? "text-start" : "text-end",
                      "flex flex-col sm:w-[50%] space-y-7 pb-5"
                    )}
                  >
                    <p className="font-[700] w-auto sm:text-6xl-custom sm:mt-0 mt-16 text-[#2e2e2e] ">
                      {description}
                    </p>
                    <p className="text-xl w-auto">{name}</p>
                  </div>
                  <div
                    className={cn(
                      id % 2 == 1 ? "self-start" : "self-end",
                      "flex relative sm:w-[40%] justify-center  sm:mt-0 mt-5"
                    )}
                  >
                    <Image
                      alt="img"
                      src={img}
                      width={600}
                      height={600}
                      className="w-[78vw] h-[95vw] object-cover self-start"
                    />
                    <div className="absolute flex w-[90%] h-[7vh] bg-[#fe522d] -bottom-10 rounded-xl items-center justify-evenly">
                      <div className="flex w-[90%] items-center justify-between">
                        <div className="flex flex-col items-center justify-center w-[50%]">
                          <span className="text-7xl-custom font-bold text-white mb-[1vw]">
                            {percentOne}
                          </span>
                          <span className="text-6xl-custom  text-white text-center">
                            {percentOneName}
                          </span>
                        </div>
                        <Separator
                          orientation="vertical"
                          className="bg-white text-white h-14 w-[0.4vw]"
                        />
                        <div className="flex flex-col  items-center justify-center w-[50%]">
                          <span className="text-7xl-custom font-bold  text-white mb-[1vw]">
                            {percentTwo}
                          </span>
                          <span className="text-6xl-custom text-white text-center">
                            {percentTwoName}
                          </span>
                        </div>
                        {/* <Separator
                          orientation="vertical"
                          className="bg-white text-white  h-20"
                        />
                        <div className="flex flex-col items-center justify-between">
                          <span className="sm:text-6xl-custom sm:font-bold mb-2 text-white">
                            {percentTree}
                          </span>
                          <span className="sm:text-3xl-custom  text-sm text-white">
                            {percentTreeName}
                          </span>
                        </div> */}
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
