import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "I've been loving the constant communication and updates from the team, their work ethic is impeccable. 10/10 recommend their UGC service.",
    author: "Lindsey Wallace"
  }
  // Add more testimonials as needed
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
          What People Are Saying
        </h2>

        <div className="relative">
          <div className="flex justify-center items-center space-x-8">
            <button onClick={prev} className="text-blue-600 hover:text-blue-800">
              <ChevronLeft size={40} />
            </button>

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-2xl text-center"
            >
              <Quote className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <p className="text-lg mb-4">{testimonials[currentIndex].text}</p>
              <p className="font-semibold text-blue-600">{testimonials[currentIndex].author}</p>
            </motion.div>

            <button onClick={next} className="text-blue-600 hover:text-blue-800">
              <ChevronRight size={40} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}