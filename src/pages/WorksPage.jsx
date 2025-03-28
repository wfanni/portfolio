import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Works from "../components/Works";

export default function DesignPage({ lang, changeLanguage, pathname }) {
  return (
    <div className="relative">
      <Menu
        scrollPosition={scrollY}
        changeLanguage={changeLanguage}
        lang={lang}
        pathname={pathname}
      />
      <div className="mr-40 ml-60">
        <Works pathname={pathname} />
      </div>
      <Footer pathname={pathname} />
    </div>
  );
}
