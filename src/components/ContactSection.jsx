"use client";

import { cn } from "@/lib/utils";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import { Phone, Mail, MapPin, Clock, MessageCircle, Star, ArrowRight, Zap, Cpu, Brain, Rocket, Sparkles, Target } from "lucide-react";
import { ConversionTracker } from "@/utils/conversionTracking";
import { phoneNumber } from "@/lib/phoneNumber";
import { getBrandColors, getBrandConfig } from "@/lib/brandConfig";

export default function ContactSection({ company }) {
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

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our expert technicians",
      value: phoneNumber,
      action: "Call Now",
      tech: "Phone"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Support",
      description: "Quick messaging with our team",
      value: phoneNumber,
      action: "Start Chat",
      tech: "WhatsApp"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM", status: "Active" },
    { day: "Saturday", hours: "9:00 AM - 6:00 PM", status: "Peak" },
    { day: "Sunday", hours: "Emergency Service", status: "Critical" }
  ];

  return (
    <section
      className={cn(
        "relative py-12 sm:py-16 lg:py-20 xl:py-32 overflow-hidden",
        isBrandPage ? colors.blob : "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      )}
      id="contact"
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
          </>
        )}
        
        {!isBrandPage && (
          <>
            {/* Floating tech elements - Responsive positioning */}
            <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 border-2 border-white/20 rounded-full animate-spin"></div>
            <div className="absolute top-20 sm:top-40 right-16 sm:right-32 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 bg-gradient-to-r from-white/10 to-transparent rotate-45 animate-bounce"></div>
            <div className="absolute bottom-20 sm:bottom-32 left-1/4 sm:left-1/3 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 bg-white/5 rounded-full animate-ping"></div>
            <div className="absolute top-1/2 right-1/6 sm:right-1/4 w-6 sm:w-8 lg:w-12 h-6 sm:h-8 lg:h-12 border-2 border-white/30 rotate-12 animate-spin"></div>
            
            {/* Circuit pattern overlay - Hidden on mobile for performance */}
            <div className="absolute inset-0 opacity-10 hidden sm:block">
              <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY2lyY3VpdCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0xMCAxMGg4MHY4MEgxMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0yMCAyMGg2MHY2MEgyMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9InVybCgjY2lyY3VpdCkiLz48L3N2Zz4=')]"></div>
            </div>
          </>
        )}
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Revolutionary Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md border border-white/30 shadow-2xl mb-6 sm:mb-8">
            <Cpu className={cn("w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 mr-2 sm:mr-3 animate-pulse", isBrandPage ? "text-gray-700" : "text-white")} />
            <span className={cn("text-sm sm:text-base lg:text-lg font-bold", isBrandPage ? "text-gray-700" : "text-white")}>
              {isBrandPage ? `${company.toUpperCase()} CONTACT` : "Professional Contact"}
            </span>
          </div>

          <h2 className={cn(
            "text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-6 sm:mb-8 leading-tight sm:leading-none",
            isBrandPage ? "text-gray-700" : "text-white"
          )}>
            <span className={cn(
              "block",
              isBrandPage ? colors.text : "bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
            )}>
              {isBrandPage ? `CONTACT ${company.toUpperCase()}` : "CONTACT OUR EXPERTS"}
            </span>
          </h2>

          <p className={cn("text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-light px-4", isBrandPage ? "text-gray-700" : "text-white")}>
            {isBrandPage
              ? `Get in touch with our ${company} repair team for expert diagnostics, convenient scheduling, and fast service delivery.`
              : "Get in touch with our professional repair team for expert diagnostics, convenient scheduling, and fast service delivery."
            }
          </p>
        </div>

        {/* Revolutionary Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-start">
          {/* Left Side - Contact Methods */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            <div>
              <h3 className={cn("text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6", isBrandPage ? "text-gray-700" : "text-white")}>
                Multiple Contact Methods
              </h3>
              <p className={cn("text-base sm:text-lg lg:text-xl leading-relaxed", isBrandPage ? "text-gray-700" : "text-white")}>
                {isBrandPage
                  ? `Choose from our ${company} contact methods. Each channel is designed for quick, reliable communication with our expert team.`
                  : "Choose from our professional contact methods. Each channel is designed for quick, reliable communication with our expert team."
                }
              </p>
            </div>

            {/* Revolutionary Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:border-white/40 transition-all duration-700 hover:scale-105 hover:-translate-y-2"
                >
                  <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative">
                    <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                      <div className={cn(
                        "flex-shrink-0 w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center",
                        colors.bg
                      )}>
                        <method.icon className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className={cn("text-lg sm:text-xl font-semibold", isBrandPage ? "text-gray-700" : "text-white")}>{method.title}</h4>
                          <span className={cn("text-xs font-semibold text-white px-2 py-1 rounded-md", colors.bg)}>
                            {method.tech}
              </span>
                        </div>
                        <p className={cn("text-xs sm:text-sm mb-3 sm:mb-4", isBrandPage ? "text-gray-700" : "text-white")}>
                          {method.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 sm:space-y-4">
                      <p className={cn("font-semibold text-sm sm:text-base lg:text-lg", isBrandPage ? "text-gray-700" : "text-white")}>
                        {method.value}
                      </p>
                      <button 
                        className={cn(
                          "w-full inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-white font-semibold text-sm sm:text-base lg:text-lg transition-all duration-500 group-hover:scale-105",
                          colors.bg
                        )}
                        onClick={() => {
                          if (method.tech === "Phone") {
                            ConversionTracker.trackCall(phoneNumber, 'contact-section', 50);
                            window.open(`tel:${phoneNumber}`);
                          } else if (method.tech === "WhatsApp") {
                            ConversionTracker.trackWhatsApp('', 'contact-section', 30);
                            window.open(`https://wa.me/${phoneNumber.replace(/\s/g, "")}`);
                          } else if (method.tech === "Email") {
                            window.open(`mailto:${method.value}`);
                          } else if (method.tech === "Location") {
                            // You can add location functionality here
                            console.log("Location clicked");
                          }
                        }}
                      >
                        {method.action}
                        <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Revolutionary CTA */}
            <div className="pt-6 sm:pt-8">
              <div className="relative group">
                <div className="absolute -inset-2 sm:-inset-4 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl bg-white/20"></div>
                <CallAndWhatsappButton company={company} />
              </div>
            </div>
          </div>

          {/* Right Side - Info & Hours */}
          <div className="space-y-6 sm:space-y-8">
            {/* AI Service Hours */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
                <div className={cn(
                  "w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center",
                  colors.bg
                )}>
                  <Clock className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />
                </div>
                <h3 className={cn("text-xl sm:text-2xl lg:text-3xl font-semibold", isBrandPage ? "text-gray-700" : "text-white")}>Service Hours</h3>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-3 sm:py-4 border-b border-white/10 last:border-b-0">
                    <div>
                      <span className={cn("font-bold text-sm sm:text-base lg:text-lg", isBrandPage ? "text-gray-700" : "text-white")}>{schedule.day}</span>
                      <div className={cn("text-xs sm:text-sm", isBrandPage ? "text-gray-700" : "text-white")}>{schedule.hours}</div>
                    </div>
                    <div className={cn(
                      "px-3 sm:px-4 py-1 sm:py-2 rounded-md text-xs sm:text-sm font-bold text-white",
                      colors.bg
                    )}>
                      {schedule.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency AI Service */}
            <div className={cn(
              "rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-2xl group relative",
              colors.bg
            )}>
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <Star className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Emergency Service</h3>
                </div>
                <p className="text-white/90 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg">
                  Critical appliance failure? Our emergency service responds instantly,
                  providing expert diagnostics and dispatching our professional repair teams.
                </p>
                <button 
                  className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-all duration-500 transform hover:scale-105"
                  onClick={() => {
                    // Track the conversion
                    ConversionTracker.trackCall(phoneNumber, 'emergency-service', 75);
                    // Open phone dialer
                    window.open(`tel:${phoneNumber}`);
                  }}
                >
                  Call Emergency Service
                </button>
              </div>
            </div>

            {/* Service Coverage */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <MapPin className={cn("w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8", isBrandPage ? "text-gray-700" : "text-white")} />
                <h3 className={cn("text-xl sm:text-2xl lg:text-3xl font-semibold", isBrandPage ? "text-gray-700" : "text-white")}>Service Coverage</h3>
              </div>
              <p className={cn("mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg", isBrandPage ? "text-gray-700" : "text-white")}>
                Our professional service network covers the entire metropolitan area
                with reliable tracking and quick response capabilities.
              </p>
              <div className={cn("grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm", isBrandPage ? "text-gray-700" : "text-white")}>
                <div className="flex items-center space-x-2">
                  <div className={cn("w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full", colors.bg)}></div>
                  <span>Downtown Area</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={cn("w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full", colors.bg)}></div>
                  <span>Suburban Network</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={cn("w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full", colors.bg)}></div>
                  <span>Industrial Sector</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={cn("w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full", colors.bg)}></div>
                  <span>Residential Grid</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Revolutionary Bottom CTA */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="relative group">
            <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl py-8 px-4 sm:p-10 lg:p-12 xl:p-16 border border-white/20 shadow-2xl">
              <h3 className={cn("text-lg sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4 sm:mb-6", isBrandPage ? "text-gray-700" : "text-white")}>
                Ready to Get Started?
              </h3>
              <p className={cn("text-base sm:text-lg lg:text-xl xl:text-2xl mb-8 sm:mb-10 lg:mb-12 text-left px-4", isBrandPage ? "text-gray-700" : "text-white")}>
                {isBrandPage
                  ? `Don't let broken ${company} appliances disrupt your day. Contact our repair team today and experience reliable ${company} appliance repair service.`
                  : "Don't let broken appliances disrupt your day. Contact our professional repair team today and experience reliable appliance repair service."
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center px-4">
                <div className="relative group/btn">
                  <div className="absolute -inset-1 sm:-inset-2 rounded-xl sm:rounded-2xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 blur-lg bg-white/20"></div>
          <CallAndWhatsappButton company={company} />
                </div>
                <button 
                  className="group relative px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-white to-gray-100 text-gray-900 font-semibold text-md rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                  onClick={() => {
                    // Track the conversion
                    ConversionTracker.trackCall(phoneNumber, 'contact-our-team', 50);
                    // Open phone dialer
                    window.open(`tel:${phoneNumber}`);
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Contact Our Team
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
