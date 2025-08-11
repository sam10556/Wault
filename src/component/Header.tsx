import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavLink {
  label: string;
  section: string;
}

const navLinks: NavLink[] = [
  { label: "Showcase", section: "showcase" },
  { label: "Features", section: "features" },
  { label: "How It Works", section: "how-it-works" },
  { label: "About Us", section: "about" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const isCartPage = location.pathname === "/cart";
  const cartLink = isCartPage ? "/" : "/cart";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/60 backdrop-blur-md border-b border-gray-800"
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
              <Link to="/">WAULT</Link>
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {!isCartPage &&
              navLinks.map(({ label, section }) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-300 hover:text-white transition-colors text-2xl m-6 group relative w-max"
                  type="button"
                >
                  <span>{label}</span>
                  <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
                </button>
              ))}
            <Link
              to={cartLink}
              className="text-gray-300 hover:text-white transition-colors flex items-center"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="w-6 h-6" />
            </Link>
          </nav>

          {!isCartPage && (
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          )}
        </div>

        {isMenuOpen && !isCartPage && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map(({ label, section }) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-300 hover:text-white transition-colors text-2xl m-6 group relative w-max"
                  type="button"
                >
                  <span>{label}</span>
                  <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
                </button>
              ))}

              {/* Mobile Cart Link */}
              <Link
                to={cartLink}
                className="text-gray-300 hover:text-white transition-colors flex items-center m-6"
                aria-label="Shopping Cart"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingCart className="w-6 h-6 mr-2" />
                Cart
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
