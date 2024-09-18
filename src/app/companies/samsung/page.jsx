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
      <Header company="Samsung" />
      <MainBanner company="Samsung" />
      <AboutSection company="Samsung" />
      <WhyChooseUsSection company="Samsung" />
      <ServicesSection company="Samsung" />
      <ContactSection company="Samsung" />
      <KeyFeatures company="Samsung" />
      <Footer company="Samsung" />
    </>
  );
}
