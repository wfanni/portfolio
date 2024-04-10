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

export default function App() {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const introRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  function onScroll() {
    setScrollY(window.scrollY);
    console.log(scrollY);
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
      <Toolbar scrollPosition={scrollY} sections={{about: aboutRef, skills: skillsRef, projects: projectsRef, contact: contactRef}} />
      <Intro ref={introRef} />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      <button className={`backToTop fixed xs:right-6 sm:right-12 xs:bottom-6 sm:bottom-12 xs:px-6 sm:px-8 xs:py-4 sm:py-6 transition-all duration-200 rounded-full bg-white/50 text-orange ${scrollY >= 1000 ? 'opacity-100' : 'opacity-0'}`} type='button' onClick={backToTop} ><i className="xs:text-2xl sm:text-5xl fa-solid fa-arrow-up"></i></button>

    </>
  )
}
