import { ArrowRight, CheckCircle, Zap } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm mb-8">
            <Zap className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm text-gray-300">Limited time offer - Free installation included</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent mb-6">
            Ready to Level Up
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Your Delivery Game?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join thousands of people who already made the switch to secure, smart deliveries. 
            Your packages deserve better than sitting on your doorstep.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
              Get Your Wault Now
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 border border-gray-600 text-gray-300 rounded-full text-lg font-semibold hover:border-gray-400 hover:text-white transition-all">
              Schedule Demo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            <div className="flex items-center space-x-3 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="text-gray-300">30-day money back guarantee</span>
            </div>
            <div className="flex items-center space-x-3 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="text-gray-300">Free professional installation</span>
            </div>
            <div className="flex items-center space-x-3 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="text-gray-300">24/7 customer support</span>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Starting at $299 with flexible payment options available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;