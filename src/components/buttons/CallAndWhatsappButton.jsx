"use client";

import { phoneNumber } from "@/lib/phoneNumber";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import Image from "next/image";
import { ConversionTracker } from "@/utils/conversionTracking";

export default function CallAndWhatsappButton({ company }) {
  return (
    <div className="flex items-center flex-wrap gap-2 text-white">
      <button
        className={cn(
          "px-5 py-3 rounded-full flex items-center font-medium hover:bg-white transition-all ease-in duration-150 gap-2",
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
          // Track the conversion
          ConversionTracker.trackCall(phoneNumber, 'main-banner', 50);
          // Open phone dialer
          window.open(`tel:${phoneNumber}`);
        }}
      >
        <Phone size="18" />
        <span>Call Us</span>
      </button>
      <button
        className={cn(
          "px-5 py-3 rounded-full flex items-center font-medium hover:bg-white transition-all ease-in duration-150 gap-2",
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
        onClick={() => {
          // Track the conversion
          ConversionTracker.trackWhatsApp('', 'main-banner', 30);
          // Open WhatsApp
          window.open(`https://wa.me/${phoneNumber.replace(/\s/g, "")}`);
        }}
      >
        <Image src="/whatsapp.svg" width={18} height={18} alt="whatsapp" />
        <span>Whatsapp</span>
      </button>
    </div>
  );
}
