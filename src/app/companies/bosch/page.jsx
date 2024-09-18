import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import KeyFeatures from "@/components/KeyFeatures";
import MainBanner from "@/components/MainBanner";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <Header company="Bosch" />
      <MainBanner company="Bosch" />
      <AboutSection company="Bosch" />
      <WhyChooseUsSection company="Bosch" />
      <ServicesSection company="Bosch" />
      <ContactSection company="Bosch" />
      <KeyFeatures company="Bosch" />
      <Footer company="Bosch" />
    </>
  );
}
