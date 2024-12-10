import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-8">
              <span className="text-blue-600">Do What's</span><br />
              <span className="text-blue-600">Best For Your</span><br />
              <span className="text-blue-600">Brand.</span>
            </h1>
            <button className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300">
              BOOK A MEETING
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800"
              alt="Social Media Marketing"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200/30 to-blue-300/30 rounded-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}