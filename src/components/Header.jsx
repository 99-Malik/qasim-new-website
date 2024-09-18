"use client";

import { cn } from "@/lib/utils";
import { Protest_Guerrilla } from "next/font/google";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { logoName } from "@/lib/logoName";
import HeaderCallButton from "./buttons/HeaderCallButton";
import { useState } from "react";

const logoFont = Protest_Guerrilla({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  // change color of scrollbar when user scrolls
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  return (
    <header
      className={cn(
        "z-50 bg-transparent fixed top-0 text-white w-full flex items-center justify-center",
        scrollY > 100 ? "bg-white text-black shadow-md" : ""
      )}
    >
      <div className="w-full max-w-7xl px-5 py-4 flex gap-10 justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="block md:hidden">
            <Sidebar />
          </div>
          <Link
            href="/"
            className={cn(
              "text-2xl sm:text-3xl text-nowrap",
              logoFont.className
            )}
          >
            {logoName}
          </Link>
        </div>
        <div className="flex items-center justify-center gap-5">
          <div className="hidden md:flex items-center justify-center gap-5">
            <Link
              className="font-semibold transition-all ease-in duration-150 hover:text-primary"
              href="/"
            >
              Home
            </Link>
            <Link
              className="font-semibold transition-all ease-in duration-150 hover:text-primary"
              href="/#about"
            >
              About
            </Link>
            <Link
              className="font-semibold transition-all ease-in duration-150 hover:text-primary"
              href="/#services"
            >
              Services
            </Link>
            <Link
              className="font-semibold transition-all ease-in duration-150 hover:text-primary"
              href="/#contact"
            >
              Contact
            </Link>
          </div>
          <HeaderCallButton />
        </div>
      </div>
    </header>
  );
}

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size="24" />
      </SheetTrigger>
      <SheetContent className="w-[80vw]" side="left">
        <SheetHeader>
          <SheetTitle>
            <Link
              href="/"
              className={cn(
                "text-2xl sm:text-3xl text-nowrap",
                logoFont.className
              )}
            >
              {logoName}
            </Link>
          </SheetTitle>
          <SheetDescription>
            At {logoName}, we provide the best services for your home appliances
            repair.
          </SheetDescription>
          <div className="flex flex-col gap-5 py-5">
            <Link
              className="font-semibold transition-all ease-in duration-150 hover:text-primary"
              href="/"
            >
              Home
            </Link>
            <Link
              className="font-semibold transition-all ease-in duration-150 hover:text-primary"
              href="/#about"
            >
              About
            </Link>
            <Link
              className="font-semibold transition-all ease-in duration-150 hover:text-primary"
              href="/#services"
            >
              Services
            </Link>
            <Link
              className="font-semibold transition-all ease-in duration-150 hover:text-primary"
              href="/#contact"
            >
              Contact
            </Link>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
