import Menu from "../components/Menu";
import About from "../components/About";
import Intro from "../components/Intro";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HomeWorks from "../components/HomeWorks";

export default function HomePage({ lang, changeLanguage, selectedLangguage, pathname }) {
  
  return (
    <div className="relative">
      <Menu scrollPosition={scrollY} changeLanguage={changeLanguage} lang={lang} selectedLanguage={selectedLangguage} pathname={pathname} />
      <Intro selectedLanguage={selectedLangguage} pathname={pathname} />
      <About lang={lang} pathname={pathname} />
      <div className="mr-40 ml-60">
        <HomeWorks pathname={pathname} />
      </div>
      <Contact pathname={pathname} />
      <Footer pathname={pathname} />
    </div>
  );
}
