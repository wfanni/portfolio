import Menu from "../components/Menu";
import AboutLong from "../components/AboutLong";

export default function AboutPage({ lang, changeLanguage }) {
  return (
    <>
      <Menu
        scrollPosition={scrollY}
        changeLanguage={changeLanguage}
        lang={lang}
      />
      <AboutLong />
    </>
  );
}
