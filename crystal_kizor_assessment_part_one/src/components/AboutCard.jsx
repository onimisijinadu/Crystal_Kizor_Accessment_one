import {
  useEffect,
  useState,
} from 'react';

import {
  ArrowLeftCircle,
  ArrowRight,
  ArrowRightCircle,
} from 'lucide-react';
import { motion } from 'motion/react';

import { ServicesDetails } from '../data/ServiceDetails';

export const AboutCard = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeIndex = ServicesDetails[selectedIndex];

  // const NextBlog = () => {
  //   setSelectedIndex((prev) =>
  //     prev <= ServicesDetails.length - 1 ? prev + 1 : prev,
  //   );
  // };
  const NextBlog = () => {
    setSelectedIndex((prev) => (prev + 1) % ServicesDetails.length);
  };
  const PrevBlog = () => {
    setSelectedIndex(
      (prev) => (prev - 1 + ServicesDetails.length) % ServicesDetails.length,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      NextBlog();
    }, 6000);

    return () => clearInterval(interval);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={true}
      // onViewportEnter={{}}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden font-serif flex flex-col lg:flex-row gap-4 items-center max-w-screen bg-gray-300/50 text-black/60"
    >
      <div className="relative h-[380px] sm:h-[460px]  w-full flex flex-col gap-3 px-10 lg:p-16 shadow-lg group pointer-events-none justify-end">
        <div
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110`}
          style={{ backgroundImage: `url(${activeIndex.image})` }}
        ></div>
        <div className="bg-linear-to-t from-black/90 via-black/30 to-transparent"></div>
        <div className="z-20 flex flex-col gap-1 shadow-2xl py-5">
          <h3 className="text-white text-2xl md:text-3xl font-bold">
            {activeIndex.name}
          </h3>
          <p className="text-white/90 text-sm font-normal text-shadow-2xs shadow-2xl">
            {activeIndex.desc}
          </p>
          <div className="flex items-center gap-2 text-white font-semibold text-shadow-blue-100">
            <button className="py-1 hover:text-black/10 border-b border-b-white text-sm">
              View work
            </button>
            <ArrowRight className="w-5 h-5 mt-1.5" />
          </div>
        </div>
      </div>

      {/* Featured initiative */}
      <div className="flex flex-col items-start gap-3 w-[full] lg:max-w-[470px] ml-6 py-4">
        <span className="font-semibold text-sm uppercase tracking-widest">
          Featured Initiative
        </span>
        <h2 className="font-bold text-2xl md:text-3xl tracking-wide">
          {activeIndex.name}
        </h2>
        <p className="text-sm tracking-wider font-normal">
          {activeIndex.detail}
        </p>
        <div className="flex items-center gap-2 max-w-[250px]">
          <button className="bg-transparent border-b border-b-gray-900 text-gray-800 font-sans font-semibold tracking-tight flex items-center gap-2 max-w-fit py-2 cursor-pointer hover:border-b-slate-600 hover:text-slate-600">
            Explore {activeIndex.name.slice(0, 11)}{" "}
          </button>
          <ArrowRight className="w-6 h-6 mt-1.5" />
        </div>
      </div>

      <div className="absolute lg:static flex justify-between lg:justify-center gap-4 top-[30%] lg:max-w-[200px] sm:top-[35%] w-full max-w-screen px-4 items-center transition-transform duration-300 ease-in text-gray-900/90 font-bold overflow-hidden">
        <button
          onClick={PrevBlog}
          className="bg-white/40 hover:text-white hover:bg-black/70 rounded-full w-10 h-10"
        >
          <ArrowLeftCircle className="w-10 h-10" />
        </button>
        <button
          onClick={NextBlog}
          className="bg-white/40 hover:text-white hover:bg-black/70 rounded-full w-10 h-10"
        >
          <ArrowRightCircle className="w-10 h-10" />
        </button>
      </div>
    </motion.div>
  );
};
