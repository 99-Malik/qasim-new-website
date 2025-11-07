import Image from "next/image";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import { Users, Award, Clock, Shield, Star, CheckCircle, ArrowRight, Zap, Target, Cpu, Brain, Rocket, Sparkles } from "lucide-react";
import { getBrandColors, getBrandConfig } from "@/lib/brandConfig";

export default function AboutSection({ company }) {
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

  const stats = [
    { number: "10,000+", label: "Repairs Completed", icon: Brain, color: isBrandPage ? colors.text : "text-blue-400" },
    { number: "15+", label: "Years Experience", icon: Rocket, color: isBrandPage ? colors.text : "text-purple-400" },
    { number: "24/7", label: "Emergency Service", icon: Zap, color: isBrandPage ? colors.text : "text-yellow-400" },
    { number: "100%", label: "Success Rate", icon: Target, color: isBrandPage ? colors.text : "text-green-400" }
  ];

  const techValues = [
    {
      title: "Expert Repair",
      description: "Professional technicians that accurately diagnose and prevent appliance issues before they become major problems.",
      icon: Brain,
      tech: "Experts"
    },
    {
      title: "Quality Repair",
      description: "Proven repair methods using quality parts and professional techniques for reliable results.",
      icon: Cpu,
      tech: "Quality"
    },
    {
      title: "Fast Response",
      description: "Quick service delivery with our efficient scheduling and professional tracking systems.",
      icon: Zap,
      tech: "Fast"
    },
    {
      title: "Quality Service",
      description: "Personalized service experience with professional support and attention to detail.",
      icon: Users,
      tech: "Certified"
    }
  ];

  return (
    <section
      className={cn(
        "relative py-12 sm:py-16 lg:py-20 xl:py-32 overflow-hidden",
        isBrandPage ? colors.blob : "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      )}
      id="about"
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
            <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 border-2 border-white/20 rounded-full animate-spin"></div>
            <div className="absolute top-20 sm:top-40 right-16 sm:right-32 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 bg-gradient-to-r from-white/10 to-transparent rotate-45 animate-bounce"></div>
            <div className="absolute bottom-20 sm:bottom-32 left-1/4 sm:left-1/3 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 bg-white/5 rounded-full animate-ping"></div>
            <div className="absolute top-1/2 right-1/6 sm:right-1/4 w-6 sm:w-8 lg:w-12 h-6 sm:h-8 lg:h-12 border-2 border-white/30 rotate-12 animate-spin"></div>
            
            {/* Neural network pattern overlay - Hidden on mobile for performance */}
            <div className="absolute inset-0 opacity-5 hidden sm:block">
              <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0ibmV1cmFsIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0id2hpdGUiLz48Y2lyY2xlIGN4PSI4MCIgY3k9IjIwIiByPSIyIiBmaWxsPSJ3aGl0ZSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjIiIGZpbGw9IndoaXRlIi8+PGxpbmUgeDE9IjIwIiB5MT0iMjAiIHgyPSI1MCIgeTI9IjUwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEiLz48bGluZSB4MT0iODAiIHkxPSIyMCIgeDI9IjUwIiB5Mj0iNTAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9InVybCgjbmV1cmFsKSIvPjwvc3ZnPg==')]"></div>
            </div>
          </>
        )}
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Revolutionary Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md border border-white/30 shadow-2xl mb-6 sm:mb-8">
            <Brain className={cn("w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 mr-2 sm:mr-3 animate-pulse", isBrandPage ? "text-gray-700" : "text-white")} />
            <span className={cn("text-sm sm:text-base lg:text-lg font-bold", isBrandPage ? "text-gray-700" : "text-white")}>
              {isBrandPage ? `${company.toUpperCase()} SERVICE CENTER` : "Professional Service"}
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
              {isBrandPage ? "SERVICE CENTER" : "REPAIR SERVICE"}
            </span>
          </h2>

          <p className={cn("text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-light px-4", isBrandPage ? "text-gray-700" : "text-white")}>
            {isBrandPage 
              ? `Experience reliable ${company} appliance repair with our expert technicians, quality parts, and professional service that you can trust.`
              : "Experience reliable appliance repair with our expert technicians, quality parts, and professional service that you can trust."
            }
          </p>
        </div>

        {/* Revolutionary Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Left Content */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <h3 className={cn("text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight", isBrandPage ? "text-gray-700" : "text-white")}>
                Why Choose Our
                <span className={cn("block", colors.primary)}>
                  {isBrandPage ? `${company.toUpperCase()} Service?` : "Professional Service?"}
                </span>
              </h3>
              <p className={cn("text-base sm:text-lg lg:text-xl leading-relaxed", isBrandPage ? "text-gray-700" : "text-white")}>
                We provide reliable appliance repair with expert diagnostics, quality parts,
                and preventive maintenance that keeps your appliances running smoothly.
              </p>
            </div>

            {/* Tech Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {techValues.map((value, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:border-white/40 transition-all duration-500 group-hover:scale-105">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className={cn(
                          "flex-shrink-0 w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center",
                          colors.bg
                        )}>
                          <value.icon className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />
                        </div>
                          <h4 className={cn("text-base sm:text-lg font-bold", isBrandPage ? "text-gray-700" : "text-white")}>{value.title}</h4>
                      </div>
                      <span className={cn("text-xs font-semibold text-white px-3 sm:px-4 py-1 rounded-md flex-shrink-0", colors.bg)}>
                        {value.tech}
                      </span>
                    </div>
                    <p className={cn("text-xs sm:text-sm leading-relaxed", isBrandPage ? "text-gray-700" : "text-white")}>
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 sm:pt-8">
              <div className="relative group">
                <div className="absolute -inset-1 sm:-inset-2 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg bg-white/20"></div>
                <CallAndWhatsappButton company={company} />
              </div>
            </div>
          </div>

          {/* Right Content - Revolutionary Image */}
          <div className="relative">
            <div className="relative w-full h-80 sm:h-96 lg:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl sm:rounded-3xl backdrop-blur-sm border border-white/20 p-4 sm:p-6 lg:p-8">
                <Image
                  src="/about.webp"
                  alt="Professional Repair Service"
                  fill
                  className="object-cover rounded-xl sm:rounded-2xl shadow-2xl"
                />
              </div>

              {/* Floating Tech Stats */}
              <div className="absolute -top-4 sm:-top-6 lg:-top-8 -left-4 sm:-left-6 lg:-left-8 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-2xl border border-white/30">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className={cn("w-3 sm:w-4 h-3 sm:h-4 rounded-full", colors.bg)}></div>
                  <div>
                    <div className={cn("text-lg sm:text-xl lg:text-2xl font-semibold", isBrandPage ? "text-gray-700" : "text-white")}>15+ Years</div>
                    <div className={cn("text-xs sm:text-sm", isBrandPage ? "text-gray-700" : "text-white")}>Innovation</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 -right-4 sm:-right-6 lg:-right-8 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-2xl border border-white/30">
                <div className="text-center">
                  <div className={cn("text-xl sm:text-2xl lg:text-3xl font-semibold", isBrandPage ? "text-gray-700" : "text-white")}>10K+</div>
                  <div className={cn("text-xs sm:text-sm", isBrandPage ? "text-gray-700" : "text-white")}>Repairs Done</div>
                </div>
              </div>

              {/* Tech Overlay */}
              <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8">
                <div className={cn(
                  "px-2 sm:px-3 lg:px-4 py-2 sm:py-2 lg:py-2 rounded-md sm:rounded-md text-xs sm:text-sm font-semibold text-white shadow-lg backdrop-blur-sm",
                  colors.bg
                )}>
                  EXPERT SERVICE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Revolutionary Stats Section */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 xl:p-16 border border-white/20 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={cn(
                  "w-16 sm:w-18 lg:w-20 h-16 sm:h-18 lg:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500",
                  colors.bg
                )}>
                  <stat.icon className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 text-white" />
                </div>
                <div className={cn("text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-2 sm:mb-3", isBrandPage ? "text-gray-700" : "text-white")}>
                  {stat.number}
                </div>
                <div className={cn("font-semibold text-sm sm:text-base lg:text-lg", isBrandPage ? "text-gray-700" : "text-white")}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revolutionary Mission, Vision, Values */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="group relative">
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative text-center p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-500 group-hover:scale-105">
              <div className={cn(
                "w-16 sm:w-18 lg:w-20 h-16 sm:h-18 lg:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl sm:rounded-3xl flex items-center justify-center",
                colors.bg
              )}>
                <Rocket className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 text-white" />
              </div>
              <h3 className={cn("text-xl sm:text-2xl font-semibold mb-3 sm:mb-4", isBrandPage ? "text-gray-700" : "text-white")}>Our Mission</h3>
              <p className={cn("leading-relaxed text-sm sm:text-base", isBrandPage ? "text-gray-700" : "text-white")}>
                To provide reliable appliance repair with expert technicians that diagnose,
                prevent, and solve problems before they impact your daily life.
              </p>
            </div>
          </div>

          <div className={cn(
            "text-center p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-white shadow-2xl group relative",
            colors.bg
          )}>
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="w-16 sm:w-18 lg:w-20 h-16 sm:h-18 lg:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl sm:rounded-3xl bg-white/20 flex items-center justify-center">
                <Brain className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                To be the trusted leader in professional appliance repair service,
                setting new standards for quality, reliability, and customer satisfaction.
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative text-center p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-500 group-hover:scale-105">
              <div className={cn(
                "w-16 sm:w-18 lg:w-20 h-16 sm:h-18 lg:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl sm:rounded-3xl flex items-center justify-center",
                colors.bg
              )}>
                <Sparkles className="w-8 sm:w-9 lg:w-10 h-8 sm:h-9 lg:h-10 text-white" />
              </div>
              <h3 className={cn("text-xl sm:text-2xl font-semibold mb-3 sm:mb-4", isBrandPage ? "text-gray-700" : "text-white")}>Our Values</h3>
              <p className={cn("leading-relaxed text-sm sm:text-base", isBrandPage ? "text-gray-700" : "text-white")}>
                Quality, precision, and excellence drive everything we do.
                We maintain the highest standards in professional appliance repair service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}