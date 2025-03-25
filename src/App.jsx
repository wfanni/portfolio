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
import WorksPage from "./pages/WorksPage";
import PhotoPage from "./pages/PhotoPage";
import SocialPage from "./pages/SocialPage";
import ContactPage from "./pages/ContactPage";


export default function App() {
  const [scrollY, setScrollY] = useState(window.scrollY);

  const [langCode, setLangCode] = useState("en");

  useEffect(() => {
    i18n.changeLanguage(langCode);
  }, [langCode]);

  const onChangeLang = (e) => {
    setLangCode(e.target.value);
  };

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
              scrollPoz={scrollY}
              lang={langCode}
              changeLanguage={onChangeLang}
            />
          }
        />
        <Route
          path="/about"
          element={
            <AboutPage
              lang={langCode}
              changeLanguage={onChangeLang}
            />
          }
        />
        <Route
          path="/design"
          element={
            <DesignPage
              lang={langCode}
              changeLanguage={onChangeLang}
            />
          }
        />
        <Route
          path="/photography"
          element={
            <PhotoPage
              lang={langCode}
              changeLanguage={onChangeLang}
            />
          }
        />
        <Route
          path="/social-media-content-creation"
          element={
            <SocialPage
              lang={langCode}
              changeLanguage={onChangeLang}
            />
          }
        />
        <Route
          path="/works"
          element={
            <WorksPage
              lang={langCode}
              changeLanguage={onChangeLang}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <ContactPage
              lang={langCode}
              changeLanguage={onChangeLang}
            />
          }
        />
        <Route
          path="/experience"
          element={
            <ExperiencePage
              lang={langCode}
              changeLanguage={onChangeLang}
            />
          }
        />
        <Route
          path="/education"
          element={
            <EducationPage
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
