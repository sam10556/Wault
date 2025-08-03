import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Chen",
      location: "San Francisco, CA",
      rating: 5,
      text: "Wault is literally the best thing that happened to my apartment. No more package thieves, no more missed deliveries. This thing is straight fire! 🔥",
      avatar: "AC"
    },
    {
      name: "Maya Rodriguez",
      location: "Austin, TX",
      rating: 5,
      text: "Been using Wault for 6 months and it's absolutely ELITE. The biometric security is so smooth, and I never worry about my packages anymore. 10/10 would recommend!",
      avatar: "MR"
    },
    {
      name: "Jordan Kim",
      location: "New York, NY",
      rating: 5,
      text: "OK but like... why didn't someone invent this sooner? Wault is a whole vibe. My delivery anxiety is completely gone and my packages are always safe. It's giving main character energy fr.",
      avatar: "JK"
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            People Are
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Obsessed</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it - check out what actual users are saying about their Wault experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.location}</div>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-600 opacity-50" />
                <p className="text-gray-300 leading-relaxed pl-6">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-lg font-semibold text-white">4.9/5</span>
            </div>
            <div className="text-sm">
              <span className="font-semibold text-white">2,847</span> reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;