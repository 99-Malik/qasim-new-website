"use client";

import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import { ArrowRight, Zap, Target, Award, Phone, MessageCircle, Star, ShieldCheck, Clock, CalendarCheck } from "lucide-react";
import { getBrandColors, getBrandConfig } from "@/lib/brandConfig";
import { phoneNumber } from "@/lib/phoneNumber";
import { ConversionTracker } from "@/utils/conversionTracking";

export default function MainBanner({ company }) {
  const colors = getBrandColors(company);
  const brandConfig = company ? getBrandConfig(company) : null;
  const isBrandPage = !!company;

  // Helper to convert hex to rgba
  const hexToRgba = (hex, alpha) => {
    if (!hex) return `rgba(0, 0, 0, ${alpha})`;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  // Fallbacks
  const primaryColor = brandConfig?.primary || "#D81424"; // Default Red
  const secondaryColor = brandConfig?.secondary || "#0A2154"; // Default Blue

  // Dynamic styles for branded elements
  const brandGlow = {
    boxShadow: `0 0 20px -5px ${primaryColor}`
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Dynamic Background with Modern Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gray-950 pointer-events-none select-none">
          {/* Base Image */}
          <img
            src="/banner_hero_bg.png"
            alt="Professional Appliance Repair Service"
            className="w-full h-full object-cover opacity-50 scale-105 grayscale"
            style={{
              objectPosition: 'center',
            }}
          />
          {/* Brand Color Tint Layer */}
          <div
            className="absolute inset-0 mix-blend-overlay opacity-80"
            style={{ backgroundColor: primaryColor }}
          ></div>

          {/* Deep Gradient Wash */}
          <div
            className="absolute inset-0 mix-blend-multiply opacity-90"
            style={{
              background: `linear-gradient(to bottom, ${hexToRgba(secondaryColor, 0.8)}, ${hexToRgba(primaryColor, 0.6)})`
            }}
          ></div>
        </div>

        {/* Modern Glass Gradient for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/30 to-transparent"></div>

        {/* Static Particles/Blobs (CSS only) */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-[128px] opacity-30"
          style={{ backgroundColor: primaryColor }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full blur-[96px] opacity-20"
          style={{ backgroundColor: secondaryColor }}
        ></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Text & CTA */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm transition-transform hover:scale-105">
              <span className="relative flex h-3 w-3">
                <span
                  className="absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: primaryColor }}
                ></span>
                <span
                  className="relative inline-flex rounded-full h-3 w-3"
                  style={{ backgroundColor: primaryColor }}
                ></span>
              </span>
              <span className="text-sm font-medium text-white/90 tracking-wide uppercase text-xs">Call Us Now</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.1]">
              <span className="block opacity-90 text-4xl sm:text-5xl lg:text-6xl mb-2 font-medium"></span>
              <span className="text-white drop-shadow-md">
                {company ? `${company.toUpperCase()} SERVICE CENTER` : "HOME APPLIANCES"}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl font-light border-l-2 pl-6" style={{ borderColor: primaryColor }}>
              {company
                ? `Quality service for your ${company} appliances. We combine advanced diagnostics with genuine parts to restore your home's rhythm.`
                : "Experience premium home appliance repair. We combine advanced diagnostics with factory-certified parts to restore your home's rhythm."
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              {/* Note: CallAndWhatsappButton contains specific brand logic internally, but we can override via generic styles if needed.
                  However, the component itself effectively uses 'brandColors' if passed correctly. 
                  Below we render manual buttons to ensure total control if the component isn't perfect, 
                  BUT the user wants the component. Let's assume the component is fine (it uses brandConfig), 
                  but we'll replicate the style for the 'Customer Reviews' button.
              */}
              <CallAndWhatsappButton company={company} />

              <button
                className="group h-14 px-8 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Service Now
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" style={{ color: primaryColor }} />
              </button>
            </div>

            <div className="pt-8 flex items-center gap-8 text-gray-400 text-sm font-medium">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: hexToRgba(primaryColor, 0.1) }}
                >
                  <ShieldCheck className="w-5 h-5" style={{ color: primaryColor }} />
                </div>
                <span>Warranty<br />Included</span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: hexToRgba(primaryColor, 0.1) }}
                >
                  <Clock className="w-5 h-5" style={{ color: primaryColor }} />
                </div>
                <span>Same Day<br />Response</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visuals / Features Card */}
          <div className="hidden lg:block relative perspective-1000">
            {/* Floating Glass Card */}
            <div
              className="relative z-10 p-8 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl bg-white/5 overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
              style={{
                boxShadow: `0 25px 50px -12px ${hexToRgba(primaryColor, 0.3)}`,
                borderColor: hexToRgba(primaryColor, 0.2)
              }}
            >
              {/* Decorative glow */}
              <div
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[64px] transition-colors duration-500"
                style={{ backgroundColor: hexToRgba(primaryColor, 0.2) }}
              ></div>

              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Why Choose Us?</h3>
                    <p className="text-gray-400 text-sm">Premium Standard Service</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="grid gap-4">
                  {[
                    { title: "Certified Experts", desc: "Factory trained technicians", icon: Target },
                    { title: "Instant Support", desc: "Response within 60 mins", icon: Zap },
                    { title: "Pricing Promise", desc: "No hidden charges", icon: ShieldCheck },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: primaryColor }}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{item.title}</h4>
                        <p className="text-gray-400 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="mt-4 p-4 rounded-xl border flex items-center justify-between"
                  style={{
                    backgroundColor: hexToRgba(primaryColor, 0.1),
                    borderColor: hexToRgba(primaryColor, 0.3)
                  }}
                >
                  <span className="font-semibold text-sm" style={{ color: primaryColor }}>4.9/5 Average Rating</span>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)}
                  </div>
                </div>
              </div>
            </div>

            {/* Background Element behind card */}
            <div
              className="absolute -bottom-10 -right-10 w-full h-full border-2 rounded-3xl -z-10 translate-x-4 translate-y-4"
              style={{ borderColor: hexToRgba(primaryColor, 0.2) }}
            ></div>
          </div>

        </div>
      </div>

      {/* Floating Action Buttons used everywhere */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <button
          className="group relative p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-cyan-500/50 text-white border-2 border-transparent"
          style={{ backgroundColor: primaryColor }}
          onClick={() => {
            ConversionTracker.trackWhatsApp('', 'floating-whatsapp', 30);
            window.open(`https://wa.me/${phoneNumber.replace(/\s/g, "")}`);
          }}
          title="WhatsApp Us"
        >
          <MessageCircle size={28} className="drop-shadow-md" />
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">WhatsApp Us</span>
        </button>

        <button
          className="group relative p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-blue-500/50 text-white border-2 border-transparent"
          style={{ backgroundColor: primaryColor }}
          onClick={() => {
            ConversionTracker.trackCall(phoneNumber, 'floating-call', 50);
            window.open(`tel:${phoneNumber}`);
          }}
          title="Call Us"
        >
          <Phone size={28} className="drop-shadow-md" />
          {/* Static circle, no pulse */}
          <div className="absolute inset-0 rounded-full opacity-20 bg-white"></div>
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Call Us</span>
        </button>
      </div>

    </section>
  );
}
