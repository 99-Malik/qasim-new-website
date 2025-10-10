import Image from "next/image";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import { Users, Award, Clock, Shield, Star, CheckCircle, ArrowRight, Zap, Target, Cpu, Brain, Rocket, Sparkles } from "lucide-react";

export default function AboutSection({ company }) {
  const getCompanyColors = () => {
    switch (company) {
      case "Siemens":
        return {
          primary: "text-siemensPrimary",
          bg: "bg-siemensPrimary",
          border: "border-siemensPrimary",
          gradient: "from-siemensPrimary/10 to-siemensPrimary/5"
        };
      case "Bosch":
        return {
          primary: "text-boschPrimary",
          bg: "bg-boschPrimary",
          border: "border-boschPrimary",
          gradient: "from-boschPrimary/10 to-boschPrimary/5"
        };
      case "Samsung":
        return {
          primary: "text-samsungPrimary",
          bg: "bg-samsungPrimary",
          border: "border-samsungPrimary",
          gradient: "from-samsungPrimary/10 to-samsungPrimary/5"
        };
      case "LG":
        return {
          primary: "text-lgPrimary",
          bg: "bg-lgPrimary",
          border: "border-lgPrimary",
          gradient: "from-lgPrimary/10 to-lgPrimary/5"
        };
      default:
        return {
          primary: "text-primary",
          bg: "bg-primary",
          border: "border-primary",
          gradient: "from-primary/10 to-primary/5"
        };
    }
  };

  const colors = getCompanyColors();

  const stats = [
    { number: "10,000+", label: "Repairs Completed", icon: Brain, color: "text-blue-400" },
    { number: "15+", label: "Years Experience", icon: Rocket, color: "text-purple-400" },
    { number: "24/7", label: "Emergency Service", icon: Zap, color: "text-yellow-400" },
    { number: "100%", label: "Success Rate", icon: Target, color: "text-green-400" }
  ];

  const techValues = [
    {
      title: "Expert Diagnostics",
      description: "Professional technicians that accurately diagnose and prevent appliance issues before they become major problems.",
      icon: Brain,
      tech: "Expert Service"
    },
    {
      title: "Quality Repair Technology",
      description: "Proven repair methods using quality parts and professional techniques for reliable results.",
      icon: Cpu,
      tech: "Quality Service"
    },
    {
      title: "Fast Response",
      description: "Quick service delivery with our efficient scheduling and professional tracking systems.",
      icon: Zap,
      tech: "Fast Service"
    },
    {
      title: "Customer-Focused Service",
      description: "Personalized service experience with professional support and attention to detail.",
      icon: Users,
      tech: "Professional"
    }
  ];

  return (
    <section
      className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 sm:py-16 lg:py-20 xl:py-32 overflow-hidden"
      id="about"
    >
      {/* Revolutionary Background */}
      <div className="absolute inset-0">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse"></div>
        
        {/* Floating tech elements - Responsive positioning */}
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 border-2 border-white/20 rounded-full animate-spin"></div>
        <div className="absolute top-20 sm:top-40 right-16 sm:right-32 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 bg-gradient-to-r from-white/10 to-transparent rotate-45 animate-bounce"></div>
        <div className="absolute bottom-20 sm:bottom-32 left-1/4 sm:left-1/3 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 bg-white/5 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/6 sm:right-1/4 w-6 sm:w-8 lg:w-12 h-6 sm:h-8 lg:h-12 border-2 border-white/30 rotate-12 animate-spin"></div>
        
        {/* Neural network pattern overlay - Hidden on mobile for performance */}
        <div className="absolute inset-0 opacity-5 hidden sm:block">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0ibmV1cmFsIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0id2hpdGUiLz48Y2lyY2xlIGN4PSI4MCIgY3k9IjIwIiByPSIyIiBmaWxsPSJ3aGl0ZSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjIiIGZpbGw9IndoaXRlIi8+PGxpbmUgeDE9IjIwIiB5MT0iMjAiIHgyPSI1MCIgeTI9IjUwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEiLz48bGluZSB4MT0iODAiIHkxPSIyMCIgeDI9IjUwIiB5Mj0iNTAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9InVybCgjbmV1cmFsKSIvPjwvc3ZnPg==')]"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Revolutionary Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md border border-white/30 shadow-2xl mb-6 sm:mb-8">
            <Brain className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 mr-2 sm:mr-3 text-white animate-pulse" />
            <span className="text-sm sm:text-base lg:text-lg font-bold text-white">Professional Service</span>
            <div className="ml-2 sm:ml-3 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full animate-ping"></div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight sm:leading-none">
            <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              PROFESSIONAL
            </span>
            <span className={cn("block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl", colors.primary)}>
              REPAIR SERVICE
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light px-4">
            Experience reliable appliance repair with our expert technicians,
            quality parts, and professional service that you can trust.
          </p>
        </div>

        {/* Revolutionary Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Left Content */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Why Choose Our
                <span className={cn("block", colors.primary)}>
                  Professional Service?
                </span>
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
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
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className={cn(
                        "flex-shrink-0 w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center",
                        colors.bg
                      )}>
                        <value.icon className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="text-base sm:text-lg font-bold text-white">{value.title}</h4>
                          <span className="text-xs font-semibold text-white/60 bg-white/20 px-2 py-1 rounded-full">
                            {value.tech}
                          </span>
                        </div>
                        <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 sm:pt-8">
              <div className="relative group">
                <div className={cn(
                  "absolute -inset-1 sm:-inset-2 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg",
                  colors.bg
                )}></div>
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
                    <div className="text-lg sm:text-xl lg:text-2xl font-black text-white">15+ Years</div>
                    <div className="text-xs sm:text-sm text-white/80">Innovation</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 -right-4 sm:-right-6 lg:-right-8 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-2xl border border-white/30">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white">10K+</div>
                  <div className="text-xs sm:text-sm text-white/80">Repairs Done</div>
                </div>
              </div>

              {/* Tech Overlay */}
              <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8">
                <div className={cn(
                  "px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-black text-white shadow-lg backdrop-blur-sm",
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
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-2 sm:mb-3">
                  {stat.number}
                </div>
                <div className="text-gray-200 font-semibold text-sm sm:text-base lg:text-lg">
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
              <h3 className="text-xl sm:text-2xl font-black text-white mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
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
              <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4">Our Vision</h3>
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
              <h3 className="text-xl sm:text-2xl font-black text-white mb-3 sm:mb-4">Our Values</h3>
              <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
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