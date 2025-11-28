"use client";

import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import { ArrowRight, Wrench, Clock, Star, Zap, Sparkles, Target, Award, Phone, MessageCircle } from "lucide-react";
import { getBrandColors, getBrandConfig } from "@/lib/brandConfig";
import { phoneNumber } from "@/lib/phoneNumber";
import { ConversionTracker } from "@/utils/conversionTracking";

export default function MainBanner({ company }) {
  const colors = getBrandColors(company);
  const brandConfig = company ? getBrandConfig(company) : null;
  const isBrandPage = !!company;
  
  // Helper to convert hex to rgba
  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Professional Background with Image */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gray-900 overflow-hidden">
          <img
            src="/dryer.jpeg"
            alt="Professional Appliance Repair Service"
            className="w-full h-full object-cover"
            style={{ 
              objectPosition: 'center',
              minWidth: '100%',
              minHeight: '100%',
              width: '100%',
              height: '100%'
            }}
          />
        </div>
        
        {/* Overlay with Brand Colors */}
        {isBrandPage && brandConfig ? (
          <>
            {/* Brand color overlay - refined for professional look */}
            <div 
              className="absolute inset-0" 
              style={{ 
                backgroundColor: hexToRgba(brandConfig.primary, company === "Bosch" || company === "LG" ? 0.12 : 0.22)
              }}
            ></div>
            
            {/* Subtle gradient overlay */}
            <div 
              className="absolute inset-0" 
              style={{ 
                backgroundImage: `linear-gradient(to bottom, ${hexToRgba(brandConfig.primary, company === "Bosch" || company === "LG" ? 0.08 : 0.15)}, transparent)`
              }}
            ></div>
            
            {/* Dark overlay for optimal text readability */}
            <div className="absolute inset-0 bg-black/35"></div>
            
            {/* Brand color accent line at top */}
            <div 
              className="absolute top-0 left-0 w-full h-1 z-10" 
              style={{ backgroundColor: brandConfig.primary }}
            ></div>
          </>
        ) : (
          <>
            {/* Home page overlay - optimized for text contrast */}
            <div className="absolute inset-0 bg-black/55"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-slate-800/30 to-slate-900/30"></div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
        <div className="text-center space-y-10 sm:space-y-12 lg:space-y-16">
          {/* Main Heading Section */}
          <div className="space-y-5 sm:space-y-6 lg:space-y-8">
              <h1 className={cn(
                "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight",
                "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
              )}>
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 sm:mt-3 font-semibold">
                  {company ? `${company.toUpperCase()} SERVICE CENTER` : "Home Appliance SERVICE CENTER"}
                </span>
              </h1>

              <p className={cn(
                "text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-normal px-4",
                "text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.2)]"
              )}>
                {company 
                  ? `Get Your ${company} appliances repair with our expert technicians, advanced diagnostic tools, and fast service delivery.`
                  : "Professional appliance repair with our expert technicians, advanced diagnostic tools, and fast service delivery."
                }
              </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 max-w-6xl mx-auto px-4">
            {[
              { 
                icon: Zap, 
                title: "Expert Technicians", 
                desc: company 
                  ? `Specialized ${company} repair professionals` 
                  : "Certified professionals with years of experience" 
              },
              { 
                icon: Target, 
                title: "Genuine Parts", 
                desc: company 
                  ? `Original ${company} replacement parts available` 
                  : "Original manufacturer parts available" 
              },
              { 
                icon: Award, 
                title: "Warranty Protection", 
                desc: company 
                  ? `${company} warranty maintained with service` 
                  : "Manufacturer warranty maintained with service" 
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                {isBrandPage ? (
                  <div className={cn(
                    "relative rounded-xl p-8 border transition-all duration-300 ease-out",
                    "bg-white border-gray-200/50 hover:border-gray-300",
                    "shadow-md hover:shadow-xl hover:-translate-y-1"
                  )}>
                    <div className={cn(
                      "w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center",
                      "transition-transform duration-300 group-hover:scale-110",
                      colors.bg
                    )}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-center text-gray-600 leading-relaxed">{feature.desc}</p>
                  </div>
                ) : (
                  <div className={cn(
                    "relative rounded-xl p-8 border backdrop-blur-md transition-all duration-300 ease-out",
                    "bg-white/10 border-white/20 hover:border-white/30",
                    "shadow-lg hover:shadow-xl hover:-translate-y-1"
                  )}>
                    <div className={cn(
                      "w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center",
                      "transition-transform duration-300 group-hover:scale-110",
                      colors.bg
                    )}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>
                    <p className="text-sm text-white/90 text-center leading-relaxed">{feature.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="space-y-8 sm:space-y-10">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center px-4">
              <div className="w-full sm:w-auto">
                <CallAndWhatsappButton company={company} />
              </div>
              
              <button 
                className={cn(
                  "group relative w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5",
                  "font-medium text-base sm:text-lg rounded-xl",
                  "transition-all duration-300 ease-out",
                  "hover:shadow-xl hover:-translate-y-0.5",
                  isBrandPage 
                    ? cn(
                        "bg-white border-2 text-gray-900 hover:bg-gray-50",
                        "shadow-lg",
                        colors.border,
                        "hover:border-gray-300"
                      )
                    : "bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/40"
                )}
                onClick={() => {
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Learn More
                  <ArrowRight className={cn(
                    "ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1",
                    isBrandPage ? "text-gray-900" : "text-white"
                  )} />
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 px-4">
              <div className={cn(
                "flex items-center gap-2.5 px-5 py-2.5 rounded-full",
                "backdrop-blur-md border",
                isBrandPage 
                  ? "bg-white/90 border-gray-200/50"
                  : "bg-white/10 border-white/20"
              )}>
                <Clock className={cn(
                  "w-4 h-4",
                  isBrandPage ? colors.text : "text-blue-400"
                )} />
                <span className={cn(
                  "text-sm font-medium",
                  isBrandPage ? "text-gray-700" : "text-white"
                )}>24/7 Emergency Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Call and WhatsApp Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* WhatsApp Button */}
        <button
          className={cn(
            "group relative p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-3xl",
            "text-white",
            colors.bg,
            colors.border,
            "border-2"
          )}
          onClick={() => {
            ConversionTracker.trackWhatsApp('', 'floating-whatsapp', 30);
            window.open(`https://wa.me/${phoneNumber.replace(/\s/g, "")}`);
          }}
          title="WhatsApp Us"
        >
          <MessageCircle size={24} className="group-hover:scale-110 transition-transform duration-300" />
          
          {/* Pulse animation */}
          <div className={cn(
            "absolute inset-0 rounded-full animate-ping opacity-20",
            colors.bg
          )}></div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            WhatsApp Us
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
          </div>
        </button>

        {/* Call Button */}
        <button
          className={cn(
            "group relative p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-3xl",
            "text-white",
            colors.bg,
            colors.border,
            "border-2"
          )}
          onClick={() => {
            ConversionTracker.trackCall(phoneNumber, 'floating-call', 50);
            window.open(`tel:${phoneNumber}`);
          }}
          title="Call Us"
        >
          <Phone size={24} className="group-hover:scale-110 transition-transform duration-300" />
          
          {/* Pulse animation */}
          <div className={cn(
            "absolute inset-0 rounded-full animate-ping opacity-20",
            colors.bg
          )}></div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Call Us
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
          </div>
        </button>
      </div>

    </section>
  );
}
