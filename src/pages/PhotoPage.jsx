import Photography from "../components/Photography";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

export default function PhotoPage({ lang, changeLanguage, pathname }) {
  return (
    <div className="relative">
      <Menu
        scrollPosition={scrollY}
        changeLanguage={changeLanguage}
        lang={lang}
        pathname={pathname}
      />
      <Photography pathname={pathname} />
      <Footer pathname={pathname} />
    </div>
  );
}
