const Hero = () => {
  const fullText =
    "Fingerprint-secured. Weatherproof. Built for modern deliveries. Never miss a package again.";

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 min-h-screen">
        {/* Big Aesthetic Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent tracking-wide drop-shadow-lg mb-8">
          WAULT
        </h1>

        {/* Static Tagline */}
        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl leading-relaxed tracking-wide">
          {fullText}
        </p>

        {/* CTA */}
        <a
          href="#showcase"
          className="mt-10 inline-block px-8 py-3 text-lg font-medium text-white border border-white/50 rounded-full backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:border-white transition-all duration-300"
        >
          See It in Action
        </a>
      </div>
    </div>
  );
};

export default Hero;
