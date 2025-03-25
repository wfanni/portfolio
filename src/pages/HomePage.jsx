import Menu from "../components/Menu";
import About from "../components/About";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage({ lang, changeLanguage, selectedLangguage }) {
  
  return (
    <div className="relative">
      <Menu scrollPosition={scrollY} changeLanguage={changeLanguage} lang={lang} selectedLanguage={selectedLangguage}/>
      <Intro selectedLanguage={selectedLangguage} />
      <About lang={lang} />
        <Skills />
        <Contact />
        <Footer />
    </div>
  );
}
