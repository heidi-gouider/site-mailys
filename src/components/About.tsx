// src/components/About.tsx
export default function About() {
  return (
    <section className="bg-[#E4E2DD] text-gray-text py-16 px-6 md:px-12">
      {/* <div className="max-w-4xl mx-auto text-center"> */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div 
        // className="w-full h-48"
        className="w-full h-52"
        >
          <img
            src="/presentation.png"
            alt="Portrait de Maïlys"
            className="w-full h-full rounded-2xl shadow-lg object-cover transition duration-500 hover:grayscale"
          />
        </div>

        {/* Texte */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-violet mb-6">
            À propos
          </h2>
          <div className="space-y-4 text-lg md:text-xl leading-relaxed"></div>
        <p className="text-lg md:text-xl leading-relaxed">
          Bonjour, je m’appelle Maïlys. Je suis
          monteuse, étalonneuse et motion
          designeuse.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          L’audiovisuel est une véritable
          passion depuis toute petite. Ce que
          j’aime par-dessus tout dans mon
          travail, c’est de pouvoir donner vie à
          une histoire, et de réussir à
          transmettre un message et des
          émotions.

        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          Je travaille sur des formats variés
          tels que du documentaire, de la
          fiction, du clip ou encore des vidéos
          YouTube. Cela me permet de
          perpétuellement cultiver ma
          créativité, d’expérimenter et de
          découvrir de nouvelles technicités.

        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          Pour chaque projet, je m’investis
          pleinement dans le but de donner
          vie à vos idées, de transmettre un
          message et de faire vivre un
          moment unique aux spectateurs, en
          y apportant mon identité artistique.

        </p>
        <p className="mt-4 text-lg md:text-xl leading-relaxed">
          Je vous invite à parcourir mon site
          pour découvrir quelques-unes de
          mes réalisations. Et si vous avez la
          moindre question ou une envie de collaboration, n’hésitez pas à me contacter.
        </p>
      </div>
      </div>
    </section>
  );
}
