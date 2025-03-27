import Menu from "../components/Menu";
import AboutLong from "../components/AboutLong";

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
    </>
  );
}
