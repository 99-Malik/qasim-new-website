"use client";

import { phoneNumber } from "@/lib/phoneNumber";
import { Phone } from "lucide-react";
import Image from "next/image";

export default function ServiceCallButtons() {
  return (
    <div className="flex items-center flex-wrap gap-2 text-white self-end">
      <button
        className="px-3 text-xs py-2 bg-primary rounded-full flex items-center font-medium hover:bg-white hover:text-secondary transition-all ease-in duration-150 gap-1"
        onClick={() => window.open(`tel:${phoneNumber}`)}
      >
        <Phone size="15" />
        <span>Call</span>
      </button>
      <button
        className="px-3 text-xs py-2 bg-secondary rounded-full flex items-center font-medium hover:bg-white hover:text-secondary transition-all ease-in duration-150 gap-1"
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
