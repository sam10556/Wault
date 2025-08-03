// import { useState, useEffect } from "react";
import HowItWorks from "./component/HowItWorks";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Features from "./component/Features";
import Testimonials from "./component/Testimonials";
import Footer from "./component/Footer";
import Showcase from "./component/Showcase";
import AboutUs from "./component/AboutUs";

function App() {
//   const [showComingSoon, setShowComingSoon] = useState(false);
//   const [animatePunchline, setAnimatePunchline] = useState(false);
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });
//   const targetDate = new Date("Aug 4,2025 06:00:00").getTime();
//   // Countdown Timer
// useEffect(() => {
//  // Replace with your actual date/time

//   const interval = setInterval(() => {
//     const now = new Date().getTime();
//     const distance = targetDate - now;

//     if (distance < 0) {
//       clearInterval(interval);
//       setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//     } else {
//       setTimeLeft({
//         days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((distance / (1000 * 60)) % 60),
//         seconds: Math.floor((distance / 1000) % 60),
//       });
//     }
//   }, 1000);

//   return () => clearInterval(interval);
// }, []);

//   // Trigger animations
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setAnimatePunchline(true);
//       setTimeout(() => setShowComingSoon(true), 600);
//     }, 3000);

//     return () => clearTimeout(timeout);
//   }, []);

  return (
    // <div className="min-h-screen animated-background bg-gradient-to-r from-black via-gray-900 to-black text-white flex items-center justify-center relative overflow-hidden px-4">
    //   {/* Punchline Animation */}
    //   <div
    //     className={`absolute transition-all duration-700 z-20 text-center ${
    //       animatePunchline
    //         ? "transform -translate-y-[100vh] scale-75"
    //         : "transform translate-y-0 scale-100"
    //     }`}
    //   >
    //     <p className="text-2xl md:text-5xl font-semibold tracking-wide garamond">
    //       <span className="text-blue-600">CHILL,</span>{" "}
    //       <span className="text-gray-200">YOUR PACKAGES ARE LOCKED IN.</span>
    //     </p>
    //   </div>

    //   {/* Coming Soon Section */}
    //   <div
    //     className={` transition-transform duration-700 text-center z-10 flex flex-col items-center ${
    //       showComingSoon
    //         ? "opacity-100 translate-y-0"
    //         : "opacity-0 translate-y-10"
    //     }`}
    //   >
    //     <img
    //       src="/Image_1.png"
    //       alt="Logo"
    //       className="w-64 -mt-30 sm:w-80 md:w-[28rem] lg:w-[32rem] object-contain drop-shadow-xl"
    //     />

    //     <h1 className="text-6xl md:text-8xl font-bold tracking-wide garamond md:-mt-20 lg:-mt-30">
    //       C<span className="inline-block">O</span>
    //       <span className="inline-block">M</span>
    //       <span className="inline-block">I</span>
    //       <span className="inline-block">N</span>
    //       <span className="inline-block">G</span>
    //     </h1>
    //     <h2 className="text-5xl garamond text-blue-200 font-light mb-10">SOON</h2>

    //     {/* Countdown */}
    //     <div className="grid grid-cols-4 gap-4 mb-20">
    //       {[
    //         { label: "Days", value: timeLeft.days },
    //         { label: "Hours", value: timeLeft.hours },
    //         { label: "Minutes", value: timeLeft.minutes },
    //         { label: "Seconds", value: timeLeft.seconds },
    //       ].map(({ label, value }) => (
    //         <div key={label} className="p-2">
    //           <div className="text-4xl font-bold">
    //             {value.toString().padStart(2, "0")}
    //           </div>
    //           <div className="text-sm uppercase tracking-widest text-blue-200">
    //             {label}
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    
    <div className="garamond">
    <Header/>
    <Hero/>
    <Showcase/>
    <Features/>
    <HowItWorks/>
    <AboutUs/>
    <Testimonials/>
    <Footer/>
    </div>
  );
}

export default App;
