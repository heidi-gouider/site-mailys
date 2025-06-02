"use client";

export default function Services() {
  const services = [
    {
      title: "MONTAGE",
      description:
        "Après avoir cerné vos besoins et vos envies je peux travailler aussi bien en autonomie qu'en collaboration afin de créer des vidéos qui reflètent pleinement votre vision. Mon objectif est de donner vie à vos histoires avec une attention particulière portée au détail.",
      image: "/images/service-1.png",
    },
    {
      title: "ÉTALONNAGE",
      description:
        "L’étalonnage est une étape à la fois technique et artistique, essentielle pour donner à vos productions une identité visuelle forte et singulière. Mon objectif est de révéler toute la richesse et la profondeur de vos plans, tout en respectant votre vision artistique.",
      image: "/images/service-2.png",
    },
    {
      title: "HABILLAGE",
      description:
        "Le motion design apporte une dimension supplémentaire à vos vidéos, en y intégrant des éléments graphiques animés. Je peux créer des animations esthétiques et cohérentes avec votre univers visuel pour sublimer votre message.",
      image: "/images/service-3.png",
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#E4E2DD]">
            {/* <div className="w-4/5 mb-20 h-0.5 bg-black ml-10"></div> */}
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 MT-12">SERVIVES PROPOSÉS</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              // className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              className="relative group  overflow-hidden shadow-lg hover:shadow-xl transition duration-300 bg-beige-dark"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />

              {/* Titre affiché tout le temps */}
              {/* <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white px-4 py-2"> */}
              <div className="absolute bottom-0 left-0 w-full bg-[#E4E2DD] bg-opacity-90 px-4 py-2">
                <h3 className="text-lg font-bold">{service.title}</h3>
              </div>

              {/* Overlay au survol */}
              {/* <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center px-4 opacity-0 group-hover:opacity-100 transition duration-300 text-white"> */}
              <div className="absolute inset-0 bg-[#F8F5F1] bg-opacity-90 flex flex-col justify-center items-center text-center px-4 opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
