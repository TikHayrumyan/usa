import Image from "next/image";
import LogoSlider from "./components/LogoSlider";
import White_CD_HalftoneBackground from "../public/patterns/backgroundPattern.png";
import AgencyEngineers from "./components/AgencyEngineers";
import inc from "../public/imgs/incWithBg.png";
import GUITAR_UD_HOMEPAGE from "../public/imgs/GUITAR_UD_HOMEPAGE.gif";
import { Button } from "@/components/ui/button";
import OurServices from "./components/OurServices";
import StrongRelationship from "./components/StrongRelationship";
import GetInTouch from "./components/GetInTouch";
import FooterSlider from "./components/FooterSlider";
import MainImg from "../public/imgs/Main.jpg";
export default function Home() {
  return (
    <main className="flex flex-col ">
      <div className="h-[88vh] w-full relative">
        {/* <video className="w-full h-[90vh]" autoPlay loop muted>
          <source src="/videos/example.mp4" />
        </video> */}
        <Image
          alt="Main Image"
          src={MainImg}
          width={1000}
          height={1000}
          className="object-cover h-full w-full"
        />
      </div>
      {/* section 2 */}
      <div className="w-full overflow-x-hidden h-auto flex flex-col bg-[#3f3f3f] relative border-b-8 border-b-black">
        <div className="my-5 ">
          <Image
            src={White_CD_HalftoneBackground}
            width={1500}
            height={1500}
            alt="pattern"
            className="absolute top-0 left-0 bottom-0 object-cover opacity-10 h-full w-full z-0"
          />
          <div className="my-2">
            <LogoSlider num="09" />
          </div>
          <AgencyEngineers />
          <div className="my-16">
            <LogoSlider num="08" />
          </div>
        </div>
        <div className="w-full flex sm:items-center justify-between my-10 sm:h-[20vh] h-[40vh] container ">
          <div className="flex flex-col sm:w-[60%] text-xl h-auto relative z-10 ">
            <p className=" w-full text-white font-normal text-2xl">
              Marketing+ influencer Agency,
              <span className="text-[#fe522d] font-bold">
                {" "}
                Creater Deck,{" "}
              </span>{" "}
              made the list!
            </p>
            <p className="w-full text-white font-normal text-2xl">
              Inc. 5000,America&apos;s Fastest = Growing Private Company.
            </p>
          </div>
          <div className="absolute right-0 bottom-0 z-50">
            <Image
              alt="img"
              src={inc}
              width={500}
              height={400}
              className="sm:w-[35vw] h-auto object-cover"
            />
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className="container flex flex-col space-y-10 py-10 h-auto mb-14">
        <h1 className="uppercase font-bold sm:text-[9rem] text-[3.5rem] text-[#2a2a2a] sm:w-[80%]">
          an influencer+ marketing agency
        </h1>
        <div className="flex sm:flex-row flex-col w-full items-start justify-between sm:h-[70vh]">
          <div className="flex flex-col h-full sm:w-[65%] justify-between">
            <p className="w-full font-normal text-3xl h-auto">
              Reintroducing Creator Deck, an influencer+ marketing agency.With
              10+ years of best-in-class expertise,we engineer influence for
              industry-leading brands.
            </p>
            <p className="w-full font-normal text-3xl h-auto">
              Our 360 strategic programming - rooted in cultural
              insights,powered by data - amplifies reach and sparks
              conversation.
            </p>
            <p className="w-full font-normal text-3xl">
              Our intersectional,long tail approach to casting drives community
              and secures bran affinity + trust among audiences.
            </p>
            <p className="w-full font-normal text-3xl">
              Through agility and smarter spending,we operate as an extension of
              our Clients with care and efficiency.
            </p>
            <p className="w-full font-normal text-3xl sm:mb-0 mb-10">
              We call it{" "}
              <span className="font-semibold text-3xl">Influencer+</span>
            </p>
            <Button
              variant="default"
              className="uppercase bg-[#3f3f3f] sm:w-[40%] sm:my-0 my-10 sm:py-7 sm:flex hidden"
            >
              check out our work {`>>`}
            </Button>
          </div>
          <Image
            className="sm:w-[25rem] flex h-full object-cover w-96"
            alt="guitar"
            src={GUITAR_UD_HOMEPAGE}
            width={300}
            height={300}
          />
          <Button
            variant="default"
            className="uppercase bg-[#3f3f3f] sm:w-[50%] sm:my-0 my-10 sm:hidden flex w-full"
          >
            check out our work {`>>`}
          </Button>
        </div>
      </div>
      {/* section 4 */}
      <div className="bg-[#3f3f3f] overflow-x-hidden py-5 sm:py-10 relative ">
        <Image
          src={White_CD_HalftoneBackground}
          width={1500}
          height={1500}
          alt="pattern"
          className="absolute top-0 left-0 bottom-0 object-cover opacity-10 h-full w-full z-0"
        />

        <OurServices />
        <LogoSlider num="07" />
      </div>
      {/* section 5 */}
      <div className="py-16 ">
        <StrongRelationship />
      </div>
      {/* section 6 */}
      <div className="overflow-x-hidden ">
        <GetInTouch />
      </div>
      {/* footer */}
      <div className="bg-[#3f3f3f] overflow-x-hidden py-1 relative ">
        <FooterSlider />
      </div>
    </main>
  );
}
