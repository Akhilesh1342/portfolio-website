const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-20 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/">
    <img
      src="/ak(1)-Photoroom.png"
      alt="A-Stacks Logo"
      className="h-12 w-auto mix-blend-multiply transition-transform duration-300 hover:scale-120"
    />
  </a>
   
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><a href="#about" className="hover:text-indigo-600">About</a></li>
          <li><a href="#skills" className="hover:text-indigo-600">Skills</a></li>
          <li><a href="#projects" className="hover:text-indigo-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
