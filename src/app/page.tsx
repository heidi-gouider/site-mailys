"use client";

import React, { useEffect} from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";
import Temoignage from "@/components/Temoignage";
import Showreel from "@/components/Showreel";
import Cgu from "@/components/Cgu";
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
    {/* <section id="showreel">
    <Showreel />
    </section> */}
    <section id="service">
    <Services />
    </section>
    <section>
    <Portfolio />
    </section>
    <section>
    <Temoignage />
    </section>
    <section id="contact">
    <Contact />
    </section>
    <section id="cgu">
    <Cgu />
    </section>

  </>
  );
}