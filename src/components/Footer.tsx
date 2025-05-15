import { ul } from "framer-motion/client";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

            {/* {<p>© 2025 Mon Super Site</p>}
            {<ul className="mt-2">
                <li><link rel="stylesheet" href="#Partners" />Partenaires</li>
                <li><link href="#Cgu"></link>Conditions d'utilisations</li>
            </ul>} */}

export default function Footer () {
    return(
        <footer id="bottom" className=" w-full bg-[#F8F5F1]/60 text-[#000000]  bottom-0 py-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Colonne 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">À propos</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Qui suis-je ?</a></li>
            <li><a href="#">Mentions légales</a></li>
            <li><a href="#">Conditions d'utilisation</a></li>
          </ul>
        </div>

        {/* Colonne 2 */}
        {/* <div>
          <h3 className="text-lg font-semibold mb-4">Réseaux</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Nom de la structure</a></li>
            <li><a href="#">Devenir partenaire</a></li>
          </ul> */}
          <div className="flex space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="h-6 w-6 text-[#E1306C] hover:scale-110 transition-transform" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="h-6 w-6 text-[#0077B5] hover:scale-110 transition-transform" />
          </a>
          <a href="mailto:mail@example.com" aria-label="E-mail">
            <Mail className="h-6 w-6 text-[#202020] hover:text-blue-500 hover:scale-110 transition-all" />
          </a>
        </div>

        {/* Colonne 3 - Call to Action */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Me contacter</h3>
          <p className="text-gray-300 text-sm mb-4">Envie de collaborer ? Parlons de votre projet !</p>
          <a
            href="#contact"
            className="px-6 py-2 rounded-lg bg-[#202020] text-white font-medium hover:bg-[#444] transition disabled:bg-gray-400"
            >
            Contactez-moi
          </a>
        </div>
      </div>

      {/* Bas de page */}
      <div className="mt-12 text-center text-xs text-gray-500">
        © 2025 Mon Super Site. Tous droits réservés.
      </div>
    </footer>
  );
}