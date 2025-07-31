import CTA from "./component/CTA";
import Features from "./component/Features";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import HowItWorks from "./component/HowItWorks";
import Testimonials from "./component/Testimonials";

function App() {
  return (
      <div className="min-h-screen bg-black text-white">
      <Header/>
      <Hero/>
      <Features/>
      <HowItWorks/>
      <Testimonials/>
      <CTA/>
      <Footer/>
    </div>
  );
}

export default App;
