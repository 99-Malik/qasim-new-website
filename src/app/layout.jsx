import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Script from "next/script";

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
        {/* Include gtag.js script */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-AW-16709600234" />

        {/* Include gtag.js initialization script */}
        <Script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config','AW-16709600234');
        ` }} />

{/*         <Script dangerouslySetInnerHTML={{
          __html: `
        function gtagSendEvent(url) {
    var callback = function () {
      if (typeof url === 'string') {
        window.location = url;
      }
    };
    gtag('event', 'conversion_event_contact', {
      'event_callback': callback,
      'event_timeout': 2000,
      // <event_parameters>
    });
    return false;
  }
        ` }} /> */}
      </head>
      <body className={cn("text-secondary", poppins.className)}>
        {children}
      </body>
    </html>
  );
}
