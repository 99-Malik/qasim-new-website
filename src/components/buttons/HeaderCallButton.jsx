"use client";

import { phoneNumber } from "@/lib/phoneNumber";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";

export default function HeaderCallButton({ company }) {
  return (
    <button
      className={cn(
        "px-2 py-2 md:px-10 md:py-3 text-sm md:text-base rounded-full text-white hover:bg-white hover:text-secondary bg-primary font-medium transition-all text-nowrap ease-in duration-150 flex items-center gap-1",
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
      onClick={() => {
        window.open(`tel:${phoneNumber}`);
      }}
    >
      <Phone size="20" />
      <span className="hidden sm:flex">Hire us</span>
    </button>
  );
}
