
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">SIVVG</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-gray-700 hover:text-primary font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-700 hover:text-primary font-medium"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-gray-700 hover:text-primary font-medium"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("investment")}
            className="text-gray-700 hover:text-primary font-medium"
          >
            Investment Policies
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-primary hover:bg-primary/90"
          >
            Contact Us
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 md:hidden">
            <div className="flex flex-col space-y-3 px-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-primary font-medium py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-primary font-medium py-2"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-primary font-medium py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("investment")}
                className="text-gray-700 hover:text-primary font-medium py-2"
              >
                Investment Policies
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 w-full"
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
