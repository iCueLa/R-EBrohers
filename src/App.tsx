import { useTranslation } from "react-i18next";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { BrowserRouter } from "react-router-dom";
import "aos/dist/aos.css";
import Routes from "./Router/Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ScrollToSection } from "./components/ScrollToSections";

function App() {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <Header />
      <ScrollToSection />
      <Routes />
      <FloatingWhatsApp
        phoneNumber="+1234567890"
        accountName={t("companyName")}
        avatar="src/assets/newLogo.svg"
        chatMessage="Hola, ¿en qué podemos ayudarte?"
      />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
