import { useState } from 'react';
import NavbarItem from "../common/NavbarItem";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex fixed w-full z-10 backdrop-blur-xl items-center h-24 mx-auto px-12 text-white">
      <div className="flex-1">
        <a href="/" className="text-3xl font-bold text-[#00df9a]">
          KEVIN NOORMETS
        </a>
      </div>

      {/* Hamburger Icon */}
      <div className="lg:hidden" onClick={toggleMenu}>
      <svg
          className="w-8 h-8 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      {/* Menu Items */}
      <ul className={`lg:flex lg:flex-wrap ${showMenu ? 'flex flex-wrap' : 'hidden'}`}>
        <NavbarItem title="About Me" targetId="about" />
        <NavbarItem title="Skills" targetId="skills" />
        <NavbarItem title="Projects" targetId="projects" />
        <NavbarItem title="Experience" targetId="experience" />
        <NavbarItem title="Contact" targetId="contact" />
      </ul>
    </div>
  );
};

export default Navbar;
