import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import KeyFeatures from "@/components/KeyFeatures";
import MainBanner from "@/components/heaterBanner";
import ServicesSection from "@/components/heaterServices";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <Header company="heaterRepair" />
      <MainBanner company="Solar Water Heater" />
      <AboutSection company="Siemens" />
      <WhyChooseUsSection company="Siemens" />
      <ServicesSection company="Siemens" />
      <ContactSection company="Siemens" />
      <KeyFeatures company="Siemens" />
      <Footer company="Siemens" />
    </>
  );
}
