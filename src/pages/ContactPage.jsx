import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Contact from "../components/Contact";

export default function ContactPage({ lang, changeLanguage }) {
  return (
    <div className="relative">
      <Menu
        scrollPosition={scrollY}
        changeLanguage={changeLanguage}
        lang={lang}
      />
      <div className="-mt-20">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
