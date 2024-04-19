import Toolbar from './components/Toolbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useEffect, useState, useRef } from 'react';
import Design from './components/Design';

export default function App() {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const designRef = useRef();
  const contactRef = useRef();

  function onScroll() {
    setScrollY(window.scrollY);
  }
  
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [])

  function backToTop() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  return (
    <>
      <Toolbar scrollPosition={scrollY} sections={{about: aboutRef, skills: skillsRef, projects: projectsRef, design: designRef, contact: contactRef}} />
      <Intro />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Design ref={designRef} />
      <Contact ref={contactRef} />
      <button className={`backToTop fixed z-10 xs:right-4 sm:right-12 xs:bottom-4 sm:bottom-12 xs:px-6 sm:px-8 xs:py-4 xs:pt-[1.2rem] sm:py-6 transition-all duration-200 rounded-full bg-white/50 text-orange ${scrollY >= 1000 ? 'opacity-100' : 'opacity-0'}`} type='button' onClick={backToTop} ><i className="xs:text-[1.5rem] sm:text-[3rem] text-orange fa-solid fa-arrow-up"></i></button>

    </>
  )
}
