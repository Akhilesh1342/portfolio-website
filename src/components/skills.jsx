const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {["Python", "HTML", "CSS", "Tailwind", "JavaScript", "AI"].map(skill => (
            <div key={skill} className="bg-white shadow-md p-4 rounded-lg text-lg font-medium">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;
