import { Fingerprint, ThumbsUp, Shield, Clock, Hammer, Lock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Fingerprint,
      title: "Biometric Security",
      description:
        "Your fingerprint is the only key. No more stolen packages or sus deliveries.",
      color: "blue",
    },
    {
      icon: Shield,
      title: "Weather Proof",
      description:
        "Rain or shine, Wault's got you covered. This thing is literally built different.",
      color: "green",
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description:
        "Midnight snack delivery? We got you. Access your stuff whenever you need it.",
      color: "yellow",
    },
    {
      icon: Lock,
      title: "Multi-User Access",
      description:
        "Family sharing made simple. Add up to 20 users because sharing is caring.",
      color: "cyan",
    },
    {
      icon: ThumbsUp, // Use an appropriate icon (e.g., from lucide-react)
      title: "Effortless Setup",
      description:
        "No tech headaches. Just place it, lock it, and you're good to go.",
      color: "purple",
    },
    {
      icon: Hammer, // Replace with a suitable durability icon (e.g., Hammer or ShieldCheck)
      title: "Built to Last",
      description:
        "Made with industrial-grade materials to handle real-world wear and tear.",
      color: "pink",
    },
  ];
  

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 group-hover:shadow-blue-500/25",
      purple: "from-purple-500 to-purple-600 group-hover:shadow-purple-500/25",
      green: "from-green-500 to-green-600 group-hover:shadow-green-500/25",
      yellow: "from-yellow-500 to-yellow-600 group-hover:shadow-yellow-500/25",
      pink: "from-pink-500 to-pink-600 group-hover:shadow-pink-500/25",
      cyan: "from-cyan-500 to-cyan-600 group-hover:shadow-cyan-500/25",
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4 garamond">
            Features That Actually Slap
          </h2>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
            We didn't just build a box - we created the ultimate delivery
            experience that's straight up revolutionary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${getColorClasses(
                  feature.color
                )} mb-6 group-hover:shadow-lg transition-all duration-300`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-gray-100 transition-colors">
                {feature.title}
              </h3>

              <p className="text-gray-400 text-xl  leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
