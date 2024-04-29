import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import i18n from "./i18n";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { useEffect, useState, useRef } from "react";
import Loading from "./components/Loading";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import DesignPage from "./pages/DesignPage";

export default function App() {
  const [scrollY, setScrollY] = useState(window.scrollY);

  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const sectionsContainer = {
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
    contact: contactRef,
  };

  const [langCode, setLangCode] = useState("en");

  useEffect(() => {
    i18n.changeLanguage(langCode);
  }, [langCode]);

  const onChangeLang = (e) => {
    setLangCode(e.target.value);
  };

  function onScroll() {
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function backToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <HomePage
              sections={sectionsContainer}
              lang={langCode}
              changeLanguage={onChangeLang}
            />
          }
        />
        <Route
          path="/about"
          element={
            <AboutPage
              sections={sectionsContainer}
              lang={langCode}
              changeLanguage={onChangeLang}
            />
          }
        />
        <Route
          path="/design"
          element={
            <DesignPage
              sections={sectionsContainer}
              lang={langCode}
              changeLanguage={onChangeLang}
            />
          }
        />
        <Route
          path="/experience"
          element={
            <ExperiencePage
              sections={sectionsContainer}
              lang={langCode}
              changeLanguage={onChangeLang}
            />
          }
        />
        <Route
          path="/education"
          element={
            <EducationPage
              sections={sectionsContainer}
              lang={langCode}
              changeLanguage={onChangeLang}
            />
          }
        />
        
      </Routes>
      <button
        className={`backToTop fixed z-10 xs:right-4 sm:right-12 xs:bottom-4 sm:bottom-12 xs:px-6 sm:px-8 xs:py-4 xs:pt-[1.2rem] sm:py-6 transition-all duration-200 rounded-full bg-white/50 text-orange ${
          scrollY >= 1000 ? "opacity-100" : "opacity-0"
        }`}
        type="button"
        onClick={backToTop}
      >
        <i className="xs:text-[1.5rem] sm:text-[3rem] text-orange fa-solid fa-arrow-up"></i>
      </button>
    </Suspense>
  );
}
