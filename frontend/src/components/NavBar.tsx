function NavBar() {
  return (
    <nav className="bg-zinc-950 text-stone-50 py-4">
      <div className="container flex justify-end items-center">
        <ul className="flex space-x-4">
          <li className="ml-4">
            <a href="#home" className="text-white">
              Home
            </a>
          </li>
          <li className="ml-4">
            <a href="#about" className="text-white">
              About
            </a>
          </li>
          <li className="ml-4">
            <a href="#projects" className="text-white">
              Projects
            </a>
          </li>
          <li className="ml-4">
            <a href="#contact" className="text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
