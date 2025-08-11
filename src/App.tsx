import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HowItWorks from "./component/HowItWorks";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Features from "./component/Features";
import Testimonials from "./component/Testimonials";
import Footer from "./component/Footer";
import Showcase from "./component/Showcase";
import AboutUs from "./component/AboutUs";
import GlowingCursor from "./component/GlowingCursor";
import Chatbot from "./component/Chatbot";
import ProductGallery from "./component/ProductDisplay";
import ShoppingCart from "./component/ShoppingCart";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Showcase />
      <ProductGallery />
      <Features />
      <HowItWorks />
      <AboutUs />
      <Testimonials />
      <Footer />
      <Chatbot />
      <GlowingCursor />
    </>
  );
}

function App() {
  const [showPunchline, setShowPunchline] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPunchline(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="garamond relative min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showPunchline ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          <Chatbot />
          <GlowingCursor />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </motion.div>

        <AnimatePresence>
          {showPunchline && (
            <motion.div
              key="punchline"
              className="fixed inset-0 bg-gradient-to-b from-black via-gray-900 to-black text-white flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-2xl md:text-5xl font-semibold tracking-wide garamond text-center">
                <span className="text-blue-600">CHILL,</span>{" "}
                <span className="text-gray-200">
                  YOUR PACKAGES ARE LOCKED IN.
                </span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
