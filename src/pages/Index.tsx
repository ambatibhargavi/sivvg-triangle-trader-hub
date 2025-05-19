
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import InvestmentTriangle from "@/components/InvestmentTriangle";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutUs />
      <Services />
      <InvestmentTriangle />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
