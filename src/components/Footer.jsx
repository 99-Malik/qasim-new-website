import { logoName } from "@/lib/logoName";
import { cn } from "@/lib/utils";
import {
  Copyright,
  Phone,
  Mail,
  MapPin,
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

const logoFont = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export default function Footer({ company }) {
  const getCompanyColors = () => {
    switch (company) {
      case "Siemens":
        return {
          primary: "text-siemensPrimary",
          bg: "bg-siemensPrimary",
          border: "border-siemensPrimary",
          gradient: "from-siemensPrimary to-siemensPrimary/80"
        };
      case "Bosch":
        return {
          primary: "text-boschPrimary",
          bg: "bg-boschPrimary",
          border: "border-boschPrimary",
          gradient: "from-boschPrimary to-boschPrimary/80"
        };
      case "Samsung":
        return {
          primary: "text-samsungPrimary",
          bg: "bg-samsungPrimary",
          border: "border-samsungPrimary",
          gradient: "from-samsungPrimary to-samsungPrimary/80"
        };
      case "LG":
        return {
          primary: "text-lgPrimary",
          bg: "bg-lgPrimary",
          border: "border-lgPrimary",
          gradient: "from-lgPrimary to-lgPrimary/80"
        };
      default:
        return {
          primary: "text-primary",
          bg: "bg-primary",
          border: "border-primary",
          gradient: "from-primary to-primary/80"
        };
    }
  };

  const colors = getCompanyColors();

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
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567", tech: "Phone" },
    { icon: Mail, text: "info@appliancerepair.com", href: "mailto:info@appliancerepair.com", tech: "Email" },
    { icon: MapPin, text: "123 Service Street, City, State 12345", href: "#", tech: "Location" },
    { icon: Clock, text: "24/7 Emergency Service Available", href: "#", tech: "24/7" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Revolutionary Background */}
      <div className="absolute inset-0">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse"></div>
        
        {/* Floating tech elements - Responsive positioning */}
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 border-2 border-white/20 rounded-full animate-spin"></div>
        <div className="absolute top-20 sm:top-40 right-16 sm:right-32 w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-r from-white/10 to-transparent rotate-45 animate-bounce"></div>
        <div className="absolute bottom-20 sm:bottom-32 left-1/4 sm:left-1/3 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-white/5 rounded-full animate-ping"></div>
        
        {/* Circuit pattern overlay - Hidden on mobile for performance */}
        <div className="absolute inset-0 opacity-5 hidden sm:block">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY2lyY3VpdCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0xMCAxMGg4MHY4MEgxMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0yMCAyMGg2MHY2MEgyMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9InVybCgjY2lyY3VpdCkiLz48L3N2Zz4=')]"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Revolutionary Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20 xl:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
            {/* Company Info */}
            <div className="md:col-span-2 lg:col-span-1">
              <div className="mb-6 sm:mb-8">
                <Link
                  href="/"
                  className={cn("text-2xl sm:text-3xl lg:text-4xl font-black mb-3 sm:mb-4 block group", logoFont.className)}
                >
                  <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                    {logoName}
                  </span>
                  <div className="text-xs sm:text-sm font-semibold text-white/60 mt-1 sm:mt-2">
                    Professional Repair Service
                  </div>
                </Link>
              </div>
              
              <p className="text-gray-200 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg">
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
                    className="group flex items-center space-x-3 sm:space-x-4 text-gray-200 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    <div className={cn(
                      "w-8 sm:w-10 h-8 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
                      colors.bg
                    )}>
                      <info.icon className="w-4 sm:w-5 h-4 sm:h-5" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm sm:text-base">{info.text}</div>
                      <div className="text-xs text-white/60">{info.tech}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Revolutionary Social Links */}
              <div className="mt-8 sm:mt-12">
                <h4 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">Connect with Us</h4>
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

            {/* Revolutionary Services */}
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white mb-6 sm:mb-8 flex items-center">
                <Cpu className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3" />
                Our Services
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-gray-200 hover:text-white transition-all duration-300 hover:translate-x-2"
                    >
                      <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 mr-2 sm:mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div>
                        <div className="font-semibold text-sm sm:text-base">{link.name}</div>
                        <div className="text-xs text-white/60">{link.tech}</div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Revolutionary Company */}
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white mb-6 sm:mb-8 flex items-center">
                <Brain className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3" />
                Our Company
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-gray-200 hover:text-white transition-all duration-300 hover:translate-x-2"
                    >
                      <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 mr-2 sm:mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div>
                        <div className="font-semibold text-sm sm:text-base">{link.name}</div>
                        <div className="text-xs text-white/60">{link.tech}</div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Revolutionary Support */}
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white mb-6 sm:mb-8 flex items-center">
                <Rocket className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3" />
                Support
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-gray-200 hover:text-white transition-all duration-300 hover:translate-x-2"
                    >
                      <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 mr-2 sm:mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div>
                        <div className="font-semibold text-sm sm:text-base">{link.name}</div>
                        <div className="text-xs text-white/60">{link.tech}</div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Revolutionary Trust Indicators */}
        <div className="py-8 sm:py-12 border-t border-white/20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
            <div className="group flex items-center space-x-4 sm:space-x-6">
              <div className={cn(
                "w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500",
                colors.bg
              )}>
                <Shield className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-white">Licensed & Insured</h4>
                <p className="text-gray-300 text-sm sm:text-base">Certified technicians</p>
              </div>
            </div>

            <div className="group flex items-center space-x-4 sm:space-x-6">
              <div className={cn(
                "w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500",
                colors.bg
              )}>
                <Award className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-white">15+ Years Experience</h4>
                <p className="text-gray-300 text-sm sm:text-base">Proven track record</p>
              </div>
            </div>

            <div className="group flex items-center space-x-4 sm:space-x-6 sm:col-span-2 lg:col-span-1">
              <div className={cn(
                "w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500",
                colors.bg
              )}>
                <Star className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-white">5-Star Rated</h4>
                <p className="text-gray-300 text-sm sm:text-base">Customer satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        {/* Revolutionary Bottom Bar */}
        <div className="py-6 sm:py-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 sm:space-y-6 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Copyright className="w-4 sm:w-5 h-4 sm:h-5" />
                <span className="text-sm sm:text-base lg:text-lg">2024 {logoName}. All rights reserved.</span>
              </div>
              <div className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs font-semibold">
                Professional Service
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm">
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors group flex items-center">
                <Shield className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2 group-hover:scale-110 transition-transform" />
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors group flex items-center">
                <Target className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2 group-hover:scale-110 transition-transform" />
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-300 hover:text-white transition-colors group flex items-center">
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
