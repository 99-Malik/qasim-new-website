"use client";

import { phoneNumber } from "@/lib/phoneNumber";
import { Phone } from "lucide-react";

export default function HeaderCallButton() {
  return (
    <button
      className="px-2 py-2 md:px-10 md:py-3 text-sm md:text-base rounded-full text-white hover:bg-white hover:text-secondary font-medium transition-all text-nowrap ease-in duration-150 bg-primary flex items-center gap-1"
      onClick={() => {
        window.open(`tel:${phoneNumber}`);
      }}
    >
      <Phone size="20" />
      <span className="hidden sm:flex">Hire us</span>
    </button>
  );
}
