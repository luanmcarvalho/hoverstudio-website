"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [language, setLanguage] = useState("en");

  const content = {
    en: {
      work: "Work",
      about: "About",
      solutions: "Solutions",
      heroTitle: "Hover is a creative Studio. We craft through animation, design, and technology.",
      heroSubtitle: "As a seamless extension of your team, we bring creative solutions to every challenge.",
    },
    pt: {
      work: "Trabalhos",
      about: "Sobre",
      solutions: "Soluções",
      heroTitle: "Hover é um estúdio criativo. Especialistas em animação, design e tecnologia.",
      heroSubtitle: "Como uma extensão da sua equipe, resolvemos todos os seus problemas criativos.", 
    },
  };

  return (
    <div className="min-h-screen bg-pad text-black">
      {/* Navbar */}
      <nav className="nav-bar">
        <div>
          <Image src="/Hovericon2.png" width={80} height={80} alt="Hover" className=""/>
        </div>
        <div className="nav-items space-x-8 text-lg">
          <a href="#work" className="hover:text-gray-400 transition-colors">{content[language].work}</a>
          <a href="#about" className="hover:text-gray-400 transition-colors">{content[language].about}</a>
          <a href="#solutions" className="hover:text-gray-400 transition-colors">{content[language].solutions}</a>
        </div>
        <select
          className="bg-transparent border rounded px-3 py-2 text-lg cursor-pointer"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">EN</option>
          <option value="pt">PT</option>
        </select>
      </nav>

      {/* Hero Section */}
      <section className="hero-section flex flex-col">
        <motion.h1
          className="container text-6xl md:text-6xl leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {content[language].heroTitle}
        </motion.h1>
        <motion.p
          className="text-1xl md:text-2xl mt-6 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {content[language].heroSubtitle}
        </motion.p>
      </section>

      {/* Sections */}
      <section id="work" className="bg-pad px-4 md:px-8 lg:px-16 w-full">
        <div className="portfolio-item space-x-1">
          <div className="flex-1">
            <h2 className="portfolio-text text-4xl">Meet Wizard's new Visual Identety.</h2>
            <p className="portfolio-subtitle text-lg text-gray-600">Filme apresentando a nova id visual da Wizard.</p>
          </div>
          <div className="flex-1">
            <a href="https://vimeo.com/838502302">
              <Image src="/Capa.png" width={3840} height={2160} alt="" className="cursor-pointer"/>
            </a>
          </div>
        </div>
      </section>
      <section id="about" className="h-screen flex items-center justify-center bg-black">
        <h2 className="text-5xl font-bold">{content[language].about}</h2>
      </section>
      <section id="solutions" className="h-screen flex items-center justify-center bg-gray-900">
        <h2 className="text-5xl font-bold">{content[language].solutions}</h2>
      </section>
    </div>
  );
}
