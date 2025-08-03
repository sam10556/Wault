import { Mail, Phone, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* 1. Brand Name + Logo + Description */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
          <div className="relative w-10 h-10">
              <img
                src="/logo.png"
                alt="Wault Logo"
                className="w-full h-full object-contain relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-md rounded-full z-0"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
              WAULT
            </span>
          </div>
          <p className="text-gray-400 leading-relaxed text-base max-w-sm">
            The future of secure deliveries. Smart, simple, and absolutely
            essential for modern living.
          </p>
        </div>

        {/* 2. Contact / Address */}
        <div className="space-y-6">
          <h3 className="text-white text-xl font-semibold">Get In Touch</h3>
          <div className="space-y-3 text-gray-400 text-base">
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/buildwault/?hl=en"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Instagram className="w-5 h-5" />
                  <span>buildwault</span>
                </div>
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5" />
              <span>buildwault@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5" />
              <span>+91-7016679103</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5" />
              <span>Rajkot, Guj</span>
            </div>
          </div>
        </div>

        {/* 3. Product Links */}
        <div className="space-y-6">
          <h3 className="text-white text-xl font-semibold">Product</h3>
          <ul className="space-y-3 text-gray-400 text-base">
            <li>
              <a href="#showcase" className="hover:text-white transition">
                Showcase
              </a>
            </li>
            <li>
              <a href="#feature" className="hover:text-white transition">
                Features
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-white transition">
                How It Works
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © 2025 Wault. All rights reserved. Made with ❤️ for the future of secure
        deliveries. S.S.
      </div>
    </footer>
  );
};

export default Footer;
