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
      <div className="absolute top-0 -z-10 w-full h-[100vh] overflow-hidden">
        <div className="w-[30rem] h-[30rem] bg-orange-200 rounded-full absolute animate-pulse opacity-30 top-10 left-10 blur-3xl" />
        <div className="w-[20rem] h-[20rem] bg-yellow-200 rounded-full absolute animate-ping opacity-20 top-[15rem] right-20 blur-2xl" />
      </div>

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