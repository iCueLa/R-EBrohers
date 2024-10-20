import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, X, Menu } from "lucide-react";
import { motion } from "framer-motion";
import NewLogo from "../assets/newLogo.svg";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenInMobile, setIsOpenInMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const changeLenguageInMobile = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpenInMobile(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const goToSectionOnHome = (section: any) => {
    navigate("/", { state: { scrollTo: section } });
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-10 ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={NewLogo}
            alt="logo"
            className="w-10 h-10 cursor-pointer"
            onClick={() => goToSectionOnHome("hero")}
          />
          <a
            onClick={() => goToSectionOnHome("hero")}
            className="text-xl font-bold text-black cursor-pointer"
          >
            {t("companyName")}
          </a>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 items-center">
            <li>
              <button
                onClick={() => goToSectionOnHome("hero")}
                className="text-black hover:text-gray-600 font-bold hover:underline"
              >
                {t("home")}
              </button>
            </li>
            <li>
              <button
                onClick={() => goToSectionOnHome("about")}
                className="text-black hover:text-gray-600 font-bold hover:underline"
              >
                {t("about")}
              </button>
            </li>
            <li>
              <button
                onClick={() => goToSectionOnHome("projects")}
                className="text-black hover:text-gray-600 font-bold hover:underline"
              >
                {t("projects")}
              </button>
            </li>
            <li>
              <button
                onClick={() => goToSectionOnHome("contact")}
                className="text-black hover:text-gray-600 font-bold hover:underline"
              >
                {t("contact")}
              </button>
            </li>
            <li className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center text-black hover:text-gray-600 font-bold"
              >
                {i18n.language.toUpperCase()}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 py-2 w-24 bg-white rounded-md shadow-xl z-20 hover:underline"
                >
                  <button
                    onClick={() => changeLanguage("es")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left hover:underline"
                  >
                    Español
                  </button>
                  <button
                    onClick={() => changeLanguage("en")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left hover:underline"
                  >
                    English
                  </button>
                </motion.div>
              )}
            </li>
          </ul>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <nav className="flex flex-col items-center space-y-4">
            <a
              className="text-gray-600 hover:text-gray-800 font-bold hover:underline"
              onClick={() => goToSectionOnHome("hero")}
            >
              {t("about")}
            </a>
            <a
              className="text-gray-600 hover:text-gray-800 font-bold hover:underline"
              onClick={() => goToSectionOnHome("projects")}
            >
              {t("projects")}
            </a>
            <a
              className="text-gray-600 hover:text-gray-800 font-bold hover:underline"
              onClick={() => goToSectionOnHome("contact")}
            >
              {t("contact")}
            </a>
            <button
              onClick={() => setIsOpenInMobile(!isOpenInMobile)}
              className="flex items-center text-black hover:text-gray-600 font-bold"
            >
              {i18n.language.toUpperCase()}
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {isOpenInMobile && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute mt-2 py-2 w-24 bg-white rounded-md shadow-xl z-20"
              >
                <button
                  onClick={() => changeLenguageInMobile("es")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left font-bold hover:underline"
                >
                  Español
                </button>
                <button
                  onClick={() => changeLenguageInMobile("en")}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left font-bold hover:underline"
                >
                  English
                </button>
              </motion.div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
