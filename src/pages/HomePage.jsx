import { useEffect, useRef, useState } from "react";
import i18n from "../i18n";
import Menu from "../components/Menu";
import About from "../components/About";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function HomePage({ sections, lang, changeLanguage }) {
  
  return (
    <>
      <Menu scrollPosition={scrollY} sections={sections} changeLanguage={changeLanguage} lang={lang} />
      <Intro />
      <About ref={sections.about} lang={lang} />
        <Skills ref={sections.skills} />
        <Projects
          ref={sections.projects}
          feedbackRef={sections.contact}
          lang={lang}
        />
        <Contact ref={sections.contact} />
    </>
  );
}
