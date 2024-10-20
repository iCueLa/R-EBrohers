import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { projects } from "../data/Projects";
import { useNavigate } from "react-router-dom";

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            {t("ourProjects")}
          </h2>
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="px-4">
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">
                      {t(project.title)}
                    </h3>
                    <p className="text-gray-600">{t(project.description)}</p>
                    <button
                      onClick={() => navigate(`/project/${project.id}`)}
                      className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-400 transition duration-300 mt-4"
                    >
                      {t("projects_detail.viewDetails")}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
