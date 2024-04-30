import { cn } from "@/lib/utils";
import Image from "next/image";
import Lusa from "../../public/imgs/MAYBELLINE_LUSA_HOMEPAGE.gif";
import Shein from "../../public/imgs/SHEIN_HOMEPAGE.gif";
import openFarm from "../../public/imgs/OPENFARM_HOMEPAGE.gif";
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
      img: Shein,
      percentOne: "76%",
      percentOneName: "DELIVERED CONTENT",
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
      <h1 className="text-[#3f3f3f] uppercase font-bold text-[7rem] w-[80%]">
        WE&apos;RE BUILD ON STRONG RELATIONSHIPS
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
                    id % 2 !== 1 ? "flex-row-reverse" : "flex",
                    `w-full flex items-center justify-between`
                  )}
                >
                  <div className="flex flex-col w-[45%] space-y-7">
                    <p className="font-semibold text-2xl">{description}</p>
                    <p>{name}</p>
                  </div>
                  <div className="flex relative w-[35%] justify-center">
                    <Image alt="img" src={img} width={300} height={300} />
                    <div className="absolute flex w-full h-[10vh] bg-[#fe522d] bottom-0 rounded-xl items-center justify-center">
                      <div className="flex w-[90%] items-center justify-between">
                        <div className="flex flex-col items-center justify-between">
                          <span className="text-lg text-white">
                            {percentOne}
                          </span>
                          <span className="text-sm text-white">
                            {percentOneName}
                          </span>
                        </div>
                        <Separator
                          orientation="vertical"
                          className="bg-white text-white h-12"
                        />
                        <div className="flex flex-col items-center justify-between">
                          <span className="text-lg text-white">
                            {percentTwo}
                          </span>
                          <span className="text-sm text-white">
                            {percentTwoName}
                          </span>
                        </div>
                        <Separator
                          orientation="vertical"
                          className="bg-white text-white  h-12"
                        />
                        <div className="flex flex-col items-center justify-between">
                          <span className="text-lg text-white">
                            {percentTree}
                          </span>
                          <span className="text-sm text-white">
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
