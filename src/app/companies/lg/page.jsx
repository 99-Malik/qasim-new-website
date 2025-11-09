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
      {/* <Header company="LG" />
      <MainBanner company="LG" />
      <AboutSection company="LG" />
      <WhyChooseUsSection company="LG" />
      <ServicesSection company="LG" />
      <ContactSection company="LG" />
      <KeyFeatures company="LG" />
      <Footer company="LG" /> */}
        <Header />
      <MainBanner />
      <AboutSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <ContactSection />
      <KeyFeatures />
      <Footer />
      <FixedCallWhatsApp />
    </>
  );
}
