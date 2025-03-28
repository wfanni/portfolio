import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Contact from "../components/Contact";

export default function ContactPage({ lang, changeLanguage, pathname }) {
  return (
    <div className="relative">
      <Menu
        scrollPosition={scrollY}
        changeLanguage={changeLanguage}
        lang={lang}
        pathname={pathname}
      />
      <Contact pathname={pathname} />
      <Footer pathname={pathname} />
    </div>
  );
}
