const AboutUs = () => {
  return (
    <section id="about" className="relative bg-black text-white py-20 px-6 overflow-hidden">
      {/* Background Blur */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        {/* Team Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Team Image */}
          <img
            src="/team.jpg"
            alt="Our Team"
            className="w-full rounded-2xl shadow-lg object-cover max-h-[500px]"
          />

          {/* Team Description */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Meet the Team Behind <span className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">Wault</span>
            </h2>
            <div className="text-gray-400 text-2xl leading-relaxed space-y-1">
              <p ><span className="text-white font-medium">Founder:</span> Fatema Gandhi</p>
              <p><span className="text-white font-medium">Coordinator:</span> Samar</p>
              <p><span className="text-white font-medium">Design & Visuals:</span> Krisha, Vishwa</p>
              <p><span className="text-white font-medium">Marketing:</span> Niraj, Anshul</p>
              <p><span className="text-white font-medium">Finance Manager:</span> Niket</p>
              <p><span className="text-white font-medium">Business Strategists:</span> Falak, Ruhaan</p>
            </div>
          </div>
        </div>

        {/* Origin Story Section */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 md:p-12 shadow-lg space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold">
            The Origin of <span className="bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">Wault</span>
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            Wault was born from a personal experience — a missed delivery of a valuable parcel due to no one being home. That moment of frustration turned into inspiration.
          </p>
          <p className="text-lg text-gray-400">
            With Wault, we envisioned a secure, fingerprint-protected parcel box for busy professionals, students, and content creators — anyone who can’t always be home. Now your deliveries wait for you, not the other way around.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
