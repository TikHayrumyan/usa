import Image from "next/image";
import LogoSlider from "./components/LogoSlider";
import White_CD_HalftoneBackground from "../public/patterns/White_CD_HalftoneBackground.png";
import AgencyEngineers from "./components/AgencyEngineers";
import inc from "../public/imgs/inc.png";
import GUITAR_UD_HOMEPAGE from "../public/imgs/GUITAR_UD_HOMEPAGE.gif";
import { Button } from "@/components/ui/button";
import OurServices from "./components/OurServices";
import StrongRelationship from "./components/StrongRelationship";
import GetInTouch from "./components/GetInTouch";

export default function Home() {
  return (
    <main className="flex flex-col ">
      <div className="h-[90vh] w-full relative">
        <video className="w-full h-[90vh]" autoPlay loop muted>
          <source src="/videos/example.mp4" />
        </video>
      </div>
      {/* section 2 */}
      <div className="w-full overflow-x-hidden h-auto flex flex-col bg-[#3f3f3f] relative border-b-8 border-b-black">
        <div className="my-5 z-10">
          {/* <Image src={White_CD_HalftoneBackground} width={1500} height={1500} alt="pattern" className="absolute top-0 left-0 bottom-0 object-cover opacity-20 h-full w-full"/> */}
          <LogoSlider num="09" />
          <AgencyEngineers />
          <LogoSlider num="08" />
        </div>
        <div className="w-full flex items-center justify-between my-10 h-[20vh] container ">
          <div className="flex flex-col w-[60%] text-xl h-auto">
            <p className=" w-full text-white font-normal">
              Marketing+ influencer Agency,
              <span className="text-[#fe522d]">Creater Deck,</span>made the
              list!
            </p>
            <p className="w-full text-white font-normal">
              Inc. 5000,America&apos;s Fastest = Growing Private Company.
            </p>
          </div>
          <div className="absolute right-0">
            <Image alt="img" src={inc} width={200} height={200} />
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className="container flex flex-col space-y-10 py-10 h-auto">
        <h1 className="uppercase font-bold text-[7rem] text-[#3f3f3f] w-[80%]">
          an influencer+ marketing agency
        </h1>
        <div className="flex w-full items-start justify-between h-[70vh]">
          <div className="flex flex-col h-full w-[60%] justify-between">
            <p className="w-full font-normal text-2xl h-auto">
              Reintroducing Creator Deck, an influencer+ marketing agency.With
              10+ years of best-in-class expertise,we engineer influence for
              industry-leading brands.
            </p>
            <p className="w-full font-normal text-2xl h-auto">
              Our 360 strategic programming - rooted in cultural
              insights,powered by data - amplifies reach and sparks
              conversation.
            </p>
            <p className="w-full font-normal text-2xl">
              Our intersectional,long tail approach to casting drives community
              and secures bran affinity + trust among audiences.
            </p>
            <p className="w-full font-normal text-2xl">
              Through agility and smarter spending,we operate as an extension of
              our Clients with care and efficiency.
            </p>
            <p className="w-full font-normal text-2xl">
              We call it <span className="font-semibold">Influencer+</span>
            </p>
            <Button
              variant="default"
              className="uppercase bg-[#3f3f3f] w-[50%]"
            >
              check out our work {`>>`}
            </Button>
          </div>
          <Image
            className="w-auto flex h-full object-contain"
            alt="guitar"
            src={GUITAR_UD_HOMEPAGE}
            width={300}
            height={300}
          />
        </div>
      </div>
      {/* section 4 */}
      <div className="bg-[#3f3f3f] overflow-x-hidden py-10">
        <OurServices />
        <LogoSlider num="07" />
      </div>
      {/* section 5 */}
      <div className="py-16">
        <StrongRelationship />
      </div>
      {/* section 6 */}
      <div className="overflow-x-hidden">
        <GetInTouch />
      </div>
    </main>
  );
}
