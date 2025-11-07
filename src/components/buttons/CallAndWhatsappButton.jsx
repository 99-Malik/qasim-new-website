"use client";

import { phoneNumber } from "@/lib/phoneNumber";
import { cn } from "@/lib/utils";
import { Phone, MessageCircle } from "lucide-react";
import { ConversionTracker } from "@/utils/conversionTracking";
import { getBrandColors } from "@/lib/brandConfig";

export default function CallAndWhatsappButton({ company }) {
  const colors = getBrandColors(company);
  
  return (
    <div className="flex items-center flex-wrap gap-2 text-white relative z-10">
      <button
        className={cn(
          "px-5 py-3 rounded-full flex items-center font-medium hover:opacity-90 transition-all ease-in duration-150 gap-2 relative z-20 cursor-pointer border-2",
          colors.bg,
          colors.border,
          "text-white"
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
          "px-5 py-3 rounded-full flex items-center font-medium hover:opacity-90 transition-all ease-in duration-150 gap-2 relative z-20 cursor-pointer border-2",
          colors.bg,
          colors.border,
          "text-white"
        )}
        onClick={() => {
          // Track the conversion
          ConversionTracker.trackWhatsApp('', 'main-banner', 30);
          // Open WhatsApp
          window.open(`https://wa.me/${phoneNumber.replace(/\s/g, "")}`);
        }}
      >
        <MessageCircle size="18" />
        <span>Whatsapp</span>
      </button>
    </div>
  );
}
