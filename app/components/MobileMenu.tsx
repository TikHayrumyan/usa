import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Navlinks } from "./Header";
import Link from "next/link";
import Image from "next/image";

import Logo from "../../public/Logos/logoOrange.png";
import Icon from "../../public/Logos/redLogoMobile.png";

import bgImage from "../../public/patterns/CD_HalftoneBackgroundWebsite_White.svg";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="focus-visible:outline-none focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:outline-none hover:bg-opacity-0">
          <Menu className="w-20 h-20 text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-[#2e2e2e] bg-cover bg-no-repeat  w-[100vw] mobMenu">
        <Link href="/">
          <Image alt="Logo" src={Logo} className="w-[35vw] h-auto" />
        </Link>
        <Image
            alt="logo"
            src={Icon}
            width={55}
            height={55}
            className="absolute  bottom-[5vw] right-[5vw] w-[5vw] h-auto"
          />
        <Image
          src={bgImage}
          width={1500}
          height={1500}
          alt="pattern"
          className="absolute top-0 left-0 bottom-0 object-cover opacity-10 h-full w-full z-0"
        />
        <div className="mt-[21vw] flex px-2 space-y-1 flex-col">
          {Navlinks.map((item, index) => {
            return (
              <>
                <Link
                  key={index}
                  href={item.href}
                  className="uppercase font-bold text-[19vw] text-center leading-[21vw] text-[#fe522d] relative"
                >
                  {item.name}
                </Link>
              </>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}
