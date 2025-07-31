import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 text-center">
      <img
        src="/Image_4.jpeg"
        alt="Wault Logo"
        className="w-32 h-32 md:w-40 md:h-40 object-contain mb-6"
      />

      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
        Secure. Simple. Wault.
      </h1>

      <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-xl">
        Your digital vault for privacy-first storage and identity protection. Trusted, encrypted, and always in your control.
      </p>

      <div className="mt-8">
        <a
          href="#get-started"
          className="px-6 py-3 bg-white text-black rounded-full text-lg font-semibold hover:bg-gray-200 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
