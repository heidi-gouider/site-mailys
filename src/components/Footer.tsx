import { ul } from "framer-motion/client";
import Link from "next/link";

            {/* {<p>© 2025 Mon Super Site</p>}
            {<ul className="mt-2">
                <li><link rel="stylesheet" href="#Partners" />Partenaires</li>
                <li><link href="#Cgu"></link>Conditions d'utilisations</li>
            </ul>} */}

export default function Footer () {
    return(
        <footer id="bottom" className=" w-full bg-gray-900 text-white  bottom-0 py-6 px-4">
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
        <div>
          <h3 className="text-lg font-semibold mb-4">Partenaires</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Nom de la structure</a></li>
            <li><a href="#">Devenir partenaire</a></li>
          </ul>
        </div>

        {/* Colonne 3 - Call to Action */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Me contacter</h3>
          <p className="text-gray-300 text-sm mb-4">Envie de collaborer ? Parlons de votre projet !</p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full text-sm"
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