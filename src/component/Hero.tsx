import { useState, useEffect } from "react";

const Hero = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [animatePunchline, setAnimatePunchline] = useState(false);

  useEffect(() => {
    const showHeroTimeout = setTimeout(() => {
      setShowComingSoon(true);
    }, 2999); // Show Hero after 2s

    const punchlineTimeout = setTimeout(() => {
      setAnimatePunchline(true);
    }, 3000); // Move punchline after 3s

    return () => {
      clearTimeout(showHeroTimeout);
      clearTimeout(punchlineTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white flex items-center justify-center relative overflow-hidden px-4">
      {/* Punchline */}
      <div
        className={`absolute z-20 text-center transition-all duration-700 ${
          animatePunchline
            ? "transform scale-75 translate-y-[5vh] sm:translate-x-[2vh] sm:translate-y-[6vh] md:-translate-x-[8vh] md:translate-y-[6vh] lg:-translate-x-[20vh] lg:translate-y-[12vh]"
            : "transform scale-100 translate-y-0"
        }`}
      >
        <p className="text-4xl lg:text-6xl font-semibold tracking-wide garamond">
          <span className="text-blue-600">CHILL,</span>{" "}
          <span className="text-gray-200">YOUR PACKAGES ARE LOCKED IN.</span>
        </p>
      </div>

      {/* Hero Content */}
      <div
        className={`transition-all duration-700 z-10 w-full flex flex-col items-center ${
          showComingSoon
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <section className="relative min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black px-6 py-12 flex items-center justify-center overflow-hidden">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/30 via-transparent to-transparent pointer-events-none" />

          {/* Grid Content */}
          <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12 z-10">
            {/* Left */}
            <div className="space-y-8 text-center md:text-left">
              <img
                src="/Image.png"
                alt="Wault Logo"
                className="w-full max-w-sm mx-auto md:mx-0 my-16 object-contain"
              />

              <p className="text-xl md:text-2xl pt-10 text-gray-300 max-w-xl garamond mx-auto md:mx-0">
                Wault is your intelligent parcel locker — fingerprint-secured,
                weatherproof, and built for modern deliveries. Never miss a
                package again.
              </p>

              <a
                href="#showcase"
                className="inline-block px-8 py-4 text-2xl font-semibold text-gray-200 bg-gradient-to-l from-gray-900 to-blue-900 rounded-2xl hover:rounded-full hover:shadow-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                See It in Action
              </a>
            </div>

            {/* Right */}
            <div className="flex justify-center md:justify-end">
              <img
                src="#" // Add your product image path
                alt="Product Preview"
                className="w-full max-w-md md:max-w-lg lg:max-w-xl drop-shadow-2xl"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
