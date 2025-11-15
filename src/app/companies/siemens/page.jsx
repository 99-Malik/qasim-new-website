import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import KeyFeatures from "@/components/KeyFeatures";
import MainBanner from "@/components/MainBanner";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import FixedCallWhatsApp from "@/components/FixedCallWhatsApp";

export default function Home() {
  return (
    <>
      <Header company="Siemens" />
      <MainBanner company="Siemens" />
      <AboutSection company="Siemens" />
      <WhyChooseUsSection company="Siemens" />
      <ServicesSection company="Siemens" />
      <ContactSection company="Siemens" />
      <KeyFeatures company="Siemens" />
      <Footer company="Siemens" />
      
    </>
  );
}
