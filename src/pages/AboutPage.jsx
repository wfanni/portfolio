import Menu from "../components/Menu";
import AboutLong from "../components/AboutLong";

export default function AboutPage({ sections, lang, changeLanguage }) {
  return (
    <>
      <Menu
        scrollPosition={scrollY}
        sections={sections}
        changeLanguage={changeLanguage}
        lang={lang}
      />

      <AboutLong />
    </>
  );
}
