import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Hansaben Paramar",
      location: "San Francisco, CA",
      rating: 5,
      text: "Wault is literally the best thing that happened to my apartment. No more package thieves, no more missed deliveries. This thing is straight fire! 🔥",
      avatar: "HP",
    },
    {
      name: "Vithal Radadiya",
      location: "Austin, TX",
      rating: 4,
      text: "Been using Wault for 6 months and it's absolutely ELITE. The biometric security is so smooth, and I never worry about my packages anymore. 10/10 would recommend!",
      avatar: "VR",
    },
    {
      name: "Travis Scott",
      location: "New York, NY",
      rating: 5,
      text: "OK but like... why didn't someone invent this sooner? Wault is a whole vibe. My delivery anxiety is completely gone and my packages are always safe. It's giving main character energy fr.",
      avatar: "TS",
    },
    {
      name: "Ananya Iyer",
      location: "Mumbai, India",
      rating: 5,
      text: "Game changer for my apartment complex. Monsoon-proof and secure AF. Delivery guys love it, I love it more.",
      avatar: "AI",
    },
    {
      name: "Rohit Mehta",
      location: "Delhi, India",
      rating: 5,
      text: "From stolen packages to zero stress. Wault is the tech flex every building needs.",
      avatar: "RM",
    },
    {
      name: "Priya Nambiar",
      location: "Bangalore, India",
      rating: 4,
      text: "Solid build, sleek design, works perfectly with all my deliveries. Worth every rupee.",
      avatar: "PN",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4 md:mb-6 garamond">
            People Are
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {" "}
              Obsessed
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Real stories from real users. No scripts, just pure Wault energy.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-yellow-500/60 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Avatar + Name */}
              <div className="flex items-center mb-5">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4 ring-2 ring-offset-2 ring-offset-black ring-blue-400 group-hover:ring-yellow-400 transition">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.location}
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform"
                  />
                ))}
              </div>

              {/* Review Text */}
              <div className="relative">
                <Quote className="absolute -top-3 -left-3 w-8 h-8 text-gray-600 opacity-30" />
                <p className="text-gray-300 leading-relaxed pl-6 text-base">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Rating Summary */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-lg font-semibold text-white">4.9/5</span>
            </div>
            <div className="text-sm">
              <span className="font-semibold text-white">3,452</span> reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
