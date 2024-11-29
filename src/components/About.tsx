import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

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
        <div className="flex flex-wrap justify-center -mx-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full px-4 mb-8 text-center"
          >
            <p className="text-gray-700 text-lg leading-relaxed font-normal">
              Somos una empresa familiar creada y dirigida por constructores.
              Nos destacamos por nuestro conocimiento y especialización en el
              rubro, respaldados por una sólida trayectoria. Nos enfocamos en la{" "}
              <span className="font-semibold">calidad de construcción</span> y
              las <span className="font-semibold">terminaciones</span>, porque
              creemos firmemente que la diferencia está en los detalles.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed font-normal mt-4">
              Nuestro pilar fundamental es la{" "}
              <span className="font-semibold">ética en los negocios</span> y el{" "}
              <span className="font-semibold">cumplimiento de contratos</span>,
              valores que nos han consolidado en el mercado como una empresa
              constructora <span className="font-semibold">sólida</span>,{" "}
              <span className="font-semibold">solvente</span> y{" "}
              <span className="font-semibold">comprometida</span>.
            </p>
            <p className="text-gray-700 text-lg font-semibold leading-relaxed mt-4">
              Construimos mucho más que grandes estructuras de hormigón.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed font-normal">
              Construimos <span className="font-semibold">vínculos</span>,{" "}
              <span className="font-semibold">confianza</span>, y{" "}
              <span className="font-semibold">futuro</span>.
            </p>
            <p className="text-gray-700 text-lg font-bold uppercase mt-4">
              Construimos sin límites.
            </p>
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
