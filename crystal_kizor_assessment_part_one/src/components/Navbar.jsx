import { useState } from 'react';

import {
  MenuIcon,
  XIcon,
} from 'lucide-react';

export const Navbar = ({ isOpen, toggleNavBar, rel }) => {
  const [isActive, setIsActive] = useState("home");

  return (
    <div
      ref={rel}
      className="relative flex items-center justify-between p-4 bg-[#FAF9F7] gap-4"
    >
      <div className="flex items-center max-w-[250px] max-h-[50px]">
        <img
          src="/Crystal_Kizor_Logo.png"
          alt="Crystal Kizor Logo"
          className="flex object-contain w-full h-full"
        />
      </div>

      <div
        className={`flex items-center justify-between gap-4 ${isOpen ? "h-full" : ""}`}
      >
        <nav
          className={`lg:flex gap-5 items-center lg:justify-between lg:gap-7 ${isOpen ? "flex flex-col bg-white absolute top-20 right-0 p-5 z-50" : "hidden"} w-full`}
        >
          <ul
            className={`${isOpen ? "flex-col" : ""} flex items-center justify-between w-full gap-4`}
          >
            <li>
              <a
                href="#"
                className={`${isActive === "home" ? "text-[#000] hover:text-[#333] " : "text-[#333] hover:text-[#000]"}`}
              >
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-[#333] hover:text-[#000]">
                Work
              </a>
            </li>
            <li>
              <a href="#" className="text-[#333] hover:text-[#000]">
                Initiatives
              </a>
            </li>
            <li>
              <a href="#" className="text-[#333] hover:text-[#000]">
                Writing
              </a>
            </li>
            <li>
              <a href="#" className="text-[#333] hover:text-[#000]">
                Speaking
              </a>
            </li>
            <li>
              <a href="#" className="text-[#333] hover:text-[#000]">
                Contact
              </a>
            </li>
          </ul>
          <button className="bg-[#000] text-[#FAF9F7] px-4 py-2 rounded-md hover:bg-[#333] whitespace-nowrap lg:hidden">
            Get in touch
          </button>
        </nav>

        <XIcon
          onClick={toggleNavBar}
          className={`lg:hidden w-6 h-6 left-2 font-bold text-black ${isOpen ? "block" : "hidden"}`}
        />

        <MenuIcon
          onClick={toggleNavBar}
          className={`lg:hidden w-6 h-6 left-2 font-bold text-black ${isOpen ? "hidden" : "block"}`}
        />
      </div>
      <button className="bg-[#000] text-[#FAF9F7] px-4 py-2 rounded-md hover:bg-[#333] whitespace-nowrap hidden lg:flex lg:mr-2.5">
        Get in touch
      </button>
    </div>
  );
};
