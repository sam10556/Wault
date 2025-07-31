import { Package, Fingerprint, Bell, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Package,
      title: "Delivery Arrives",
      description: "Driver drops your package in the Wault using their secure delivery code.",
      step: "01"
    },
    {
      icon: Bell,
      title: "You Get Notified",
      description: "Instant notification hits your phone - no more wondering if your stuff arrived.",
      step: "02"
    },
    {
      icon: Fingerprint,
      title: "Scan & Access",
      description: "Walk up, scan your finger, and boom - your package is ready to grab.",
      step: "03"
    },
    {
      icon: CheckCircle,
      title: "Secure & Done",
      description: "Wault automatically locks and resets for the next delivery. It's that simple.",
      step: "04"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            How It Works
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"> (It's Actually Easy)</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We made it dummy simple because nobody got time for complicated setups. Here's the tea on how Wault works.
          </p>
        </div>

        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <svg className="w-full h-24" viewBox="0 0 800 100">
              <path
                d="M100 50 Q250 20 400 50 T700 50"
                stroke="url(#gradient)"
                strokeWidth="2"
                fill="none"
                className="opacity-30"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="relative mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-sm font-bold text-black">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gray-800/30 border border-gray-700 rounded-full backdrop-blur-sm">
            <span className="text-green-400 font-semibold mr-2">✨</span>
            <span className="text-gray-300">Average setup time: 5 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;