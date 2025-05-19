import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        isScrolled ? "bg-black/90 shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <h1 className="text-3xl font-extrabold text-white tracking-wide"></h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-10">
          {["home", "about", "services", "investment"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-white text-xl font-semibold transition duration-200 hover:text-white hover:drop-shadow-[0_0_8px_white]"
            >
              {section === "home"
                ? "Home"
                : section === "about"
                ? "About Us"
                : section === "services"
                ? "Services"
                : "Investment Policies"}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/90 shadow-md py-4 md:hidden z-40">
          <div className="flex flex-col space-y-4 px-4">
            {["home", "about", "services", "investment"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-white text-2xl font-semibold py-2 text-left transition duration-200 hover:drop-shadow-[0_0_8px_white]"
              >
                {section === "home"
                  ? "Home"
                  : section === "about"
                  ? "About Us"
                  : section === "services"
                  ? "Services"
                  : "Investment Policies"}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
