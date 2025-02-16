import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState("en");

  const content = {
    en: {
      work: "Work",
      about: "About",
      solutions: "Solutions",
      heroTitle: "Hover is a creative studio. We bring the best solutions for your business.",
      heroSubtitle: "Animation, Design & Interactivity",
    },
    pt: {
      work: "Trabalhos",
      about: "Sobre",
      solutions: "Soluções",
      heroTitle: "Hover é um estúdio criativo. Trazemos as melhores soluções para o seu negócio.",
      heroSubtitle: "Animação, Design e Interatividade.",
    }
  }

  return (
    <div></div>
  );
}
