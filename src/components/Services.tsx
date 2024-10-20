import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Hammer,
  Building,
  Leaf,
  ClipboardList,
} from "lucide-react";

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Home size={40} />,
      title: t("residentialConstruction"),
      description: t("residentialConstructionDesc"),
    },
    {
      icon: <Building2 size={40} />,
      title: t("commercialConstruction"),
      description: t("commercialConstructionDesc"),
    },
    {
      icon: <Hammer size={40} />,
      title: t("renovationAndRemodeling"),
      description: t("renovationAndRemodelingDesc"),
    },
    {
      icon: <Building size={40} />,
      title: t("infrastructureDevelopment"),
      description: t("infrastructureDevelopmentDesc"),
    },
    {
      icon: <Leaf size={40} />,
      title: t("sustainableBuilding"),
      description: t("sustainableBuildingDesc"),
    },
    {
      icon: <ClipboardList size={40} />,
      title: t("projectManagement"),
      description: t("projectManagementDesc"),
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-black mb-12"
        >
          {t("ourServices")}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl"
            >
              <div className="text-yellow-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
