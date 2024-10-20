import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";


export function ScrollToSection() {
  const location = useLocation();

  // Verifica si hay una sección en el estado del location para hacer el scroll
  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        duration: 400,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -50, // Ajusta si tienes una navbar fija
      });
    }
  }, [location]);

  return null;
}