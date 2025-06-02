// src/components/About.tsx
export default function About() {
  return (
    <section className="bg-[#E4E2DD] py-16 px-6 md:px-12">
      {/* <div className="max-w-4xl mx-auto text-center"> */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">

        {/* Image */}
        <div
          className="w-full"
        >
          <img
            src="/presentation.png"
            alt="Portrait de Maïlys"
            className="w-full h-full rounded-2xl shadow-lg object-cover transition duration-500 hover:grayscale"
          />
        </div>

        {/* Texte */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            À PROPOS
          </h2>
          {/* <div className="space-y-4 text-justify text-lg md:text-xl leading-relaxed"></div> */}
          <p className="text-justify text-sm md:text-xl leading-relaxed p-6">
            Bonjour, je m’appelle Maïlys. Je suis
            monteuse, étalonneuse et motion
            designeuse.
          </p>
          <p className="text-justify text-base md:text-xl leading-relaxed p-6">
            L’audiovisuel est une véritable
            passion depuis toute petite. Ce que
            j’aime par-dessus tout dans mon
            travail, c’est de pouvoir donner vie à
            une histoire, et de réussir à
            transmettre un message et des
            émotions.

          </p>
          <p className="text-justify text-base md:text-xl leading-relaxed p-6">
            Je travaille sur des formats variés
            tels que du documentaire, de la
            fiction, du clip ou encore des vidéos
            YouTube. Cela me permet de
            perpétuellement cultiver ma
            créativité, d’expérimenter et de
            découvrir de nouvelles technicités.

          </p>
          <div className="bg-[#F8F5F1]">
          <p className="mt-4 text-justify text-base md:text-xl leading-relaxed p-6">
            Pour chaque projet, je m’investis
            pleinement dans le but de donner
            vie à vos idées, de transmettre un
            message et de faire vivre un
            moment unique aux spectateurs, en
            y apportant mon identité artistique.

          </p>
          <p className="text-justify text-base md:text-xl leading-relaxed p-6">
            Je vous invite à parcourir mon site
            pour découvrir quelques-unes de
            mes réalisations. Et si vous avez la
            moindre question ou une envie de collaboration, n’hésitez pas à me contacter.
          </p>
          </div>
          </div>
        </div>
    </section>
  );
}
