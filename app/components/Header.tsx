"use client";
import Image from "next/image";
import Logo from "../../public/Logos/logoOrange.png";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

export const Navlinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Work",
    href: "/comingsoon",
  },
  {
    name: "About",
    href: "/comingsoon",
  },
  {
    name: "Services",
    href: "/comingsoon",
  },
  {
    name: "Resources",
    href: "/comingsoon",
  },
  {
    name: "Login",
    href: "/comingsoon",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="bg-[#2a2a2a] sm:h-[20vh] h-[10vh] flex items-center">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Image
            alt="Logo"
            src={Logo}
            width={1500}
            height={1500}
            className="sm:w-[14.768vw] w-[35vw] h-auto"
          />
        </Link>
        <div className="hidden sm:flex  h-auto">
          <NavigationMenu>
            <NavigationMenuList>
              {Navlinks.map((item, index) => {
                return (
                  <>
                    <NavigationMenuItem key={index}>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          active={pathname === item.href}
                          className={cn(
                            pathname === item.href
                              ? " !text-white border-b-2 "
                              : " !text-white",
                            "uppercase  font-normal text-3xl-custom mx-[0.1847vw]"
                          )}
                        >
                          {item.name}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="sm:hidden flex items-center ">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}
