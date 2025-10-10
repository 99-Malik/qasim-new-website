"use client";

import { phoneNumber } from "@/lib/phoneNumber";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import { ConversionTracker } from "@/utils/conversionTracking";

export default function HeaderCallButton({ company }) {
  return (
    <button
    className={cn(
      "px-2 py-2 md:px-10 md:py-3 text-sm md:text-base rounded-full text-white hover:opacity-90 bg-primary font-medium transition-all text-nowrap ease-in duration-150 flex items-center gap-1",
      company === "heaterRepair"
        ? "bg-siemensPrimary"
        : company === "Siemens"
        ? "bg-siemensPrimary"
        : company === "Bosch"
        ? "bg-boschPrimary"
        : company === "Samsung"
        ? "bg-samsungPrimary"
        : company === "LG"
        ? "bg-lgPrimary"
        : "bg-primary"
    )}
      onClick={() => {
        // Track the conversion
        ConversionTracker.trackCall(phoneNumber, 'header', 50);
        // Open phone dialer
        window.open(`tel:${phoneNumber}`);
      }}
    >
      <Phone size="20" />
      <span className="hidden sm:flex">Hire us</span>
    </button>
  );
}
