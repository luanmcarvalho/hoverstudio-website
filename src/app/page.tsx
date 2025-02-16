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
      heroTitle: "Hover is a creative Studio. The movement your brand needs.",
      heroSubtitle: "Animation, Design & Interactivity",
    },
    pt: {
      work: "Trabalhos",
      about: "Sobre",
      solutions: "Soluções",
      heroTitle: "Damos vida às ideias com movimento.",
      heroSubtitle: "Animação, Design & Interatividade",
    },
  };

  return (
    <div className="min-h-screen bg-pad text-black">
      {/* Navbar */}
      <nav className="nav-bar">
        <div>
          <Image src="/HOVER-ColorDark.png" width={180} height={180} alt="Hover" />
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
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <motion.h1
          className="text-6xl md:text-8xl font-bold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {content[language].heroTitle}
        </motion.h1>
        <motion.p 
          className="text-2xl md:text-3xl mt-6 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {content[language].heroSubtitle}
        </motion.p>
      </section>

      {/* Sections */}
      <section id="work" className="h-screen flex items-center justify-center bg-gray-900">
        <h2 className="text-5xl font-bold">{content[language].work}</h2>
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
