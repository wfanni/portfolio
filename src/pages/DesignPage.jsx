import Design from "../components/Design";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

export default function DesignPage({ lang, changeLanguage }) {
  return (
    <div className="relative">
      <Menu
        scrollPosition={scrollY}
        changeLanguage={changeLanguage}
        lang={lang}
      />
      <Design />
      <Footer />
    </div>
  );
}
