"use client";

import { phoneNumber } from "@/lib/phoneNumber";
import { Phone } from "lucide-react";
import Image from "next/image";

export default function CallAndWhatsappButton() {
  return (
    <div className="flex items-center flex-wrap gap-2 text-white">
      <button
        className="px-5 py-3 bg-primary rounded-full flex items-center font-medium hover:bg-white hover:text-secondary transition-all ease-in duration-150 gap-2"
        onClick={() => window.open(`tel:${phoneNumber}`)}
      >
        <Phone size="18" />
        <span>Call Us</span>
      </button>
      <button
        className="px-5 py-3 bg-secondary rounded-full flex items-center font-medium hover:bg-white hover:text-secondary transition-all ease-in duration-150 gap-2"
        onClick={() =>
          window.open(`https://wa.me/${phoneNumber.replace(/\s/g, "")}`)
        }
      >
        <Image src="/whatsapp.svg" width={18} height={18} alt="whatsapp" />
        <span>Whatsapp</span>
      </button>
    </div>
  );
}
