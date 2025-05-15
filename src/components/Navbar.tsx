"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

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
        // className="fixed top-0 left-0 w-full z-50 bg-[#F8F5F1]/50 text-[#000000] px-8 py-4 shadow-md"
        // className="fixed top-0 left-0 w-full z-50  bg-[#F8F5F1]/60 text-[#000000] px-8 py-4 shadow-md"
        className="fixed top-0 left-0 w-full z-50 bg-[#F8F5F1]/60 backdrop-blur-sm text-[#000000] px-4 py-2 md:px-8 md:py-4 shadow-md"
    >
        {/* Réseaux sociaux à gauche */}
        <div className="hidden md:flex space-x-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="h-5 w-5 hover:text-[#202020] transition" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="h-5 w-5 hover:text-[#202020] transition" />
        </a>
        <a href="mailto:mail@example.com" aria-label="E-mail">
          <Mail className="h-5 w-5 hover:text-[#202020] transition" />
        </a>
      </div>

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
          className={`absolute left-0 top-14 w-full md:static md:flex md:space-x-6 md:w-auto text-sm md:text-lg font-medium transition-all duration-300 bg-[#F8F5F1]/90 md:bg-transparent px-4 md:px-0 py-4 md:py-0 ${
            isMenuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <li><Link href="#about" className="hover:text-[#202020]">Présentation</Link></li>
          <li><Link href="#project" className="hover:text-[#202020]">Projets</Link></li>
          <li><Link href="#services" className="hover:text-[#202020]">Services</Link></li>
          <li><Link href="#tarifs" className="hover:text-[#202020]">Tarifs</Link></li>
          <li><Link href="#partners" className="hover:text-[#202020]">Ensemble</Link></li>
          <li><Link href="#contact" className="hover:text-[#202020]">Contact</Link></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Nav;
