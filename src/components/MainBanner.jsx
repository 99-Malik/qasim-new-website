import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import { ArrowRight, Wrench, Clock, Shield, Star, Zap, Sparkles, Target, Award } from "lucide-react";

export default function MainBanner({ company }) {
  const getCompanyColors = () => {
    switch (company) {
      case "Siemens":
        return {
          primary: "text-siemensPrimary",
          bg: "bg-siemensPrimary",
          border: "border-siemensPrimary",
          gradient: "from-siemensPrimary/20 to-siemensPrimary/5"
        };
      case "Bosch":
        return {
          primary: "text-boschPrimary",
          bg: "bg-boschPrimary",
          border: "border-boschPrimary",
          gradient: "from-boschPrimary/20 to-boschPrimary/5"
        };
      case "Samsung":
        return {
          primary: "text-samsungPrimary",
          bg: "bg-samsungPrimary",
          border: "border-samsungPrimary",
          gradient: "from-samsungPrimary/20 to-samsungPrimary/5"
        };
      case "LG":
        return {
          primary: "text-lgPrimary",
          bg: "bg-lgPrimary",
          border: "border-lgPrimary",
          gradient: "from-lgPrimary/20 to-lgPrimary/5"
        };
      default:
        return {
          primary: "text-primary",
          bg: "bg-primary",
          border: "border-primary",
          gradient: "from-primary/20 to-primary/5"
        };
    }
  };

  const colors = getCompanyColors();

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Revolutionary Background Design */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient with geometric patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
        
        {/* Floating geometric elements - Responsive positioning */}
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 border-2 sm:border-4 border-white/20 rounded-full animate-spin"></div>
        <div className="absolute top-20 sm:top-40 right-16 sm:right-32 w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 bg-gradient-to-r from-white/10 to-transparent rotate-45 animate-bounce"></div>
        <div className="absolute bottom-20 sm:bottom-32 left-1/4 sm:left-1/3 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 bg-white/5 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/6 sm:right-1/4 w-6 sm:w-8 lg:w-12 h-6 sm:h-8 lg:h-12 border-2 border-white/30 rotate-12 animate-spin"></div>
        
        {/* Hexagonal pattern overlay - Hidden on mobile for performance */}
        <div className="absolute inset-0 opacity-10 hidden sm:block">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iaGV4IiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTUwIDBMOTUgMjVWNTBINDBWMjVaIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ1cmwoI2hleCkiLz48L3N2Zz4=')]"></div>
        </div>
      </div>

      {/* Content with Revolutionary Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center space-y-8 sm:space-y-12 pt-10">
          {/* Revolutionary Badge */}
          <div className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md border border-white/30 shadow-2xl">
            <Sparkles className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-yellow-400 mr-2 sm:mr-3 animate-pulse" />
            <span className="text-sm sm:text-base lg:text-lg font-bold text-white">#1 Trusted Repair Service</span>
            <div className="ml-2 sm:ml-3 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full animate-ping"></div>
          </div>

          {/* Revolutionary Main Heading */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white leading-tight sm:leading-none tracking-tight">
                <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  PROFESSIONAL
                </span>
                <span className={cn("block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl", colors.primary)}>
                  {company ? `${company} Appliance` : "Home Appliance"}
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  REPAIR SERVICE
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light px-4">
                Experience reliable appliance repair with our expert technicians,
                advanced diagnostic tools, and fast service delivery.
              </p>
          </div>

          {/* Revolutionary Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto px-4">
            {[
              { icon: Zap, title: "Expert Diagnostics", desc: "Professional problem detection" },
              { icon: Target, title: "Quality Repair", desc: "99.9% success rate" },
              { icon: Award, title: "Premium Service", desc: "Reliable experience" }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:border-white/40 transition-all duration-500 group-hover:scale-105">
                  <div className={cn("w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 mx-auto mb-4 sm:mb-6 rounded-xl sm:rounded-2xl flex items-center justify-center", colors.bg)}>
                    <feature.icon className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Revolutionary CTA Section */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <div className="relative group w-full sm:w-auto">
                <div className={cn(
                  "absolute -inset-1 sm:-inset-2 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg",
                  colors.bg
                )}></div>
                <CallAndWhatsappButton company={company} />
              </div>
              
              <button className="group relative w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 bg-gradient-to-r from-white to-gray-100 text-gray-900 font-black text-lg sm:text-xl rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                <span className="relative z-10 flex items-center justify-center">
                        Learn More
                  <ArrowRight className="ml-2 sm:ml-3 w-5 sm:w-6 h-5 sm:h-6 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-gray-300 px-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-green-400" />
                <span className="text-sm sm:text-base font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400" />
                <span className="text-sm sm:text-base font-semibold">24/7 Emergency Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400" />
                <span className="text-sm sm:text-base font-semibold">5-Star Rated</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}