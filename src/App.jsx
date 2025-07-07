import "./App.css";
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/project'
import Contact from './components/contacts'

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
export default App;