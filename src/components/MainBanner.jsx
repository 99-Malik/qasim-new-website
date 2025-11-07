"use client";

import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import { ArrowRight, Wrench, Clock, Shield, Star, Zap, Sparkles, Target, Award } from "lucide-react";
import { getBrandColors, getBrandConfig } from "@/lib/brandConfig";

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
      {/* Elegant Background */}
      <div className="absolute inset-0 z-0">
        {isBrandPage && brandConfig ? (
          <>
            {/* Professional neutral base background */}
            <div 
              className="absolute inset-0" 
              style={{ backgroundColor: company === "Bosch" || company === "LG" ? '#FFFFFF' : (brandConfig.accent || '#F0F4F9') }}
            ></div>
            
            {/* Subtle brand color gradient overlay - reduced opacity for professional look */}
            <div 
              className="absolute inset-0" 
              style={{ 
                backgroundImage: `linear-gradient(to bottom, ${hexToRgba(brandConfig.primary, company === "Bosch" || company === "LG" ? 0.05 : 0.2)}, ${hexToRgba(brandConfig.primary, 0.02)})`
              }}
            ></div>
            
            {/* Additional brand color tint - very subtle for professional look */}
            <div 
              className="absolute inset-0" 
              style={{ backgroundColor: hexToRgba(brandConfig.primary, company === "Bosch" || company === "LG" ? 0.02 : 0.1) }}
            ></div>
            
            {/* Elegant brand color accent line at top */}
            <div 
              className="absolute top-0 left-0 w-full h-0.5" 
              style={{ backgroundColor: brandConfig.primary }}
            ></div>
          </>
        ) : (
          <>
            {/* Home page elegant gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-slate-900/10"></div>
            
            {/* Subtle animated elements - minimal */}
            <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center space-y-8 sm:space-y-12 pt-10">
          {/* Elegant Badge */}
          {/* {isBrandPage ? (
            <div className={cn("inline-flex items-center px-5 sm:px-7 lg:px-9 py-2.5 sm:py-3.5 rounded-full border", colors.border, colors.light)}>
              <Sparkles className={cn("w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 mr-2 sm:mr-3", colors.text)} />
              <span className={cn("text-sm sm:text-base lg:text-lg font-medium", colors.text)}>Trusted Professional Service</span>
            </div>
          ) : (
            <div className="inline-flex items-center px-5 sm:px-7 lg:px-9 py-2.5 sm:py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              <Sparkles className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-yellow-400 mr-2 sm:mr-3" />
              <span className="text-sm sm:text-base lg:text-lg font-semibold text-white">#1 Trusted Repair Service</span>
            </div>
          )} */}

          {/* Elegant Main Heading */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              <h1 className={cn(
                "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold leading-tight sm:leading-none tracking-tight",
                isBrandPage ? "text-gray-700" : "text-white"
              )}>
              
                <span className={cn(
                  "block text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mt-3 sm:mt-4 font-semibold",
                  isBrandPage ? "text-gray-700" : "text-white"
                )}>
                  {company ? `${company.toUpperCase()} SERVICE CENTER` : "Home Appliance SERVICE CENTER"}
                </span>
                
              </h1>

              <p className={cn(
                "text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light px-4",
                isBrandPage ? "text-gray-700" : "text-white"
              )}>
                Experience reliable appliance repair with our expert technicians,
                advanced diagnostic tools, and fast service delivery.
              </p>
          </div>

          {/* Elegant Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto px-4">
            {[
              { icon: Zap, title: "Expert Diagnostics", desc: "Professional problem detection" },
              { icon: Target, title: "Quality Repair", desc: "99.9% success rate" },
              { icon: Award, title: "Premium Service", desc: "Reliable experience" }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                {isBrandPage ? (
                  <div className={cn(
                    "relative rounded-lg sm:rounded-xl p-6 sm:p-8 border transition-all duration-300 group-hover:shadow-md",
                    "bg-white border-gray-100 hover:border-gray-200"
                  )}>
                    <div className={cn("w-14 sm:w-16 h-14 sm:h-16 mx-auto mb-5 rounded-lg flex items-center justify-center transition-all duration-300", colors.bg)}>
                      <feature.icon className="w-7 sm:w-8 h-7 sm:h-8 text-white" />
                    </div>
                    <h3 className={cn("text-lg sm:text-xl font-semibold mb-2 text-center", "text-gray-700")}>{feature.title}</h3>
                    <p className={cn("text-sm sm:text-base text-center", "text-gray-700")}>{feature.desc}</p>
                  </div>
                ) : (
                  <>
                    <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-white/40 transition-all duration-500 group-hover:scale-105">
                      <div className={cn("w-14 sm:w-16 h-14 sm:h-16 mx-auto mb-5 rounded-xl flex items-center justify-center", colors.bg)}>
                        <feature.icon className="w-7 sm:w-8 h-7 sm:h-8 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 text-center">{feature.title}</h3>
                      <p className="text-sm sm:text-base text-white text-center">{feature.desc}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Elegant CTA Section */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <div className="relative group w-full sm:w-auto">
                <CallAndWhatsappButton company={company} />
              </div>
              
              <button 
                className={cn(
                  "group relative w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 font-medium text-lg sm:text-xl rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-md",
                  isBrandPage 
                    ? cn("bg-white border text-gray-700 hover:border-gray-300", colors.border)
                    : "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:shadow-xl"
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
                    "ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1",
                    isBrandPage ? "text-gray-700" : "text-white"
                  )} />
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className={cn(
              "flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-10 px-4",
              isBrandPage ? "text-gray-700" : "text-white"
            )}>
              <div className="flex items-center space-x-2">
                <Shield className={cn("w-4 sm:w-5 h-4 sm:h-5", isBrandPage ? colors.text : "text-green-400")} />
                <span className={cn("text-sm sm:text-base font-normal", isBrandPage ? "text-gray-700" : "text-white")}>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className={cn("w-4 sm:w-5 h-4 sm:h-5", isBrandPage ? colors.text : "text-blue-400")} />
                <span className={cn("text-sm sm:text-base font-normal", isBrandPage ? "text-gray-700" : "text-white")}>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className={cn("w-4 sm:w-5 h-4 sm:h-5", isBrandPage ? colors.text : "text-yellow-400")} />
                <span className={cn("text-sm sm:text-base font-normal", isBrandPage ? "text-gray-700" : "text-white")}>5-Star Rated</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
