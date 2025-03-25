import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Works from "../components/Works";

export default function DesignPage({ lang, changeLanguage }) {
  return (
    <div className="relative">
      <Menu
        scrollPosition={scrollY}
        changeLanguage={changeLanguage}
        lang={lang}
      />
      <Works />
      <Footer />
    </div>
  );
}
