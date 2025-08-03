import { useState, useEffect } from "react";

const Hero = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [animatePunchline, setAnimatePunchline] = useState(false);

  // Trigger punchline and then reveal main content
  useEffect(() => {
    const showHeroTimeout = setTimeout(() => {
      setShowComingSoon(true); // Show Hero after 2s
    }, 2999);
  
    const punchlineTimeout = setTimeout(() => {
      setAnimatePunchline(true); // Move punchline after 3s
    }, 3000);
  
    return () => {
      clearTimeout(showHeroTimeout);
      clearTimeout(punchlineTimeout);
    };
  }, []);
  

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white flex items-center justify-center relative overflow-hidden px-4">
      {/* Punchline Animation */}
      <div
        className={`absolute transition-all duration-700 z-20 text-center ${
          animatePunchline
            ? "transform -translate-y-[-5vh] -translate-x-[0vh] md:-translate-x-[8vh]  md:-translate-y-[-4vh] lg:-translate-y-[-12vh] lg:-translate-x-[20vh] scale-75"
            : "transform translate-y-0 scale-100"
        }`}
      >
        <p className="text-4xl md:text-4xl lg:text-6xl font-semibold tracking-wide garamond">
          <span className="text-blue-600">CHILL,</span>{" "}
          <span className="text-gray-200">YOUR PACKAGES ARE LOCKED IN.</span>
        </p>
      </div>

      {/* Main Hero Content */}
      <div
        className={`transition-transform duration-700 text-center z-10 flex flex-col items-center w-full ${
          showComingSoon
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <section className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-12 flex items-center justify-center overflow-hidden w-full">
          {/* Background Glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/30 via-transparent to-transparent pointer-events-none"></div>

          <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12 z-10">
            {/* Left Section */}
            <div className="space-y-8 text-center md:text-left">
              <img
                src="/Image.png"
                alt="Wault Logo"
                className="w-100 h-100 object-contain mx-auto md:mx-0"
              />

              <h1 className="text-5xl md:text-6xl leading-tight py-6">
               
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-xl garamond mx-auto md:mx-0">
                Wault is your intelligent parcel locker — fingerprint-secured,
                weatherproof, and built for modern deliveries. Never miss a
                package again.
              </p>

              <a
                href="#showcase"
                className="inline-block px-8 py-4 bg-gradient-to-l from-gray-900 to-blue-900 hover:text-white rounded-2xl text-2xl font-semibold transform hover:rounded-full hover:shadow-lg text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                See It in Action
              </a>
            </div>

            {/* Right Section */}
            <div className="flex justify-center md:justify-end">
              <img
                src="#"
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
