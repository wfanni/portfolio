import Toolbar from './components/Toolbar';
import './index.css'
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Toolbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />

    </>
  )
}
