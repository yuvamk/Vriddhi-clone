import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  {
    number: "50K+",
    description: "average Impressions/per week/per brand"
  },
  {
    number: "15%",
    description: "Avg. Increase in sales within 3 months of our content service."
  },
  {
    number: "30%",
    description: "Better engagement on personal accounts within 2 months"
  },
  {
    number: "20+",
    description: "Business Impacted so far"
  }
];

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-16">
          The Difference We've Made So Far
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" ref={ref}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</h3>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}