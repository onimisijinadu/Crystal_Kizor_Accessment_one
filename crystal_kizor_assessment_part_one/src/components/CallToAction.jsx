import {
  ArrowRight,
  BookText,
  GraduationCap,
  Mail,
} from 'lucide-react';
import { motion } from 'motion/react';

import action from '../assets/Community Centre Project/IMG_2102 2.PNG';

const Refer = [
  {
    label: "Work with me",
    detail: "Collaborations, speaking, projects",
    icon: Mail,
  },
  {
    label: "Support the initiatives",
    detail: "Education, youth, community",
    icon: GraduationCap,
  },
  {
    label: "Read my writing",
    detail: "Research, ideas and reflections",
    icon: BookText,
  },
];

export const CallToAction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full min-h-[400px] overflow-hidden max-w-7xl mx-auto my-12 px-6 sm:px-10 lg:px-16 py-16 text-white group"
    >
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${action})`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40 z-10" />

      <div className="relative z-20 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-16">
        {/*Headline and CTA */}
        <div className="max-w-xl space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-sans font-medium">
            Let&apos;s Build Together
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight">
            Ideas. Partnerships. Impact.
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
            Whether you&apos;re a collaborator, client, student, or member of
            the community, I&apos;d love to hear from you.
          </p>
          <div className="pt-2">
            <button className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-transparent border border-white text-white hover:bg-white hover:text-black transition-colors text-sm font-medium tracking-wide">
              <span>Get in touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/*Links/References List */}
        <div className="flex flex-col gap-6 w-full lg:w-auto lg:border-l lg:border-white/20 lg:pl-16">
          {Refer.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group/item flex items-center justify-between gap-6 cursor-pointer text-white"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white group-hover/item:bg-white group-hover/item:text-black transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif font-medium text-base sm:text-lg tracking-wide group-hover/item:text-zinc-200 transition-colors">
                      {item.label}
                    </span>
                    <span className="font-sans text-xs text-zinc-400 font-light tracking-wide">
                      {item.detail}
                    </span>
                  </div>
                </div>
                <div className="text-white/60 group-hover/item:text-white group-hover/item:translate-x-1 transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
