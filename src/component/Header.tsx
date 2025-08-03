import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            {/* Logo with glow */}
            <div className="relative w-10 h-10">
              <img
                src="/logo.png"
                alt="Wault Logo"
                className="w-full h-full object-contain relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-md rounded-full z-0"></div>
            </div>

            {/* Brand Name */}
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent tracking-wide">
              WAULT
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-4">
            <a
              href="#showcase"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <p className="text-2xl m-6 group relative w-max">
                <span>Showcase</span>
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
              </p>
            </a>
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <p className="text-2xl m-6 group relative w-max">
                <span>Features</span>
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
              </p>
            </a>
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <p className="text-2xl m-6 group relative w-max">
                <span>How It Works</span>
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
              </p>
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <p className="text-2xl m-6 group relative w-max">
                <span>About Us</span>
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
              </p>
            </a>
          </nav>

          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#showcase"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <p className="text-2xl m-6 group relative w-max">
                <span>Showcase</span>
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
              </p>
            </a>
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <p className="text-2xl m-6 group relative w-max">
                <span>Features</span>
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
              </p>
            </a>
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <p className="text-2xl m-6 group relative w-max">
                <span>How It Works</span>
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
              </p>
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <p className="text-2xl m-6 group relative w-max">
                <span>About Us</span>
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
              </p>
            </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
