import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="bg-black text-white py-32 relative overflow-hidden h-[60vh]"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="src/assets/hero-photo.jpeg"
          alt="Minimalist construction"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 flex items-center justify-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4">{t("heroTitle")}</h1>
          <p className="text-xl mb-8">{t("heroSubtitle")}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="bg-white group text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition duration-300 inline-flex items-center animate-fade-in-up animation-delay-400"
          >
            {t("learnMore")}
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
      =
    </section>
  );
};

export default Hero;
