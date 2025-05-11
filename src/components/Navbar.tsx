"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

type NavProps = {
  visible: boolean;
};

const Nav = ({ visible }: NavProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  if (!visible) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
        className="sticky top-0 left-0 w-full z-50  bg-[#F8F5F1]/40 text-white px-8 py-4 shadow-md"
    >
      {/* backdrop-blur-md */}
      <div className="container mx-auto flex justify-end items-center">
        <button
          className="md:hidden text-3xl"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? "X" : "☰"}
        </button>

        <ul
          className={`md:flex space-x-8 text-lg md:text-xl absolute md:static md:bg-transparent flex justify-end top-16 left-0 w-full md:w-auto transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {/* <li><Link href="/" className="hover:text-gray-400">Home</Link></li> */}
          <li><Link href="#about" className="hover:text-gray-400">Présentation</Link></li>
          <li><Link href="#services" className="hover:text-gray-400">Services</Link></li>
          <li><Link href="#projects" className="hover:text-gray-400">Projects</Link></li>
          <li><Link href="#contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Nav;
