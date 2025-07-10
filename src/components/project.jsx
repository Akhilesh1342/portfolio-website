const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-center">Projects</h2>
        
        <div className="grid gap-6">
          <div className="bg-gray-100 p-6 rounded shadow-md">
            <h3 className="text-xl font-bold mb-2">ELYSIUM</h3>
            <p>A personal assistant modeled as an artificial intelligence system to assist the user in mutiple ways.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded shadow-md">
            <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
            <p>This site you’re looking at – built from scratch using Vite, React & Tailwind.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;
