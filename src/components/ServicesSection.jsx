"use client";

import { cn } from "@/lib/utils";
import ServiceCallButtons from "./buttons/ServiceCallButtons";
import { Wrench, Clock, Shield, Star, ArrowRight, CheckCircle, Zap, Target, Award, Sparkles, Cpu, Gauge } from "lucide-react";
import { useState } from "react";
import { getBrandColors, getBrandConfig } from "@/lib/brandConfig";

export default function ServicesSection({ company }) {
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

  const services = [
        {
          title: "Washing Machine Repair",
          image: "/washing-repair.webp",
          description: "Professional washing machine repair with expert diagnostics and quality parts.",
          features: ["Expert Diagnostics", "Quality Repair", "Fast Service", "Genuine Parts"],
          commonIssues: [
            "Machine not starting", "Not spinning", "Water leakage", "Excessive noise",
            "Error codes", "Door problems", "Drainage issues", "Electrical faults"
          ],
          icon: Cpu,
          techLevel: "Expert Service"
        },
        {
          title: "Dryer Repair",
          image: "/dryer-repair.jpg",
          description: "Reliable dryer repair solutions with professional maintenance and energy efficiency.",
          features: ["Professional Service", "Energy Efficiency", "Quality Parts", "Expert Repair"],
          commonIssues: [
            "Not heating", "Not tumbling", "Ventilation problems", "Timer issues",
            "Belt replacement", "Motor problems", "Control panel", "Safety switches"
          ],
          icon: Gauge,
          techLevel: "Professional"
        },
        {
          title: "Refrigerator Repair",
          image: "/fridge-repair.jpg",
          description: "Expert refrigerator repair with temperature control and cooling system maintenance.",
          features: ["Temperature Control", "Cooling System", "Energy Efficiency", "Defrost Service"],
          commonIssues: [
            "Not cooling", "Temperature issues", "Ice maker problems", "Water leakage",
            "Strange noises", "Door seal issues", "Compressor problems", "Defrost issues"
          ],
          icon: Target,
          techLevel: "Expert Repair"
        },
        {
          title: "Oven Repair",
          image: "/oven-repair.jpeg",
          description: "Professional oven repair with temperature calibration and safety features.",
          features: ["Temperature Calibration", "Safety Checks", "Control Panel", "Cleaning Service"],
          commonIssues: [
            "Not heating", "Uneven cooking", "Temperature problems", "Door issues",
            "Control panel", "Self-cleaning", "Gas problems", "Electrical issues"
          ],
          icon: Zap,
          techLevel: "Professional"
        },
        {
          title: "Dishwasher Repair",
          image: "/dishwasher-repair.jpg",
          description: "Reliable dishwasher repair with water system maintenance and cleaning optimization.",
          features: ["Water System", "Cleaning Cycles", "Filter Service", "Maintenance"],
          commonIssues: [
            "Not cleaning", "Water not draining", "Leaking", "Noise problems",
            "Door issues", "Control panel", "Spray arm", "Filter cleaning"
          ],
          icon: Sparkles,
          techLevel: "Expert Service"
        },
        {
          title: "Stove / Cooker Repair",
          image: "/stove-repair.jpg",
          description: "Professional stove repair with ignition service and temperature control maintenance.",
          features: ["Ignition Service", "Temperature Control", "Safety Checks", "Gas Service"],
          commonIssues: [
            "Burners not working", "Ignition issues", "Temperature problems", "Gas leaks",
            "Electrical faults", "Control knobs", "Oven integration", "Safety valves"
          ],
          icon: Award,
          techLevel: "Safety First"
        }
  ];

  // Add TV repair for specific companies
  if (company === "Bosch" || company === "Siemens") {
    services.push(        {
          title: "TV Repair",
          image: "/tv-repair.jpeg",
          description: "Professional TV repair with expert diagnostics and display optimization service.",
          features: ["Expert Diagnostics", "Display Service", "Connectivity Fix", "Software Updates"],
          commonIssues: [
            "No picture", "No sound", "Power issues", "Remote problems",
            "HDMI issues", "Wi-Fi connectivity", "Screen problems", "Software updates"
          ],
          icon: Cpu,
          techLevel: "Expert Service"
        });
  }

  return (
    <section
      id="services"
      className={cn(
        "relative py-12 sm:py-16 lg:py-20 xl:py-32 overflow-hidden",
        isBrandPage ? colors.blob : "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      )}
    >
      {/* Background */}
      <div className="absolute inset-0">
        {isBrandPage && brandConfig ? (
          <>
            {/* Professional neutral base background */}
            <div 
              className="absolute inset-0" 
              style={{ backgroundColor: company === "Bosch" || company === "LG" ? '#FFFFFF' : (brandConfig.accent || '#F0F4F9') }}
            ></div>
            {/* Brand-colored subtle gradient - reduced opacity for professional look */}
            <div 
              className="absolute inset-0" 
              style={{ 
                backgroundImage: `linear-gradient(to right, ${hexToRgba(brandConfig.primary, company === "Bosch" || company === "LG" ? 0.05 : 0.2)}, ${hexToRgba(brandConfig.primary, 0.02)})`
              }}
            ></div>
            {/* Additional brand color tint - very subtle for professional look */}
            <div 
              className="absolute inset-0" 
              style={{ backgroundColor: hexToRgba(brandConfig.primary, company === "Bosch" || company === "LG" ? 0.02 : 0.1) }}
            ></div>
          </>
        ) : (
          <>
            {/* Animated mesh gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse"></div>
          </>
        )}
        
        {!isBrandPage && (
          <>
            {/* Floating tech elements - Responsive positioning */}
            <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 border-2 border-white/20 rounded-full animate-spin"></div>
            <div className="absolute top-20 sm:top-40 right-16 sm:right-32 w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-r from-white/10 to-transparent rotate-45 animate-bounce"></div>
            <div className="absolute bottom-20 sm:bottom-32 left-1/4 sm:left-1/3 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-white/5 rounded-full animate-ping"></div>
            
            {/* Circuit pattern overlay - Hidden on mobile for performance */}
            <div className="absolute inset-0 opacity-5 hidden sm:block">
              <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY2lyY3VpdCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0xMCAxMGg4MHY4MEgxMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0yMCAyMGg2MHY2MEgyMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9InVybCgjY2lyY3VpdCkiLz48L3N2Zz4=')]"></div>
            </div>
          </>
        )}
      </div>

      <div className="relative max-w-7xl  mx-auto px-3 sm:px-4 lg:px-8">
        {/* Revolutionary Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center  px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md border border-white/30 shadow-2xl mb-6 sm:mb-8">
            <Cpu className={cn("w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 mr-2 sm:mr-3 animate-pulse", isBrandPage ? "text-gray-700" : "text-white")} />
            <span className={cn("text-sm sm:text-base lg:text-lg font-bold", isBrandPage ? "text-gray-700" : "text-white")}>
              {isBrandPage ? `${company.toUpperCase()} REPAIR SERVICE CENTER AE` : "Repair Service Center AE"}
            </span>
          </div>

          <h2 className={cn(
            "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-6 sm:mb-8 leading-tight sm:leading-none",
            isBrandPage ? "text-gray-700" : "text-white"
          )}>
            <span className={cn(
              "block",
              isBrandPage ? colors.text : "bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
            )}>
              {isBrandPage ? company.toUpperCase() : "PROFESSIONAL"}
            </span>
            <span className={cn("block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl", colors.primary)}>
              {isBrandPage ? "REPAIR SERVICE CENTER AE" : "REPAIR SERVICE CENTER AE"}
            </span>
          </h2>

          <p className={cn("text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-light px-4", isBrandPage ? "text-gray-700" : "text-white")}>
            {isBrandPage
              ? `Experience reliable ${company} appliance repair with our expert technicians, quality parts, and fast service delivery.`
              : "Experience reliable appliance repair with our expert technicians, quality parts, and fast service delivery."
            }
          </p>
        </div>

        {/* Revolutionary Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {services.map((service, index) => (
            <RevolutionaryServiceCard
              key={index}
              service={service}
              company={company}
              colors={colors}
              index={index}
              isBrandPage={isBrandPage}
              brandConfig={brandConfig}
            />
          ))}
        </div>

        {/* Revolutionary Bottom CTA */}
        <div className="text-center">
          <div className="relative group">
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl sm:rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl py-6 sm:p-8 lg:p-12 border border-white/20 shadow-2xl">
                <h3 className={cn("text-lg px-2 sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6", isBrandPage ? "text-gray-700" : "text-white")}>
                {isBrandPage ? `Need ${company.toUpperCase()} Repair Service?` : "Need Professional Repair Service?"}
              </h3>
              <p className={cn("text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto px-4", isBrandPage ? "text-gray-700" : "text-white")}>
                {isBrandPage
                  ? `We specialize in ${company} appliance repair with expert technicians. Experience reliable repair service today.`
                  : "We repair all major appliance brands with expert technicians. Experience reliable repair service today."
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
                <div className="w-auto">
                  <ServiceCallButtons company={company} />
                </div>
                <button className="group relative w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-white to-gray-100 text-gray-900 font-semibold text-md sm:text-xl rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                  <span className="relative z-10 flex items-center justify-center">
                        Learn More
                    <ArrowRight className="ml-2 sm:ml-3 w-5 sm:w-6 h-5 sm:h-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                  {isBrandPage ? (
                    <div className={cn("absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500", colors.gradientFull)}></div>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const RevolutionaryServiceCard = ({ service, company, colors, index, isBrandPage, brandConfig }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden border border-white/20 hover:border-white/40 transform hover:scale-105 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Revolutionary Image Section */}
      <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Tech Level Badge */}
        <div className="absolute top-3 sm:top-4 lg:top-6 right-3 sm:right-4 lg:right-6">
          <div className={cn(
            "px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-md text-xs sm:text-sm font-semibold text-white shadow-lg backdrop-blur-sm",
            colors.bg
          )}>
            {service.techLevel}
          </div>
        </div>

        {/* Icon Overlay */}
        <div className="absolute top-3 sm:top-4 lg:top-6 left-3 sm:left-4 lg:left-6">
          <div className={cn(
            "w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-lg",
            colors.bg
          )}>
            <service.icon className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />
          </div>
        </div>

        {/* Hover Tech Overlay */}
        <div className={cn(
          "absolute inset-0 flex items-center justify-center transition-all duration-500",
          isHovered ? "opacity-100 bg-black/60" : "opacity-0"
        )}>
          <div className="text-center">
            <div className={cn(
              "w-16 sm:w-18 lg:w-20 h-16 sm:h-18 lg:h-20 mx-auto mb-3 sm:mb-4 rounded-2xl sm:rounded-3xl flex items-center justify-center",
              colors.bg
            )}>
              <service.icon className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 text-white animate-pulse" />
            </div>
            <div className="text-white font-semibold text-lg sm:text-xl mb-1 sm:mb-2">EXPERT SERVICE</div>
            <div className="text-white/80 text-xs sm:text-sm">Professional Diagnostics Ready</div>
          </div>
        </div>
      </div>

      {/* Revolutionary Content Section */}
      <div className="p-4 sm:p-6 lg:p-8">
        <h3 className={cn("text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 transition-colors", isBrandPage ? "text-gray-700 group-hover:text-gray-600" : "text-white group-hover:text-gray-200")}>
          {service.title}
        </h3>

        <p className={cn("mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base lg:text-lg", isBrandPage ? "text-gray-700" : "text-white")}>
          {service.description}
        </p>

        {/* Tech Features */}
        <div className="mb-4 sm:mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {service.features.map((feature, featureIndex) => (
              <div
                key={featureIndex}
                className="flex items-center space-x-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <CheckCircle className={cn("w-3 sm:w-4 h-3 sm:h-4 flex-shrink-0", isBrandPage ? "text-gray-700" : "text-white")} />
                <span className={cn("text-xs sm:text-sm font-semibold", isBrandPage ? "text-gray-700" : "text-white")}>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Issues Preview */}
        <div className="mb-6 sm:mb-8">
          <h4 className={cn("text-xs sm:text-sm font-bold mb-2 sm:mb-3 uppercase tracking-wider", isBrandPage ? "text-gray-700" : "text-white")}>Common Issues:</h4>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {service.commonIssues.slice(0, 3).map((issue, issueIndex) => (
              <span
                key={issueIndex}
                className={cn("text-xs bg-white/10 px-2 sm:px-3 py-2 rounded-md border", colors.border, isBrandPage ? "text-gray-700" : "text-white")}
                style={isBrandPage && brandConfig ? { borderColor: brandConfig.primary } : {}}
              >
                {issue}
              </span>
            ))}
            {service.commonIssues.length > 3 && (
              <span className={cn("text-xs px-2 sm:px-3 py-1", isBrandPage ? "text-gray-700" : "text-white")}>
                +{service.commonIssues.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Revolutionary CTA Button */}
        <div className="pt-4 sm:pt-6 border-t border-white/20">
          <div className="relative group/btn">
            <div className="absolute -inset-1 rounded-xl sm:rounded-2xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 blur-sm bg-white/20"></div>
        <ServiceCallButtons company={company} />
          </div>
        </div>
      </div>

      {/* Revolutionary Hover Effect Border */}
      <div className={cn(
        "absolute inset-0 rounded-2xl sm:rounded-3xl border-2 transition-all duration-500",
        colors.border,
        isHovered ? "opacity-100 shadow-2xl" : "opacity-0"
      )} />

      {/* Animated Background Glow */}
      <div className="absolute -inset-2 sm:-inset-4 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl -z-10 bg-white/20"></div>
    </div>
  );
};
