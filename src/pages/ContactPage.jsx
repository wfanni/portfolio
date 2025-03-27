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
      <div className="-mt-20">
        <Contact pathname={pathname} />
      </div>
      <Footer pathname={pathname} />
    </div>
  );
}
