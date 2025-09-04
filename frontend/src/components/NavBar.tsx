function NavBar() {
  return (
    <nav className="bg-stone-600 text-stone-50 py-5 w-1/3 fixed rounded-3xl z-10 my-0 mx-auto left-0 right-0 top-3">
      <div className="container flex justify-center items-center">
        <ul className="flex space-x-4">
          <li className="ml-4">
            <a href="#home" className="">
              Home
            </a>
          </li>
          <li className="ml-4">
            <a href="#about" className="">
              About
            </a>
          </li>
          <li className="ml-4">
            <a href="#projects" className="">
              Projects
            </a>
          </li>
          <li className="ml-4">
            <a href="#contact" className="">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
