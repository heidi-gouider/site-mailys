"use client";
import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const categories = ["all", "documentaire", "pub", "clip"]
const projects = [
  {
    title: "back Stage",
    image: "/images/projet5.jpeg",
    description: "Réalisation d’un documentaire immersif sur les coulisses du théâtre.",
    category: "documentaire",
    year: "2023",
  },
  {
    title: "Super groupe",
    image: "/images/projet3.jpeg",
    description: "Montage d’un clip dynamique pour un groupe de rock indépendant.",
    category: "clip",
    year: "2023",
  },
  {
    title: "Corporate",
    image: "/images/projet7.jpeg",
    description: "Vidéo institutionnelle pour une entreprise tech innovante.",
    category: "pub",
    year: "2023",
  },
  {
    title: "Aftermovie",
    image: "/images/projet4.jpeg",
    description: "Aftermovie d’un festival culturel rassemblant plus de 20 000 spectateurs.",
    category: "documentaire",
    year: "2023",
  },
  {
    title: "Habillage TV",
    image: "/images/projet8.jpeg",
    description: "Création d’un habillage graphique complet pour une émission télé.",
    category: "documentaire",
    year: "2023",
  },
  {
    title: "Social Media",
    image: "/images/projet9.jpeg",
    description: "Série de vidéos verticales pour une campagne Instagram.",
    category: "pub",
    year: "2023",
  },
];

export default function Projets(){

// const [filter, setFilter] = useState("all");

// const filteredProjects =
// filter === "all"
//   ? projects
//   : projects.filter((p) => p.category === filter);  

  return (
    <section className="bg-[#E4E2DD] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 mt-12">PROJETS</h2>
        {/* <div className="w-4/5 h-0.5 bg-black mx-auto mb-12" /> */}

        {/* Bannière de filtres */}
        {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border font-medium transition 
              ${
                filter === cat
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-black hover:text-white"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div> */}

        {/* Grille des projets filtrés */}
        <div className="space-y-20">
          {/* {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0; */}

        {/* <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="relative overflow-hidden rounded-1xl shadow-lg break-inside-avoid cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm p-2 text-center">
                {project.title}
              </div>
            </div>
          ))}
        </div>

        {/* {projects.map((project, i) => (
  <div key={i} className="flex flex-col md:flex-row items-center my-10 gap-6">
    <img src={project.image} className="w-full md:w-1/2 rounded-xl shadow-md" />
    <div className="md:w-1/2 text-center md:text-left">
      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-700">{project.description}</p>
    </div>
  </div>
))} */}


            {/* return (

              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${!isEven ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <div className="w-full lg:w-1/3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-2xl shadow-lg w-full h-auto object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ); */}
          {/* })} */}
        </div>
      </div>
    </section>
  );
}
