import {
  PackageCheck,
  Fingerprint,
  LockKeyhole,
  WifiOff,
} from "lucide-react";

const steps = [
  {
    title: "Package Drop",
    description:
      "The delivery person drops your package into the top compartment.",
    icon: PackageCheck,
  },
  {
    title: "Auto Lock",
    description: "The top locks automatically after closing. No apps needed.",
    icon: LockKeyhole,
  },
  {
    title: "Fingerprint Unlock",
    description: "You open the bottom compartment using your fingerprint.",
    icon: Fingerprint,
  },
  {
    title: "No Internet Required",
    description: "No Wi-Fi, no apps — just secure, simple tech.",
    icon: WifiOff,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative bg-gray-900 py-32 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4">
            How It Works
          </h2>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
            Wault is your smart parcel keeper built for real life. We made it
            simple because nobody has time for complicated setups.
          </p>
        </div>

        {/* Zigzag section */}
        <div className="relative w-full h-80">
          {/* SVG Line */}
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 400"><path d="M96.86097717285156,5.381160736083984C113.98653770446776,23.699545955657957,239.21523765563967,198.03586475133895,277.1300354003906,198.20626831054688C315.0448331451416,198.3766718697548,454.0448307800293,7.089680156707764,495.964111328125,7.174882411956787C537.8833918762207,7.260084667205811,697.2555767822265,180.86995023965835,718.3856201171875,199.10313415527344" fill="none" stroke-width="1" stroke="url(&quot;#SvgjsLinearGradient1008&quot;)" stroke-linecap="round"></path><defs><linearGradient id="SvgjsLinearGradient1008"><stop stop-color="hsl(230, 55%, 50%)" offset="0"></stop><stop stop-color="hsl(230, 55%, 70%)" offset="1"></stop></linearGradient></defs></svg>

          {/* Step Cards */}
          <div className="absolute inset-0 flex justify-between items-center px-10">
            {steps.map((step, index) => {
              const isUp = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`w-56 p-5 bg-gray-800/70 border border-gray-700 rounded-2xl backdrop-blur-md text-center pointer-events-auto transition-transform duration-300 hover:scale-105 ${
                    isUp ? "translate-y-[-100px]" : "translate-y-[100px]"
                  }`}
                >
                  <div className="w-14 h-14 mx-auto mb-3 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl">{step.title}</h3>
                  <p className="text-lg text-gray-400">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center mt-15">
          <div className="inline-flex items-center px-6 py-3 rounded-full backdrop-blur-sm mt-10">
            <span className="text-green-400 font-semibold mr-2"></span>
            <span className="text-gray-300 text-2xl"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
