"use client";

import { phoneNumber } from "@/lib/phoneNumber";
import { ConversionTracker } from "@/utils/conversionTracking";
import { Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function FixedCallWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <button
        className="group relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-3xl"
        onClick={() => {
          // Track the conversion
          ConversionTracker.trackWhatsApp('', 'fixed-whatsapp', 30);
          // Open WhatsApp
          window.open(`https://wa.me/${phoneNumber.replace(/\s/g, "")}`);
        }}
        title="WhatsApp Us"
      >
        <MessageCircle size={24} className="group-hover:scale-110 transition-transform duration-300" />
        
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          WhatsApp Us
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </button>

      {/* Call Button */}
      <button
        className="group relative bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-3xl"
        onClick={() => {
          // Track the conversion
          ConversionTracker.trackCall(phoneNumber, 'fixed-call', 50);
          // Open phone dialer
          window.open(`tel:${phoneNumber}`);
        }}
        title="Call Us"
      >
        <Phone size={24} className="group-hover:scale-110 transition-transform duration-300" />
        
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20"></div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Call Us
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </button>
    </div>
  );
}
