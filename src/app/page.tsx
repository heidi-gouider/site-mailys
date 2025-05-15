"use client";

import React, { useEffect} from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
// import Temoignage from "@/components/Temoignage";
import Partners from "@/components/Partners";
import Cgu from "@/components/Cgu";
import Tarifs from "@/components/Tarifs";
import Project from "@/components/Project";
// import { useEffect } from 'react';
// import { useTranslation } from '@/hooks/useTranslation';

export default function Home() {
  // const { t } = useTranslation();

  // useEffect(() => {
  //   document.documentElement.lang = t('language') === 'Français' ? 'fr' : 'en';
  // }, [t]);

  return (
    
    <>

    <section id="hero" className="relative min-h-screen overflow-hidden">
    <Hero />
    </section>
    <section id="about">
    <About />
    </section>
    <section id="project">
    <Project />
    </section>
    <section id="service">
    <Services />
    </section>
    <section id="tarifs">
    <Tarifs />
    </section>
    <section id="partners">
    <Partners />
    </section>
    {/* <section>
    <Temoignage />
    </section> */}
    <section id="contact">
    <Contact />
    </section>
    <section id="cgu">
    <Cgu />
    </section>

  </>
  );
}