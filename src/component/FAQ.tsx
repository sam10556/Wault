import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Wault?",
    answer:
      "Wault is a smart, fingerprint-secured parcel locker designed to keep your online deliveries safe and secure when you're not at home.",
  },
  {
    question: "How does Wault work?",
    answer:
      "Wault has two compartments—one for delivery drop-offs and one that only you can access using a fingerprint lock. Delivery personnel simply drop the package in the top slot, and it's safely stored until you're ready.",
  },
  {
    question: "Is Wault weatherproof?",
    answer:
      "Yes! Wault is fully weatherproof and built to withstand rain, dust, and sun—your parcels stay safe in any condition.",
  },
  {
    question: "Do I need an app to use Wault?",
    answer:
      "Nope! Wault works completely offline. No phones or internet needed—just a fingerprint.",
  },
  {
    question: "What material is Wault made of?",
    answer:
      "Wault is made from premium, matte-black coated iron—strong, durable, and sleek.",
  },
  {
    question: "Can I install Wault into my wall or gate?",
    answer:
      "Yes, Wault can be integrated into walls, gates, or parking areas, especially in apartment buildings or individual homes.",
  },
  {
    question: "What if someone tries to break into it?",
    answer:
      "Future versions of Wault will include a vibration sensor that detects tampering and sends an alert via the app. The current product is highly durable.",
  },
  {
    question: "Can I customize the color or size?",
    answer:
      "Absolutely! We offer color and size customizations. You can even request design changes to match your space.",
  },
  {
    question: "Is Wault suitable for apartments or just houses?",
    answer:
      "Both! For apartments, we offer building-level integration where each flat can have its own compartment.",
  },
  {
    question: "Who is Wault for?",
    answer:
      "Wault is perfect for busy professionals, students, frequent travelers, and anyone who shops online and wants secure, no-hassle deliveries.",
  },
  {
    question: "What happens if my fingerprint doesn’t work or gets injured?",
    answer:
      "You can register multiple fingerprints (like your left and right thumbs), and we also offer an optional backup access system using a USB key provided with the product.",
  },
  {
    question: "Can delivery partners easily figure out where to place the parcel?",
    answer:
      "Yes! Wault comes with a clear instruction label on top and a visible parcel drop flap that makes it obvious for couriers.",
  },
  {
    question: "Can Wault store large packages or just small ones?",
    answer:
      "The lower compartment is spacious enough for medium to large parcels — roughly the size of 3–4 shoeboxes. It can be customised for your use. Wault is made BTS (Built to suit).",
  },
  {
    question: "Is there a way to get notified when a parcel is delivered?",
    answer:
      "Currently, Wault is offline-first for simplicity and security, but we’re working on a version with optional app-based alerts.",
  },
  {
    question: "Will Wault rust or lose its color over time?",
    answer:
      "No worries — it’s made of rust-resistant iron with a long-lasting matte black powder coat that withstands the elements.",
  },
  {
    question: "Can I move Wault if I change my house?",
    answer:
      "Definitely! While it's designed for sturdy mounting, it can be uninstalled and re-mounted at your new home.",
  },
  {
    question: "Does Wault support integration with my smart home?",
    answer:
      "Not yet, but future models may include Bluetooth or app-based integration for smart homes.",
  },
  {
    question: "Can it be used for food/grocery deliveries too?",
    answer:
      "Wault isn’t insulated for perishable items, but it's great for shelf-stable groceries or dry food packages. It can hold food products for a good amount of time (1–2 hours) but not long.",
  },
  {
    question: "How many fingerprints can I register?",
    answer: "You can register up to 20 fingerprints — ideal for households or even office setups.",
  },
  {
    question: "Can Wault be painted or branded with our company logo?",
    answer:
      "Yes! We offer branding and custom design options for businesses, residential complexes, or gifting purposes.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-xl bg-gray-800/40 backdrop-blur-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 pb-5 text-gray-300 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
