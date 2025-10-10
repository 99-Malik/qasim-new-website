import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Script from "next/script";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Repair site with Next.js",
  description: "A site to repair things",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics and Google Ads Tracking */}
        <GoogleAnalytics />
      </head>
      <body className={cn("text-secondary", poppins.className)}>
        {children}
      </body>
    </html>
  );
}
