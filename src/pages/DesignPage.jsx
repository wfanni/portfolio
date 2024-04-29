import Design from "../components/Design";
import Menu from "../components/Menu";

export default function DesignPage({ sections, lang, changeLanguage }) {
  return (
    <>
      <Menu
        scrollPosition={scrollY}
        sections={sections}
        changeLanguage={changeLanguage}
        lang={lang}
      />
      <Design />
    </>
  );
}
