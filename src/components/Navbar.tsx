
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12 lg:px-24 py-4",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center space-x-2"
          aria-label="Timewise Logo"
        >
          <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-timewise-700 to-timewise-500 flex items-center justify-center">
            <div className="relative w-5 h-5">
              <div className="absolute top-0 left-0 w-3 h-3 bg-white rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
          <span className="font-display font-bold text-xl text-timewise-900">Timewise</span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#features" 
            className="text-sm font-medium text-timewise-950 hover:text-timewise-600 transition-colors"
          >
            Features
          </a>
          <a 
            href="#testimonials" 
            className="text-sm font-medium text-timewise-950 hover:text-timewise-600 transition-colors"
          >
            Testimonials
          </a>
          <a 
            href="#pricing" 
            className="text-sm font-medium text-timewise-950 hover:text-timewise-600 transition-colors"
          >
            Pricing
          </a>
          <a 
            href="#faq" 
            className="text-sm font-medium text-timewise-950 hover:text-timewise-600 transition-colors"
          >
            FAQ
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="#contact" 
            className="px-5 py-2 text-sm font-medium text-timewise-700 hover:text-timewise-800 transition-colors"
          >
            Login
          </a>
          <a 
            href="#contact" 
            className="button-primary text-sm"
          >
            Get Started
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-timewise-900 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t border-gray-100 shadow-lg animate-fade-in">
          <div className="px-6 py-6 space-y-6">
            <a 
              href="#features" 
              className="block text-sm font-medium text-timewise-950 hover:text-timewise-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="block text-sm font-medium text-timewise-950 hover:text-timewise-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="block text-sm font-medium text-timewise-950 hover:text-timewise-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              className="block text-sm font-medium text-timewise-950 hover:text-timewise-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="pt-4 flex flex-col space-y-4">
              <a 
                href="#contact" 
                className="block px-5 py-2 text-center text-timewise-700 hover:text-timewise-800 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </a>
              <a 
                href="#contact" 
                className="block button-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
