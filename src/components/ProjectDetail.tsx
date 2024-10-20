import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Project } from "../utils/Projects";
import { projects } from "../data/Projects";

const ProjectDetail: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const project = projects.find((value: Project) => value.id === id);
  const navigate = useNavigate();

  if (!project) {
    navigate("/");
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 py-12"
    >
      <Link
        to="/#projects"
        className="inline-flex items-center text-black hover:text-yellow-600 mb-6 transition duration-300"
      >
        <ArrowLeft className="mr-2" />
        {t("backToProjects")}
      </Link>
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-auto rounded-lg shadow-lg mb-4"
          />
          <div className="grid grid-cols-2 gap-4">
            {project.images.slice(1).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${project.title} ${index + 2}`}
                className="w-full h-auto rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
        <div>
          <p className="text-lg mb-6">{project.fullDescription}</p>
          <h2 className="text-2xl font-semibold mb-4">
            {t("projectFeatures")}
          </h2>
          <ul className="list-disc list-inside mb-6">
            {project.features.map((feature, index) => (
              <li key={index} className="mb-2">
                {feature}
              </li>
            ))}
          </ul>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p>
              <strong>{t("projectCompletion")}:</strong> {project.completion}
            </p>
            <p>
              <strong>{t("projectLocation")}:</strong> {project.location}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
