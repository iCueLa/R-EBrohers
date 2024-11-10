import React from "react";
import { useTranslation } from "react-i18next";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const goToSectionOnHome = (section: any) => {
    navigate("/", { state: { scrollTo: section } });
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t("companyName")}</h3>
            <p className="text-gray-400">{t("footerDescription")}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("quickLinks")}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  onClick={() => goToSectionOnHome("hero")}
                  className="hover:text-gray-300 transition duration-300"
                >
                  {t("home")}
                </a>
              </li>
              <li>
                <a
                  onClick={() => goToSectionOnHome("about")}
                  className="hover:text-gray-300 transition duration-300"
                >
                  {t("about")}
                </a>
              </li>
              <li>
                <a
                  onClick={() => goToSectionOnHome("proyects")}
                  className="hover:text-gray-300 transition duration-300"
                >
                  {t("projects")}
                </a>
              </li>
              <li>
                <a
                  onClick={() => goToSectionOnHome("contact")}
                  className="hover:text-gray-300 transition duration-300"
                >
                  {t("contact")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("contactInfo")}</h4>
            <p className="text-gray-400">{t("address")}</p>
            <p className="text-gray-400">{t("phone")}: +54 11 3321 8756</p>
            <p className="text-gray-400">{t("email")}: info@buildmaster.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("followUs")}</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} {t("companyName")}.{" "}
            {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
