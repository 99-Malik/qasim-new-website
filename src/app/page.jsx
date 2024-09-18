import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import KeyFeatures from "@/components/KeyFeatures";
import MainBanner from "@/components/MainBanner";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <MainBanner />
      <AboutSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <ContactSection />
      <KeyFeatures />
      <Footer />
    </>
  );
}
