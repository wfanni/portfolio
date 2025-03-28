import Menu from "../components/Menu";
import AboutLong from "../components/AboutLong";
import Footer from "../components/Footer";

export default function AboutPage({ lang, changeLanguage, pathname }) {
  return (
    <>
      <Menu
        scrollPosition={scrollY}
        changeLanguage={changeLanguage}
        lang={lang}
        pathname={pathname}
      />
      <AboutLong pathname={pathname} />
      <Footer pathname={pathname} />
    </>
  );
}
