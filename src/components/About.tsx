import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-black mb-12"
        >
          {t("aboutUs")}
        </motion.h2>
        <div className="flex flex-wrap -mx-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2 px-4 mb-8"
          >
            <h3 className="text-2xl font-semibold mb-4">{t("ourMission")}</h3>
            <p className="text-gray-700">{t("missionDescription")}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-1/2 px-4 mb-8"
          >
            <h3 className="text-2xl font-semibold mb-4">{t("ourVision")}</h3>
            <p className="text-gray-700">{t("visionDescription")}</p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-8"
        >
          <a
            href="#projects"
            className="bg-black text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-800 transition duration-300 inline-block"
          >
            {t("exploreProjects")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;