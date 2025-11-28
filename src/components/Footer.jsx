import { logoName } from "@/lib/logoName";
import { cn } from "@/lib/utils";
import {
  Copyright,
  Phone,
  Clock,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  Star,
  Shield,
  Award,
  Cpu,
  Brain,
  Rocket,
  Zap,
  Target,
  Sparkles
} from "lucide-react";
import { Orbitron } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { getBrandConfig, getBrandColors } from "@/lib/brandConfig";

const logoFont = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export default function Footer({ company }) {
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

  const footerLinks = {
    services: [
      { name: "Washing Machine Repair", href: "/#services", tech: "Repair" },
      { name: "Dryer Repair", href: "/#services", tech: "Repair" },
      { name: "Refrigerator Repair", href: "/#services", tech: "Repair" },
      { name: "Oven Repair", href: "/#services", tech: "Repair" },
      { name: "Dishwasher Repair", href: "/#services", tech: "Repair" },
      { name: "Emergency Service", href: "/#contact", tech: "Emergency" }
    ],
    company: [
      { name: "About Our Service", href: "/#about", tech: "About" },
      { name: "Our Expert Team", href: "/#about", tech: "Team" },
      { name: "Careers", href: "/careers", tech: "Careers" },
      { name: "Customer Reviews", href: "/reviews", tech: "Reviews" },
      { name: "Service Blog", href: "/blog", tech: "Blog" },
      { name: "Contact Us", href: "/#contact", tech: "Contact" }
    ],
    support: [
      { name: "Help Center", href: "/help", tech: "Help" },
      { name: "Warranty Info", href: "/warranty", tech: "Warranty" },
      { name: "Service Areas", href: "/areas", tech: "Areas" },
      { name: "Book Appointment", href: "/book", tech: "Book" },
      { name: "Track Service", href: "/track", tech: "Track" },
      { name: "FAQ", href: "/faq", tech: "FAQ" }
    ]
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", tech: "Social" },
    { name: "Twitter", icon: Twitter, href: "#", tech: "Social" },
    { name: "Instagram", icon: Instagram, href: "#", tech: "Social" },
    { name: "LinkedIn", icon: Linkedin, href: "#", tech: "Professional" }
  ];

  const contactInfo = [
    { icon: Phone, text: "+971562843310", href: "tel:+971562843310", tech: "Phone" },
    { icon: Clock, text: "24/7 Emergency Service Available", href: "#", tech: "24/7" }
  ];

  return (
    <footer className={cn(
      "relative overflow-hidden",
      isBrandPage ? cn(colors.blob, "text-gray-800") : "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white"
    )}>
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
          </>
        )}
        
        {!isBrandPage && (
          <>
            {/* Circuit pattern overlay - Hidden on mobile for performance */}
            <div className="absolute inset-0 opacity-5 hidden sm:block">
              <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY2lyY3VpdCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0xMCAxMGg4MHY4MEgxMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0yMCAyMGg2MHY2MEgyMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9InVybCgjY2lyY3VpdCkiLz48L3N2Zz4=')]"></div>
            </div>
          </>
        )}
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Revolutionary Main Footer Content */}
        <div className="pt-12 lg:py-20 xl:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Company Info */}
            <div>
              <div className="mb-6 sm:mb-8">
                <Link
                  href={isBrandPage ? `/companies/${company.toLowerCase()}` : "/"}
                  className={cn("block group", logoFont.className)}
                >
                  {isBrandPage && brandConfig ? (
                    <div className="mb-3 sm:mb-4">
                      {brandConfig.logo.component === "bosch" ? (
                        <div className={cn("h-auto", brandConfig.logo.sizes?.desktop?.width || "w-32 sm:w-40 lg:w-48")} style={{ color: brandConfig.primary }}>
                          {boschSvg}
                        </div>
                      ) : brandConfig.logo.component === "samsung" ? (
                        <div className={cn("h-auto", brandConfig.logo.sizes?.desktop?.width || "w-32 sm:w-40 lg:w-48")} style={{ color: brandConfig.primary }}>
                          {samsungSvg}
                        </div>
                      ) : (
                        <Image 
                          src={brandConfig.logo.path} 
                          width={brandConfig.logo.sizes?.image?.width || (brandConfig.logo.component === "lg" ? 90 : 120)} 
                          height={brandConfig.logo.sizes?.image?.height || (brandConfig.logo.component === "lg" ? 30 : 40)}
                          alt={`${brandConfig.name} Logo`}
                          className={cn("h-auto", brandConfig.logo.sizes?.desktop?.width || "w-32 sm:w-40 lg:w-48")}
                        />
                      )}
                      <div className={cn(
                        "text-xs sm:text-sm font-semibold mt-2 sm:mt-3",
                        isBrandPage ? "text-gray-500" : "text-white/60"
                      )}>
                        {brandConfig.name} Repair Service
                      </div>
                    </div>
                  ) : (
                    <>
                      <span className={cn(
                        "text-2xl sm:text-3xl lg:text-4xl font-black mb-3 sm:mb-4 block",
                        "bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
                      )}>
                        {logoName}
                      </span>
                      <div className={cn(
                        "text-xs sm:text-sm font-semibold mt-1 sm:mt-2",
                        "text-white/60"
                      )}>
                        Professional Repair Service
                      </div>
                    </>
                  )}
                </Link>
              </div>
              
              <p className={cn(
                "mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg",
                isBrandPage ? "text-gray-600" : "text-gray-200"
              )}>
                Providing reliable appliance repair with expert technicians,
                quality parts, and professional service that you can trust
                for all your home appliance needs.
              </p>

              {/* Revolutionary Contact Info */}
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className={cn(
                      "group flex items-center space-x-3 sm:space-x-4 transition-all duration-300 hover:translate-x-2",
                      isBrandPage ? "text-gray-600 hover:text-gray-800" : "text-gray-200 hover:text-white"
                    )}
                  >
                    <div className={cn(
                      "w-8 sm:w-10 h-8 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
                      colors.bg
                    )}>
                      <info.icon className={cn("w-4 sm:w-5 h-4 sm:h-5", isBrandPage ? "text-white" : "")} />
                    </div>
                    <div>
                      <div className={cn("font-semibold text-sm sm:text-base", isBrandPage ? "text-gray-800" : "text-white")}>{info.text}</div>
                      <div className={cn("text-xs", isBrandPage ? "text-gray-500" : "text-white/60")}>{info.tech}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Revolutionary Social Links */}
              <div className="mt-8 sm:mt-12">
                <h4 className={cn("text-base sm:text-lg font-bold mb-4 sm:mb-6", isBrandPage ? "text-gray-800" : "text-white")}>Connect with Us</h4>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="group relative w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-500 hover:scale-110 hover:-translate-y-1"
                    >
                      <social.icon className="w-5 sm:w-6 h-5 sm:h-6 group-hover:scale-110 transition-transform" />
                      <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Revolutionary Trust Indicators */}
        <div className={cn("py-8 sm:py-12 border-t", isBrandPage ? "border-gray-200" : "border-white/20")}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="group flex items-center space-x-4 sm:space-x-6">
              <div className={cn(
                "w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500",
                colors.bg
              )}>
                <Award className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />
              </div>
              <div>
                <h4 className={cn("text-lg sm:text-xl font-bold", isBrandPage ? "text-gray-800" : "text-white")}>15+ Years Experience</h4>
                <p className={cn("text-sm sm:text-base", isBrandPage ? "text-gray-600" : "text-gray-300")}>Proven track record</p>
              </div>
            </div>

            <div className="group flex items-center space-x-4 sm:space-x-6">
              <div className={cn(
                "w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500",
                colors.bg
              )}>
                <Star className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />
              </div>
              <div>
                <h4 className={cn("text-lg sm:text-xl font-bold", isBrandPage ? "text-gray-800" : "text-white")}>5-Star Rated</h4>
                <p className={cn("text-sm sm:text-base", isBrandPage ? "text-gray-600" : "text-gray-300")}>Customer satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        {/* Revolutionary Bottom Bar */}
        <div className={cn("py-6 sm:py-8 border-t", isBrandPage ? "border-gray-200" : "border-white/20")}>
          {isBrandPage && brandConfig && (
            <div className={cn(
              "mb-4 sm:mb-6 text-center",
              isBrandPage ? "text-gray-600" : "text-gray-300"
            )}>
              <p className={cn(
                "text-xs sm:text-sm",
                isBrandPage ? "text-gray-600" : "text-gray-300"
              )}>
                * We are a third-party service provider and are not affiliated with {brandConfig.name}.
                <br />
                {brandConfig.name} is a registered trademark of its respective owner.
              </p>
            </div>
          )}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 sm:space-y-6 md:space-y-0">
            <div className={cn("flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2", isBrandPage ? "text-gray-600" : "text-gray-300")}>
              <div className="flex items-center space-x-2">
                <Copyright className="w-4 sm:w-5 h-4 sm:h-5" />
                <span className="text-sm sm:text-base lg:text-lg">
                  2024 {isBrandPage && brandConfig ? brandConfig.name : logoName}. All rights reserved.
                </span>
              </div>
              <div className={cn(
                "px-2 sm:px-3 py-1 rounded-full text-xs font-semibold",
                isBrandPage ? colors.light : "bg-white/10"
              )}>
                Professional Service
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm">
              <Link href="/privacy" className={cn(
                "transition-colors group flex items-center",
                isBrandPage ? "text-gray-600 hover:text-gray-800" : "text-gray-300 hover:text-white"
              )}>
                <Shield className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2 group-hover:scale-110 transition-transform" />
                Privacy Policy
              </Link>
              <Link href="/terms" className={cn(
                "transition-colors group flex items-center",
                isBrandPage ? "text-gray-600 hover:text-gray-800" : "text-gray-300 hover:text-white"
              )}>
                <Target className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2 group-hover:scale-110 transition-transform" />
                Terms of Service
              </Link>
              <Link href="/cookies" className={cn(
                "transition-colors group flex items-center",
                isBrandPage ? "text-gray-600 hover:text-gray-800" : "text-gray-300 hover:text-white"
              )}>
                <Cpu className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2 group-hover:scale-110 transition-transform" />
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const boschSvg = (
  <svg
    width="150"
    height="50"
    viewBox="0 0 2500 534"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_200_2)">
      <path
        d="M266.933 0.0664062C119.65 0.0664062 0 119.716 0 267C0 414.283 119.65 533.933 266.933 533.933C414.217 533.933 533.866 414.283 533.866 267C533.866 119.716 414.217 0.0664062 266.933 0.0664062ZM266.933 507.181C134.349 507.181 26.7521 399.29 26.7521 267C26.7521 134.709 134.349 26.8185 266.933 26.8185C399.518 26.8185 507.114 134.709 507.114 267C507.114 399.29 399.518 507.181 266.933 507.181Z"
        fill="currentColor"
      />
      <path
        d="M362.183 95.904C361.301 95.3161 360.125 95.0221 358.949 95.0221C355.421 95.0221 352.775 97.6679 352.775 101.196V184.686C352.775 187.626 350.423 189.977 347.484 189.977H185.795C182.855 189.977 180.797 187.626 180.503 184.686V101.196C180.503 100.02 180.209 99.1378 179.621 97.9619C177.858 95.0221 174.036 94.1402 171.096 95.904C111.418 132.651 75.2588 196.445 75.2588 267C75.2588 337.555 111.418 401.349 171.684 438.096C172.566 438.684 173.742 438.978 174.918 438.978C178.446 438.978 181.091 436.332 181.091 432.804V349.314C181.091 346.374 183.443 344.317 186.383 344.023H348.072C351.011 344.023 353.363 346.374 353.363 349.314V432.804C353.363 433.98 353.657 434.862 354.245 436.038C356.009 438.978 359.831 439.86 362.771 438.096C423.036 401.349 459.196 337.555 459.196 267C459.196 196.445 422.448 132.651 362.183 95.904ZM149.93 371.657L150.811 381.652L144.344 373.715C94.6614 311.097 94.6614 222.609 144.344 159.992L149.93 152.936L150.811 152.054L149.93 162.343C149.048 170.575 148.754 179.1 148.754 187.626V346.08C148.754 354.606 149.342 363.131 149.93 371.657ZM352.775 306.981C352.775 309.921 350.423 312.273 347.484 312.273H185.795C182.855 312.273 180.797 309.921 180.503 306.981V227.019C180.503 224.079 182.855 221.727 185.795 221.727H347.484C350.423 221.727 352.775 224.079 352.775 227.019V306.981ZM389.229 373.715L382.761 381.652L383.643 371.657C384.525 363.425 384.819 354.9 384.819 346.374V187.626C384.819 179.1 384.525 170.575 383.643 162.343L383.349 157.934L383.055 153.23V152.054L389.229 159.992C413.335 189.977 426.564 228.195 426.564 266.706C426.564 305.217 413.335 343.729 389.229 373.715Z"
        fill="currentColor"
      />
      <path
        d="M936.618 262.297C935.148 261.709 933.384 261.121 933.384 259.357C933.384 258.181 933.972 257.299 935.148 256.711C937.206 255.829 988.065 237.602 988.065 177.631C988.065 110.897 943.086 71.2101 867.239 71.2101H683.502V463.379H883.996C942.498 463.379 1005.41 421.927 1005.41 355.194C1005.41 291.401 957.197 269.058 936.618 262.297ZM776.105 151.466C776.105 149.997 777.281 148.821 778.751 148.821H851.658C875.764 148.821 892.227 164.99 892.227 189.096C892.227 207.911 877.528 228.195 849.894 228.195H778.751C777.281 228.195 776.105 227.019 776.105 225.549V151.466ZM851.658 386.062H778.751C777.281 386.062 776.105 384.886 776.105 383.416V305.218C776.105 303.748 777.281 302.572 778.751 302.572H849.894C884.878 302.572 904.868 317.565 904.868 344.023C904.868 371.363 886.348 386.062 851.658 386.062ZM1626 227.313L1611.89 224.373C1580.14 217.612 1549.27 209.086 1549.27 181.746C1549.27 154.406 1574.85 142.059 1600.13 142.059C1629.82 142.059 1659.22 155.288 1681.56 178.219L1739.77 120.599C1714.78 92.9646 1670.39 61.2148 1598.66 61.2148C1512.23 61.2148 1454.02 110.309 1454.02 183.51C1454.02 260.827 1514.88 289.931 1566.03 300.808L1579.84 303.748C1629.53 314.331 1653.05 322.268 1653.05 350.49C1653.05 375.773 1630.41 392.53 1596.9 392.53C1557.5 392.53 1522.52 375.185 1496.06 342.553L1436.38 401.055C1468.13 438.684 1510.17 472.786 1598.07 472.786C1673.04 472.786 1749.18 429.277 1749.18 345.787C1748.88 260.239 1690.68 240.836 1626 227.313ZM2400.64 71.2101V214.672C2400.64 216.142 2399.46 217.318 2397.99 217.318H2277.46C2275.99 217.318 2274.81 216.142 2274.81 214.672V71.2101H2176.03V463.379H2274.81V309.333C2274.81 307.863 2275.99 306.688 2277.46 306.688H2397.99C2399.46 306.688 2400.64 307.863 2400.64 309.333V463.379H2500V71.2101H2400.64ZM1977.3 383.122C1932.91 383.122 1885 346.081 1885 264.649C1885 190.272 1929.97 151.466 1974.37 151.466C2006.7 151.466 2029.34 164.99 2047.27 194.975L2123.12 144.705C2084.31 87.673 2038.16 61.8028 1973.78 61.8028C1847.66 61.8028 1791.22 163.814 1791.22 264.649C1791.22 387.238 1865.89 472.786 1972.6 472.786C2051.98 472.786 2088.14 443.682 2126.06 389.884L2049.62 338.437C2032.57 366.071 2014.05 383.122 1977.3 383.122ZM1227.36 61.2148C1119.47 61.2148 1047.15 143.823 1047.15 267C1047.15 390.178 1119.47 472.786 1227.36 472.786C1335.25 472.786 1407.57 390.178 1407.57 267C1407.57 143.823 1335.25 61.2148 1227.36 61.2148ZM1227.36 383.122C1174.45 383.122 1140.35 337.555 1140.35 267C1140.35 196.739 1174.45 151.466 1227.36 151.466C1280.57 151.466 1314.97 196.739 1314.97 267C1314.97 337.555 1280.57 383.122 1227.36 383.122Z"
        fill="#F80000"
      />
    </g>
    <defs>
      <clipPath id="clip0_200_2">
        <rect width="2500" height="534" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const samsungSvg = (
  <svg
    width="150"
    height="30"
    viewBox="0 0 2168 335"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.666504 243.562V219.812H83.8748V250.021C83.8104 253.989 84.5969 257.926 86.1814 261.565C87.7658 265.205 90.1115 268.462 93.0605 271.119C96.0095 273.776 99.4935 275.771 103.278 276.968C107.062 278.166 111.059 278.539 115 278.062C121.732 278.975 128.561 277.326 134.133 273.44C139.705 269.554 143.614 263.716 145.083 257.083C147.311 249.485 147.122 241.382 144.542 233.896C128.437 193.396 18.3957 175.062 4.41651 111.937C1.57048 98.0699 1.3937 83.7873 3.89567 69.8538C12.479 19.1663 57.0207 0.833008 112.312 0.833008C156.333 0.833008 217 11.083 217 79.0413V101.166H139.708V81.7497C139.942 77.9225 139.344 74.0903 137.955 70.5161C136.567 66.942 134.422 63.7108 131.666 61.0445C128.911 58.3782 125.611 56.34 121.993 55.07C118.375 53.8 114.526 53.3282 110.708 53.6872C104.19 52.9694 97.6401 54.7375 92.3682 58.6383C87.0964 62.5391 83.4904 68.2852 82.2707 74.7288C81.4019 80.1089 81.5859 85.6064 82.8123 90.9164C91.9165 127.041 209.5 146.479 222.396 211.75C225.619 228.666 225.795 246.022 222.916 263C215.396 314.75 169.229 334.166 113.417 334.166C54.8332 334.166 0.666504 313.125 0.666504 243.562ZM1008.83 242.5V218.75H1090.98V248.416C1090.85 252.35 1091.57 256.264 1093.09 259.893C1094.62 263.521 1096.91 266.778 1099.8 269.441C1102.7 272.103 1106.14 274.109 1109.89 275.32C1113.63 276.531 1117.59 276.919 1121.5 276.458C1128.17 277.453 1134.97 275.894 1140.55 272.094C1146.12 268.294 1150.05 262.532 1151.56 255.958C1153.79 248.537 1153.61 240.602 1151.04 233.291C1135.46 193.396 1026.48 174.958 1012.54 111.937C1009.69 98.2537 1009.51 84.1487 1012 70.3955C1020.65 20.2497 1065.25 1.91634 1119.42 1.91634C1162.92 1.91634 1223.02 12.708 1223.02 79.583V101.166H1146.27V82.2913C1146.52 78.5113 1145.94 74.7229 1144.6 71.1829C1143.25 67.643 1141.15 64.4344 1138.46 61.7748C1135.76 59.1151 1132.52 57.0667 1128.96 55.7683C1125.41 54.4699 1121.61 53.952 1117.83 54.2497C1111.43 53.401 1104.95 55.061 1099.75 58.8822C1094.55 62.7033 1091.02 68.3893 1089.92 74.7497C1089.04 80.1282 1089.22 85.6262 1090.44 90.9372C1099.02 127.062 1215.44 145.958 1228.42 210.666C1231.64 227.4 1231.81 244.578 1228.94 261.375C1221.42 313.166 1175.79 332.041 1120.6 332.041C1062.54 332.083 1008.83 310.979 1008.83 242.5ZM1303.02 253.854C1302.27 247.04 1302.1 240.176 1302.5 233.333V9.99967H1380.87V240.312C1380.77 244.278 1380.95 248.246 1381.4 252.187C1383.14 258.682 1386.99 264.419 1392.32 268.51C1397.66 272.601 1404.2 274.818 1410.93 274.818C1417.65 274.818 1424.19 272.601 1429.53 268.51C1434.87 264.419 1438.71 258.682 1440.46 252.187C1440.92 248.247 1441.1 244.278 1441 240.312V9.99967H1519.42V233.291C1519.42 239.229 1518.87 250.562 1518.87 253.812C1513.52 312.146 1467.87 330.896 1410.98 330.896C1354.08 330.896 1308.4 312.041 1303.02 253.812V253.854ZM1948.31 250.604C1947.52 243.766 1947.15 236.884 1947.23 230V98.9997C1947.23 93.6038 1947.75 83.8955 1948.29 78.4789C1955.27 20.2497 2001.98 1.91634 2057.27 1.91634C2112.04 1.91634 2160.33 20.2497 2165.73 78.4997C2166.37 85.32 2166.55 92.1764 2166.25 99.0205V109.166H2087.87V91.9997C2087.89 88.0171 2087.53 84.0418 2086.81 80.1247C2084.75 73.5485 2080.65 67.8019 2075.09 63.7218C2069.54 59.6417 2062.83 57.4414 2055.94 57.4414C2049.05 57.4414 2042.33 59.6417 2036.78 63.7218C2031.23 67.8019 2027.12 73.5485 2025.06 80.1247C2024.16 84.9296 2023.8 89.8223 2024 94.708V237.083C2023.91 241.049 2024.09 245.017 2024.54 248.958C2026.4 256.02 2030.72 262.187 2036.72 266.35C2042.72 270.513 2050.01 272.398 2057.27 271.666C2064.41 272.426 2071.57 270.54 2077.41 266.365C2083.25 262.191 2087.35 256.019 2088.94 249.021C2089.66 245.106 2089.84 241.11 2089.48 237.146V191.771H2057.81V146.458H2167.33V230C2167.41 236.849 2167.05 243.697 2166.25 250.5C2160.9 307.125 2112.08 327.083 2057.27 327.083C2002.46 327.083 1953.67 307.187 1948.31 250.562V250.604ZM855.854 321.208L853.771 33.1872L800.021 321.208H721.646L668.479 33.1872L666.396 321.208H589.042L595.479 10.5413H721.646L760.833 253.271L800.021 10.5413H926.167L933.146 321.208H855.854ZM443.562 321.208L401.687 33.1872L358.729 321.208H275L331.917 10.5413H469.896L526.812 321.208H443.562ZM1755.58 317.979L1677.75 59.6247L1682.04 317.958H1605.79V10.5413H1720.67L1793.58 260.812L1789.4 10.5413H1866.17V318L1755.58 317.979Z"
      fill="currentColor"
    />
  </svg>
);
