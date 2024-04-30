import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Navlinks } from "./Header";
import Link from "next/link";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="w-20 h-20 text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="mt-5 flex px-2 space-y-1 flex-col">
            {Navlinks.map((item,index) => {
                return(
                    <>
                        <Link key={index} href={item.href} className="">
                            {item.name}
                        </Link>
                    </>
                )
            })}
        </div>
      </SheetContent>
    </Sheet>
  );
}
