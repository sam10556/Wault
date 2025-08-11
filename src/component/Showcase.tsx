const Showcase = () => {
  return (
    <section
      id="showcase"
      className="min-h-screen bg-gradient-to-b to-black from-gray-900 text-white py-20 px-6 flex items-center"
    >
      <div className="max-w-6xl mx-auto text-center space-y-10 w-full">
        {/* Headline */}
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4 md:mb-6 garamond">See Wault in Action</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Watch how Wault secures your deliveries with simplicity, security,
            and style. Real-world use, real-world durability.
          </p>
        </div>

        {/* Rotated & Bigger Video */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-800">
            <video
              className="absolute top-1/2 left-1/2 h-auto w-auto transform -translate-x-1/2 -translate-y-1/2 -rotate-90 scale-125 object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/v1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
