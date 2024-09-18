import { logoName } from "@/lib/logoName";
import { cn } from "@/lib/utils";
import { Copyright, CopyrightIcon } from "lucide-react";
import { Protest_Guerrilla } from "next/font/google";
import Link from "next/link";

const logoFont = Protest_Guerrilla({
  subsets: ["latin"],
  weight: "400",
});

export default function Footer({ company }) {
  return (
    <footer
      className={cn(
        "w-full flex items-center justify-center text-white",
        company === "Siemens"
          ? "bg-siemensPrimary"
          : company === "Bosch"
          ? "bg-boschSecondary"
          : company === "Samsung"
          ? "bg-samsungPrimary"
          : company === "LG"
          ? "bg-lgSecondary"
          : "bg-secondary"
      )}
    >
      <div className="max-w-7xl w-full px-5 pt-10 flex flex-col gap-3 items-center justify-center text-center">
        <Link
          href="/"
          className={cn("text-2xl sm:text-3xl text-nowrap", logoFont.className)}
        >
          {logoName}
        </Link>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-5 text-sm">
          <Link
            href="/"
            className="font-light hover:font-semibold px-2 sm:px-5 border-x border-white/20"
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="font-light hover:font-semibold px-2 sm:px-5 border-x border-white/20"
          >
            About
          </Link>
          <Link
            href="/#services"
            className="font-light hover:font-semibold px-2 sm:px-5 border-x border-white/20"
          >
            Services
          </Link>
          <Link
            href="/#contact"
            className="font-light hover:font-semibold px-2 sm:px-5 border-x border-white/20"
          >
            Contact
          </Link>
        </div>
        <span className="text-xs flex justify-center font-light py-4 border-t border-white/20 w-full items-center gap-1 text-white">
          <Copyright size={12} />
          2024 {logoName}. All right reserved.
        </span>
      </div>
    </footer>
  );
}
