
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-90"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="lg:w-2/3">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Invest with Confidence and Security
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            SIVVG delivers premium trading solutions with a perfect balance of safety, liquidity, and optimal returns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6" onClick={scrollToServices}>
              Our Services
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/20 px-8 py-6" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20 text-white" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
          <ArrowDown size={24} />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
