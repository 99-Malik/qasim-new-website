"use client";

import { phoneNumber } from "@/lib/phoneNumber";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import Image from "next/image";

export default function ServiceCallButtons({ company }) {
  return (
    <div className="flex items-center flex-wrap gap-2 text-white self-end relative z-10">
      <button
        className={cn(
          "px-3 text-xs py-2 rounded-full flex items-center font-medium hover:bg-white transition-all ease-in duration-150 gap-1 relative z-20 cursor-pointer",
          company === "Siemens"
            ? "bg-siemensPrimary hover:text-black"
            : company === "Bosch"
            ? "bg-boschPrimary hover:text-boschSecondary"
            : company === "Samsung"
            ? "bg-samsungPrimary hover:text-samsungSecondary"
            : company === "LG"
            ? "bg-lgPrimary hover:text-lgSecondary"
            : "bg-primary hover:text-secondary"
        )}
        onClick={() => window.open(`tel:${phoneNumber}`)}
      >
        <Phone size="15" />
        <span>Call</span>
      </button>
      <button
        className={cn(
          "px-3 text-xs py-2 rounded-full flex items-center font-medium hover:bg-white transition-all ease-in duration-150 gap-1 relative z-20 cursor-pointer",
          company === "Siemens"
            ? "text-siemensSecondary bg-black hover:text-black hover:bg-siemensSecondary"
            : company === "Bosch"
            ? " bg-boschSecondary text-white hover:text-boschSecondary"
            : company === "Samsung"
            ? "bg-white text-samsungPrimary hover:bg-samsungSecondary"
            : company === "LG"
            ? "bg-lgSecondary hover:bg-white hover:text-black"
            : "bg-secondary hover:text-secondary"
        )}
        onClick={() =>
          window.open(`https://wa.me/${phoneNumber.replace(/\s/g, "")}`)
        }
      >
        <Image src="/whatsapp.svg" width={15} height={15} alt="whatsapp" />
        <span>Whatsapp</span>
      </button>
    </div>
  );
}
