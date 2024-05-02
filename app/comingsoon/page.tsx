import Image from "next/image";
import White_CD_HalftoneBackground from "../../public/patterns/backgroundPattern.png";

export default function ComingSoon() {
  return (
    <div className="flex bg-[#2e2e2e] w-full sm:h-[88vh] h-[60vh]">
      <div className="container flex flex-col items-center justify-center relative">
        <Image
          src={White_CD_HalftoneBackground}
          width={1500}
          height={1500}
          alt="pattern"
          className="absolute top-0 left-0 bottom-0 object-cover opacity-10 h-full w-full z-0"
        />
        <h1 className="sm:text-[9rem] text-6xl sm:leading-[10rem] text-center font-bold italic text-[#fe522d] sm:w-[40%] relative">
          COMING SOON!
        </h1>
        <p className="text-center sm:w-[40vw] text-xl relative text-white sm:mt-10 mt-10">
          In the meantime, sign up for our newsletter below to stay up to date
        </p>
      </div>
    </div>
  );
}
