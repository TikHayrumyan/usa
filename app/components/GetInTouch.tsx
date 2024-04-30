import { url } from "inspector";
import Link from "next/link";
import getExample from "../../public/imgs/getExample.jpg";
export default function GetInTouch() {
  return (
    <div
      className="w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-cover bg-gray-200 "
      style={{ backgroundImage: `url(${getExample.src})` }}
    >
      <h2 className="text-9xl text-white mb-10">GET IN TOUCH.</h2>
      <Link
        href="/"
        className="w-[20vw] flex items-center justify-center bg-transparent h-[3vw] border border-white rounded-xl text-white"
      >
        INFO {">>"}
      </Link>
    </div>
  );
}
