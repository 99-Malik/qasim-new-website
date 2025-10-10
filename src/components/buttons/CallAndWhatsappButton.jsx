"use client";

import { phoneNumber } from "@/lib/phoneNumber";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import Image from "next/image";
import { ConversionTracker } from "@/utils/conversionTracking";

export default function CallAndWhatsappButton({ company }) {
  return (
    <div className="flex items-center flex-wrap gap-2 text-white relative z-10">
      <button
        className={cn(
          "px-5 py-3 rounded-full flex items-center font-medium hover:opacity-90 transition-all ease-in duration-150 gap-2 relative z-20 cursor-pointer",
          company === "Siemens"
            ? "bg-siemensPrimary text-white"
            : company === "Bosch"
            ? "bg-boschPrimary text-white"
            : company === "Samsung"
            ? "bg-samsungPrimary text-white"
            : company === "LG"
            ? "bg-lgPrimary text-white"
            : "bg-primary text-white"
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
          "px-5 py-3 rounded-full flex items-center font-medium hover:opacity-90 transition-all ease-in duration-150 gap-2 relative z-20 cursor-pointer",
          company === "Siemens"
            ? "bg-green-500 text-white"
            : company === "Bosch"
            ? "bg-green-500 text-white"
            : company === "Samsung"
            ? "bg-green-500 text-white"
            : company === "LG"
            ? "bg-green-500 text-white"
            : "bg-green-500 text-white"
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
