"use client";

import React from 'react';

export default function Tarifs() {
  const tarifs = [
    {
      title: "MONTAGE",
      price: "300 €",
      description: "De l’organisation du projet, au dérushage en passant par le bout à bout et l’ours, jusqu’au montage de l’image et du son. Je m'assure d'adapter le montage au ton et au rythme que vous souhaitez donner à votre contenu.",
    },
    {
      title: "ÉTALONNAGE",
      price: "400 €",
      description: "Tout commence par l’étalonnage primaire en travaillant l’harmonisation des plans entre eux, avant de donner une identité visuelle unique à votre projet par le biais de l’étalonnage secondaire.",
    },
    {
      title: "HABILLAGE",
      price: "350 €",
      description: "Qu’il s’agisse d’habillages visuels, d’intros dynamiques ou d’éléments animés sur mesure, je conçois des designs créatifs qui valorisent vos messages et facilitent la compréhension de votre projet.",
    },
  ];

  const tarifsFor = [
    {
      title: "ESSENTIEL",
      price: "800 €",
      description: "Idéal pour des vidéos simples, réalisées avec une caméra et un micro, avec moins d’une heure de rushs. Production estimée entre deux et trois jours. ",
    },
    {
      title: "AVANCÉ",
      price: "1200 €",
      description: "Conçu pour des projets avec deux à trois caméras et environ une heure de rushs tourné. Production estimée entre quatre et cinq jours.",
    },
    {
      title: "PRENIUM",
      price: "1600 €",
      description: "Parfait pour des projets complexes avec plus de quatre caméras et micros, ou un volume important de rushs. Le délai et le tarif sont ajustés en fonction des spécificités du projet.",
    },
  ];

  return (
    <section className='bg-[#E4E2DD]'>
      <div className="max-w-3xl mx-auto p-6 ml-5">
        <h2 className="text-3xl font-bold">LA JOURNÉE</h2>
        {/* <div className="w-full h-0.5 bg-black"></div> */}
      </div>
      <div className="w-4/5 mb-5 h-0.5 bg-black ml-10"></div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center mx-auto">
        {tarifs.map((tarifs, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 bg-[#F8F5F1] flex flex-col max-w-xs w-full min-h-[500px]"
          >
            {/* Titre */}
            <div className="rounded-t-lg  bg-black h-20 font-semibold text-white flex flex-col items-center justify-center">
              <h1 className='text-xl'>
                {tarifs.title}
              </h1>
              <p className='text-sm'>*Retours compris</p>
            </div>

            {/* Contenu centré verticalement */}
            <div className='bg-[#F8F5F1]'>
              <div className="text-lg font-bold text-blue flex flex-col items-center flex-grow mt-8">
                <p>ESTIMATION</p>
                {/* <p>{tarifs.price}</p> */}
              </div>
              <div className="p-6 flex justify-center flex-grow text-center">
                {/* <p className="text-lg font-bold text-blue mb-4">{tarifs.price}</p> */}
                <p className="text-lg text-gray-text leading-relaxed">{tarifs.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#F8F5F1] mx-auto my-10 p-6 w-full md:w-1/2">
        <p className="text-base leading-relaxed text-center mb-4">
          Les tarifs à la journée incluent une discussion préalable pour définir vos attentes et garantir une prestation en adéquation avec vos besoins et vos moyens. Sur demande, la création d’un moodboard peut être ajoutée au processus. Mon objectif est de vous offrir un résultat à la hauteur de vos attentes, avec une flexibilité adaptée à chaque projet.
        </p>
        <p className="text-sm leading-relaxed text-center italic">
          *Ce tarif comprend les retours après l’envoi d’une première version, ainsi que les potentiels retours après l’envoi d’une deuxième version. Au-delà, chaque nouvelle version sera facturée 50 € supplémentaires.
        </p>
      </div>


      <div className="max-w-3xl mx-auto p-6 ml-5">
        <h2 className="text-3xl font-bold">LES FORFAITS</h2>
      </div>

      <div className="w-4/5 mb-5 h-0.5 bg-black ml-10"></div>


      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center mx-auto">
        {tarifsFor.map((tarifsFor, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 bg-[#F8F5F1] flex flex-col max-w-xs w-full min-h-[500px]"
          >
            {/* Titre */}
            <div className="rounded-t-lg  bg-black h-20 font-semibold text-white flex flex-col items-center justify-center">
              <h1 className='text-xl'>
                {tarifsFor.title}
              </h1>
              <p className='text-sm'>*Retours compris</p>
            </div>

            {/* Contenu centré verticalement */}
            <div className='bg-[#F8F5F1]'>
              {/* <div className="text-lg font-bold text-blue flex flex-col items-center flex-grow mt-8">
                <p>ESTIMATION</p>
                <p>{tarifsFor.price}</p>
              </div> */}
              <div className="p-6 flex justify-center flex-grow text-center">
                {/* <p className="text-lg font-bold text-blue mb-4">{tarifs.price}</p> */}
                <p className="text-lg text-gray-text leading-relaxed">{tarifsFor.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#F8F5F1] mx-auto my-10 p-6 w-full md:w-1/2">
        <p className="text-base leading-relaxed text-center mb-4">
          Ces forfaits incluent le montage, le mixage audio, l’étalonnage, ainsi que la création d’un habillage graphique ou d’un motion design personnalisé. Pour le forfait Premium, le tarif exact sera déterminé après une discussion détaillée sur vos besoins spécifiques et les exigences du projet. N'hésitez pas à me contacter pour obtenir un devis sur mesure.
        </p>
        <p className="text-sm leading-relaxed text-center italic">
          *Ce tarif comprend les retours après l’envoi d’une première version, ainsi que les potentiels retours après l’envoi d’une deuxième version. Au delà, chaque nouvelle version sera facturée 50€ supplémentaires.   </p>
      </div>
    </section>);
}