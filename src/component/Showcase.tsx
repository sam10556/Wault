const Showcase = () => {
    return (
      <section id="showcase" className="h-[100vh] bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          {/* Headline */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              See Wault in Action
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Watch how Wault secures your deliveries with simplicity, security, and style. Real-world use, real-world durability.
            </p>
          </div>
  
          {/* Video */}
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl border border-gray-800 mx-auto max-w-4xl">
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/video.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    );
  };
  
  export default Showcase;
  