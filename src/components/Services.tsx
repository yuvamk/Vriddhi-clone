import { Sparkles, Globe, Users, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: <Sparkles className="h-8 w-8 text-blue-600" />,
    title: "Shifting The Narratives",
    description: "We help you in shifting all your negative PR into positive ones using our strategic UGC push."
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Building An Online Presence",
    description: "We give your brand a much-needed push in all the relevant communities and forums."
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Building A Personal Brand",
    description: "People relate with founders much better than they relate with Brands. We help you become more relatable."
  },
  {
    icon: <BarChart className="h-8 w-8 text-blue-600" />,
    title: "Building Your Content Funnel",
    description: "Boost website traffic by 20% and brand awareness by 35%! Our all-in-one solution helps build an impeccable content strategy."
  }
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
          What we do
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={ref}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}