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
    {
      id: 3,
      description:
        "Lorem ipsum dolor sit amet,consetetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magnafeugiatn lobortis nisl ut aliquip ex ea commodo consequat.",
      name: "- REDKEN",
      img: REDKEN,
      percentOne: "76%",
      percentOneName: "DELIVERED",
      percentTwo: "35",
      percentTwoName: "IMPRESSIONS",
      percentTree: "35",
      percentTreeName: "IMPRESSIONS",
    },
    {
      id: 4,
      description:
        "Lorem ipsum dolor sit amet,consetetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magnafeugiatn lobortis nisl ut aliquip ex ea commodo consequat.",
      name: "- OPEN FARM",
      img: openFarm,
      percentOne: "35",
      percentOneName: "IMPRESSIONS",
      percentTwo: "35",
      percentTwoName: "IMPRESSIONS",
      percentTree: "35",
      percentTreeName: "IMPRESSIONS",
    },
  ];
  return (
    <div className="container flex flex-col space-y-10">
      <h1 className="text-[#2a2a2a] uppercase font-bold sm:text-[7.5rem] text-5xl sm:w-[90%]">
        WE&apos;RE BUILT ON STRONG RELATIONSHIPS
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
                  <div className="flex flex-col sm:w-[50%] space-y-7">
                    <p className="font-semibold sm:text-3xl sm:mt-0 mt-5">
                      {description}
                    </p>
                    <p>{name}</p>
                  </div>
                  <div className="flex relative sm:w-[35%] justify-center sm:mt-0 mt-5">
                    <Image
                      alt="img"
                      src={img}
                      width={300}
                      height={300}
                      className="sm:w-auto w-96 object-cover"
                    />
                    <div className="absolute flex w-full h-[10vh] bg-[#fe522d] bottom-0 rounded-xl items-center justify-center">
                      <div className="flex w-[90%] items-center justify-between">
                        <div className="flex flex-col items-center justify-between">
                          <span className="text-xl text-white">
                            {percentOne}
                          </span>
                          <span className="text-xl text-white">
                            {percentOneName}
                          </span>
                        </div>
                        <Separator
                          orientation="vertical"
                          className="bg-white text-white h-12"
                        />
                        <div className="flex flex-col items-center justify-between">
                          <span className="text-xl text-white">
                            {percentTwo}
                          </span>
                          <span className="text-xl text-white">
                            {percentTwoName}
                          </span>
                        </div>
                        <Separator
                          orientation="vertical"
                          className="bg-white text-white  h-12"
                        />
                        <div className="flex flex-col items-center justify-between">
                          <span className="text-xl text-white">
                            {percentTree}
                          </span>
                          <span className="text-xl text-white">
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
