import { motion } from "framer-motion";
import {
  Fingerprint,
  ThumbsUp,
  Shield,
  Clock,
  Hammer,
  Lock,
} from "lucide-react";

type FeatureColor = "blue" | "purple" | "green" | "yellow" | "pink" | "cyan";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  color: FeatureColor;
}

const getColorClasses = (color: FeatureColor): string => {
  const colors: Record<FeatureColor, string> = {
    blue: "from-blue-500 to-blue-600 group-hover:shadow-blue-500/25",
    purple: "from-purple-500 to-purple-600 group-hover:shadow-purple-500/25",
    green: "from-green-500 to-green-600 group-hover:shadow-green-500/25",
    yellow: "from-yellow-500 to-yellow-600 group-hover:shadow-yellow-500/25",
    pink: "from-pink-500 to-pink-600 group-hover:shadow-pink-500/25",
    cyan: "from-cyan-500 to-cyan-600 group-hover:shadow-cyan-500/25",
  };
  return colors[color];
};

const Features = () => {
  const featuresLeft: Feature[] = [
    {
      icon: Fingerprint,
      title: "Biometric Security",
      description: "Your fingerprint is the only key. No more stolen packages.",
      color: "blue",
    },
    {
      icon: Shield,
      title: "Weather Proof",
      description: "Rain or shine, Wault's got you covered.",
      color: "green",
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Access your stuff whenever you need it.",
      color: "yellow",
    },
  ];

  const featuresRight: Feature[] = [
    {
      icon: Lock,
      title: "Multi-User Access",
      description: "Add up to 20 users because sharing is caring.",
      color: "cyan",
    },
    {
      icon: ThumbsUp,
      title: "Effortless Setup",
      description: "Just place it, lock it, and go.",
      color: "purple",
    },
    {
      icon: Hammer,
      title: "Built to Last",
      description: "Industrial-grade durability.",
      color: "pink",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4 md:mb-6 garamond">
            Features That Actually Slap
          </h2>
          <p className="text-lg sm:text-xl md:text-3xl text-gray-400 max-w-4xl mx-auto">
            We didn't just build a box – we created the ultimate delivery
            experience.
          </p>
        </div>

        {/* Features Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          {/* Left Features */}
          <div className="flex flex-col gap-8 md:gap-12 items-center md:items-end order-2 md:order-1">
            {featuresLeft.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.25 }}
                className="flex items-center gap-4 md:gap-6"
              >
                <div className="text-center md:text-right max-w-xs">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400">
                    {feature.description}
                  </p>
                </div>
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${getColorClasses(
                    feature.color
                  )}`}
                >
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Product in Center */}
          <div className="relative flex items-center justify-center order-1 md:order-2">
            <motion.img
              src="/p3.png"
              alt="Wault Product"
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 z-10 object-contain drop-shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            />
            {/* Lines */}
            <div className="absolute w-full h-full pointer-events-none hidden md:block">
              <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Left lines */}
                <line
                  x1="0%"
                  y1="20%"
                  x2="50%"
                  y2="35%"
                  stroke="gray"
                  strokeWidth="2"
                />
                <line
                  x1="0%"
                  y1="50%"
                  x2="50%"
                  y2="50%"
                  stroke="gray"
                  strokeWidth="2"
                />
                <line
                  x1="0%"
                  y1="80%"
                  x2="50%"
                  y2="65%"
                  stroke="gray"
                  strokeWidth="2"
                />
                {/* Right lines */}
                <line
                  x1="100%"
                  y1="20%"
                  x2="50%"
                  y2="35%"
                  stroke="gray"
                  strokeWidth="2"
                />
                <line
                  x1="100%"
                  y1="50%"
                  x2="50%"
                  y2="50%"
                  stroke="gray"
                  strokeWidth="2"
                />
                <line
                  x1="100%"
                  y1="80%"
                  x2="50%"
                  y2="65%"
                  stroke="gray"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>

          {/* Right Features */}
          <div className="flex flex-col gap-8 md:gap-12 items-center md:items-start order-3">
            {featuresRight.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.25 }}
                className="flex items-center gap-4 md:gap-6"
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${getColorClasses(
                    feature.color
                  )}`}
                >
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="text-center md:text-left max-w-xs">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
