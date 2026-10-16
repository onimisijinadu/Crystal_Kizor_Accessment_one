import { motion } from 'motion/react';

import { Services } from '../data/Services';

export const ServiceCards = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-3"
      // className="flex flex-1 flex-wrap"
    >
      {Services.map((service, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="relative sm:h-50 max-h-90 w-full rounded-xl overflow-hidden flex flex-1 flex-col justify-end p-6 group cursor-pointer shadow-lg"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${service.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-lg font-bold text-white tracking-wide">
              {service.name}
            </h2>
            <p className="text-xs text-zinc-300 mt-1 font-light">
              {service.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
