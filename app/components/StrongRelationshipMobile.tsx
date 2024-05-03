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
        "Lorem ipsum dolor sit amet,consetetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magnafeugiatn lobortis nisl ut aliquip ex ea commodo consequat.",
      name: "- LUSA",
      img: Lusa,
      percentOne: "309,1%",
      percentOneName: "ER",
      percentTwo: "35",
      percentTwoName: "IMPRESSIONS",
      percentTree: "35",
      percentTreeName: "IMPRESSIONS",
    },
    {
      id: 2,
      description:
        "Lorem ipsum dolor sit amet,consetetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magnafeugiatn lobortis nisl ut aliquip ex ea commodo consequat.",
      name: "- SHEIN",
      img: Shein,
      percentOne: "35",
      percentOneName: "IMPRESSIONS",
      percentTwo: "35",
      percentTwoName: "IMPRESSIONS",
      percentTree: "35",
      percentTreeName: "IMPRESSIONS",
    },
    // {
    //   id: 3,
    //   description:
    //     "Lorem ipsum dolor sit amet,consetetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magnafeugiatn lobortis nisl ut aliquip ex ea commodo consequat.",
    //   name: "- REDKEN",
    //   img: REDKEN,
    //   percentOne: "76%",
    //   percentOneName: "DELIVERED",
    //   percentTwo: "35",
    //   percentTwoName: "IMPRESSIONS",
    //   percentTree: "35",
    //   percentTreeName: "IMPRESSIONS",
    // },
    // {
    //   id: 4,
    //   description:
    //     "Lorem ipsum dolor sit amet,consetetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magnafeugiatn lobortis nisl ut aliquip ex ea commodo consequat.",
    //   name: "- OPEN FARM",
    //   img: openFarm,
    //   percentOne: "35",
    //   percentOneName: "IMPRESSIONS",
    //   percentTwo: "35",
    //   percentTwoName: "IMPRESSIONS",
    //   percentTree: "35",
    //   percentTreeName: "IMPRESSIONS",
    // },
  ];
  return (
    <div className="container flex flex-col sm:space-y-10 space-y-5">
      <h1 className="text-[#2a2a2a] uppercase font-bold sm:text-[12.5rem] text-[4.3rem] leading-[4rem] sm:w-full">
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
                  <div className={
                    cn(
                        id % 2 == 1 ? "text-start" : "text-end",
                        "flex flex-col sm:w-[50%] space-y-7 pb-5"
                    )
                    }>
                    <p className="font-semibold w-auto sm:text-6xl sm:mt-0 mt-16 text-[#2e2e2e] ">
                      {description}
                    </p>
                    <p className="text-xl w-auto">{name}</p>
                  </div>
                  <div className={cn(
                    id % 2 == 1 ? "self-start" : "self-end",
                    "flex relative sm:w-[40%] justify-center  sm:mt-0 mt-5"
                  )}>
                    <Image
                      alt="img"
                      src={img}
                      width={600}
                      height={600}
                      className="sm:w-[35rem] sm:h-[85vh] w-80 h-[95vw] object-cover self-start"
                    />
                    <div className="absolute flex w-[90%] h-[7vh] bg-[#fe522d] -bottom-10 rounded-xl items-center justify-evenly">
                      <div className="flex w-[80%] items-center justify-between">
                        <div className="flex flex-col items-center justify-between">
                          <span className="sm:text-3xl font-bold text-3xl text-white">
                            {percentOne}
                          </span>
                          <span className="sm:text-3xl  text-sm text-white">
                            {percentOneName}
                          </span>
                        </div>
                        <Separator
                          orientation="vertical"
                          className="bg-white text-white h-14 w-[0.4vw]"
                        />
                        <div className="flex flex-col  items-center justify-center">
                          <span className="text-3xl font-bold  text-white">
                            {percentTwo}
                          </span>
                          <span className="sm:text-3xl  text-sm text-white">
                            {percentTwoName}
                          </span>
                        </div>
                        {/* <Separator
                          orientation="vertical"
                          className="bg-white text-white  h-20"
                        />
                        <div className="flex flex-col items-center justify-between">
                          <span className="sm:text-6xl sm:font-bold mb-2 text-white">
                            {percentTree}
                          </span>
                          <span className="sm:text-3xl  text-sm text-white">
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
