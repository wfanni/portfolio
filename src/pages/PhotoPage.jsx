import Photography from "../components/Photography";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

export default function PhotoPage({ lang, changeLanguage }) {
  return (
    <div className="relative">
      <Menu
        scrollPosition={scrollY}
        changeLanguage={changeLanguage}
        lang={lang}
      />
      <Photography />
      <Footer />
    </div>
  );
}
