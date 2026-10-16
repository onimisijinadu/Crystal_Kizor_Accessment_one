import {
  useEffect,
  useRef,
  useState,
} from 'react';

import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import {
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from 'react-icons/fa6';

import { AboutCard } from '../components/AboutCard';
import { CallToAction } from '../components/CallToAction';
import { Navbar } from '../components/Navbar';
import { ServiceCards } from '../components/ServiceCards';
import { useWindowResize } from '../hooks/useWindowResize';

const focuses = [
  "ARCHITECT",
  "DESIGNER",
  "ENTREPRENEUR",
  "RESEARCHER",
  "CREATOR",
];

export const HomePage = () => {
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const width = useWindowResize();

  const toggleNavBar = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (width >= 1024) {
      setIsOpen(false);
    }
  }, [width]);

  useEffect(() => {
    const handleMouseDown = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsOpen(false);
    };

    document.addEventListener("mouseover", handleMouseDown);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mouseover", handleMouseDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen text-white">
      <Navbar isOpen={isOpen} toggleNavBar={toggleNavBar} rel={menuRef} />
      {isOpen && (
        <div
          onClick={toggleNavBar}
          className="bg-black/75 absolute w-full h-full z-40 top-"
        ></div>
      )}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-full min-h-[640px] lg:h-[90vh] flex items-center overflow-hidden bg-[url('/Architectural_Materials_Mood_Board.png')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-linear-to-t sm:bg-linear-to-r from-black/95 via-black/90 sm:via-black/75 to-black/30 z-0" />

        <div className="absolute inset-0 bg-black/20 z-0" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-x-auto top-0 h-3/4 sm:inset-x-auto sm:top-auto sm:bottom-0 sm:right-0 lg:right-4 sm:h-[92%] lg:h-[96%] flex justify-end items-end z-10 pointer-events-none"
        >
          <img
            src="/Confident_Executive_Portrait.png"
            alt="Crystal Kizor"
            className="h-full w-auto max-w-none object-contain object-bottom opacity-80 md:opacity-100 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          />
          <div className="sm:hidden blcok absolute  inset-0 bg-linear-to-t from-black/60 via-black/0 z-0" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-20 w-full top-25 sm:top-0 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16"
        >
          <div>
            {/* Roles / Focus points */}
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm tracking-[0.2em] uppercase text-zinc-300 font-medium">
              {focuses.map((focus, index) => (
                <span key={index} className="inline-flex items-center">
                  {focus}
                  {index < focuses.length - 1 && (
                    <span className="ml-2.5 text-zinc-500 font-bold">·</span>
                  )}
                </span>
              ))}
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.25rem] font-normal tracking-tight text-white leading-[1.18] drop-shadow-md">
              Building people, <br className="hidden sm:inline" />
              places and ideas for <br className="hidden sm:inline" />a more
              equitable future.
            </h1>

            {/* Paragraph */}
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light max-w-lg drop-shadow-sm">
              I&apos;m Crystal Kizor - an architect, designer, entrepreneur,
              speaker, researcher, and creator. Through a growing ecosystem of
              brands and initiatives, I work at the intersection of design,
              education, faith, and impact.
            </p>

            {/* Button */}
            <div className="pt-2">
              <button className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/60 hover:border-white bg-black/40 hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium tracking-wide text-white">
                <span>Explore my work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.section>
      <section className="mt-6 flex flex-col lg:flex-row items-center gap-3 px-6 sm:px-10 lg:px-16 py-10">
        <div className="w-full h-full lg:max-w-[410px] font-serif flex flex-col gap-4 lg:mr-4">
          <span className="text-gray-800 font-semibold text-sm leading-tight md:pb-5">
            THE ECOSYSTEM
          </span>
          <div className="flex flex-col gap-3">
            <h1 className="text-gray-900 font-bold text-2xl md:text-3xl leading-9">
              Seven Initiatives. <br className="hidden md:inline" /> One Vision.
            </h1>
            <p className="text-gray-800 text-sm font-medium">
              Each brand and initiative plays a part in a larger mission, to
              create meaningful spaces, expand opportunities, and build a more
              inclusive and sustainable future.
            </p>
          </div>
          <button className="bg-transparent border-b border-b-gray-900 text-gray-800 font-sans font-semibold tracking-tight flex items-center gap-2 max-w-fit py-2 cursor-pointer hover:border-b-slate-600 hover:text-slate-600">
            Learn more about my work <ArrowRight className="w-3 h-3 mt-1.5" />
          </button>
        </div>
        <ServiceCards />
      </section>
      <section>
        <AboutCard />
      </section>
      {/* call to action section */}
      <section className="space-y-6 mt-5">
        <CallToAction />
      </section>
      <footer className="flex flex-col gap-3 text-black pb-5 px-10 lg:px-16 font-serif">
        <div className="flex flex-col md:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex items-center max-w-[250px] max-h-[50px]">
            <img
              src="/Crystal_Kizor_Logo.png"
              alt="Crystal Kizor Logo"
              className="flex object-contain w-full h-full"
            />
          </div>
          <div className="flex flex-col d:items-center gap-3 md:flex-row md:mt-3">
            <a
              href="#About"
              className="cursor-pointer hover:text-gray-900 font-medium "
            >
              About
            </a>
            <a
              href="#Work"
              className="cursor-pointer hover:text-gray-900 font-medium "
            >
              Work
            </a>
            <a
              href="#Initiatives"
              className="cursor-pointer hover:text-gray-900 font-medium "
            >
              Initiatives
            </a>
            <a
              href="#Writing"
              className="cursor-pointer hover:text-gray-900 font-medium "
            >
              Writing
            </a>
            <a
              href="#Speaking"
              className="cursor-pointer hover:text-gray-900 font-medium "
            >
              Speaking
            </a>
            <a
              href="#Contact"
              className="cursor-pointer hover:text-gray-900 font-medium "
            >
              Contact
            </a>
          </div>
          <div className="flex items-center gap-4 text-black sm:mt-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500 transition-colors"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-500 transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="hover:text-zinc-400 transition-colors"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="flex gap-4 flex-col md:flex-row justify-between mt-5">
          <p className="text-black/60">
            &copy;2026 Crystal Kizor. All rights reserved{" "}
          </p>
          <p className="text-black/60">
            Designing a more inclusive and sustainable future
          </p>
        </div>
      </footer>
    </div>
  );
};
