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
import StrongRelationshipMobile from "./components/StrongRelationshipMobile";
export default function Home() {
  return (
    <main className="flex flex-col ">
      <div className="sm:h-[80vh] w-full relative ">
        {/* <video className="w-full h-[90vh]" autoPlay loop muted>
          <source src="/videos/example.mp4" />
        </video> */}
        <Image
          alt="Main Image"
          src={MainImg}
          width={1000}
          height={1000}
          className="object-cover sm:h-full  w-full"
        />
      </div>
      {/* section 2 */}
      <div className="w-full overflow-x-hidden h-auto flex flex-col bg-[#2e2e2e] relative border-b-8 border-b-black ">
        <div className="sm:my-[0.9217vw] ">
          <Image
            src={White_CD_HalftoneBackground}
            width={1500}
            height={1500}
            alt="pattern"
            className="absolute top-0 left-0 bottom-0 object-cover opacity-10 h-full w-full z-0"
          />
          <div className="sm:my-[0.3692vw]">
            <LogoSlider num="09" />
          </div>
          <AgencyEngineers />
          <div className="sm:my-[2.951vw]">
            <LogoSlider num="08" />
          </div>
        </div>
        <div className="w-full flex sm:items-center justify-between sm:my-[1.844vw] my-5 sm:h-[14.5vw] h-auto container ">
          <div className="flex flex-col sm:leading-[2.2143vw] leading-5 sm:w-[60%] text-xl h-auto relative z-10 sm:pb-[3.6842vw]">
            <p className="sm:w-full w-[60%] text-white font-normal sm:text-[1.844vw] text-[0.8rem]">
              Marketing+ influencer Agency,
              <span className="text-[#fe522d] font-bold">
                {" "}
                Creater Deck,{" "}
              </span>{" "}
              made the list!
            </p>
            <p className="sm:w-full w-[60%] text-white font-normal sm:text-[1.844vw] text-[0.8rem]">
              Inc. 5000, America&apos;s Fastest - Growing Private Company.
            </p>
          </div>
          <div className="absolute right-0 bottom-0 z-50">
            <Image
              alt="img"
              src={inc}
              width={500}
              height={400}
              className="sm:w-[37vw] w-44 h-auto object-cover"
            />
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className="container flex flex-col space-y-10 sm:space-y-10-custom py-10 sm:py-[1.844vw] h-auto sm:mb-[2.5803vw] ">
        <h1 className="uppercase font-bold sm:text-[9.211vw] text-[3.9rem] sm:leading-[9.584vw] leading-[3.8rem] text-[#2a2a2a] w-full sm:w-[80%]">
          an influencer+ marketing agency
        </h1>
        <div className="flex sm:flex-row flex-col w-full items-start justify-between sm:h-[90vh]">
          <div className="flex flex-col h-full sm:w-[60%] sm:space-y-0 space-y-4 w-full sm:text-left text-center justify-between sm:leading-[2.2143vw] text-[#2e2e2e]">
            <p className="w-full font-normal sm:text-[1.844vw]  text-[0.95rem] h-auto">
              Reintroducing Creator Deck, an influencer+ marketing agency. With
              10+ years of best-in-class expertise, we engineer influence for
              industry-leading brands.
            </p>
            <p className="w-full font-normal sm:text-[1.844vw] text-[1rem] h-auto">
              Our 360 strategic programming - rooted in cultural
              insights, powered by data - amplifies reach and sparks
              conversation.
            </p>
            <p className="w-full font-normal sm:text-[1.844vw] text-[1rem]">
              Our intersectional, long tail approach to casting drives community
              and secures bran affinity + trust among audiences.
            </p>
            <p className="w-full font-normal sm:text-[1.844vw] text-[1rem]">
              Through agility and smarter spending, we operate as an extension of
              our Clients with care and efficiency.
            </p>
            <p className="w-full font-normal sm:text-[1.844vw] text-[1rem] sm:mb-0 mb-10">
              We call it{" "}
              <span className="font-semibold sm:text-[1.844vw] text-[1rem] ">Influencer+</span>
            </p>
            <Button
              variant="default"
              className="uppercase bg-[#2e2e2e] sm:text-[1.2162vw] rounded-2xl sm:w-[27.2vw] sm:my-0 my-10 sm:py-[2.5803vw] sm:flex hidden"
            >
              check out our work {`>>`}
            </Button>
          </div>
          <Image
            className="sm:w-[28.424vw] flex sm:h-full object-cover w-96 h-[65vw] sm:mt-0 mt-8"
            alt="guitar"
            src={GUITAR_UD_HOMEPAGE}
            width={300}
            height={300}
          />
          <Button
            variant="default"
            className="uppercase bg-[#2e2e2e] sm:w-[50%] text-[0.7rem] sm:my-0 mt-10 sm:hidden flex w-[50%] self-center"
          >
            check out our work {`>>`}
          </Button>
        </div>
      </div>
      {/* section 4 */}
      <div className="bg-[#2e2e2e] overflow-x-hidden py-5 sm:py-[1.844vw] relative">
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
      <div className="sm:py-[2.951vw] sm:block hidden">
        <StrongRelationship />
      </div>
      <div className="sm:hidden block pt-5 pb-6">
      <StrongRelationshipMobile/>
      </div>
      {/* section 6 */}
      <div className="overflow-x-hidden ">
        <GetInTouch />
      </div>
      {/* footer */}
      <div className="bg-[#2e2e2e] overflow-x-hidden sm:py-[0.1847vw] pt-0 relative ">
        <FooterSlider />
      </div>
    </main>
  );
}
