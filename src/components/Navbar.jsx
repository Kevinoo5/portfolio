import { useState, useEffect } from 'react';
import NavbarItem from "../common/NavbarItem";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 400;
      setIsBlurred(scrollPosition > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`flex fixed w-full z-10 items-center px-12 text-white ${isBlurred ? 'backdrop-blur-xl' : ''}`}>
      <div className="flex-1">
        <NavbarItem title="KEVIN NOORMETS" targetId="home" customStyles="text-3xl font-bold text-[#00df9a]">
          KEVIN NOORMETS
          </NavbarItem>
      </div>

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

      <div className={`lg:flex lg:flex-wrap ${showMenu ? 'flex flex-col' : 'hidden'}`}>
        <NavbarItem title="About Me" targetId="about" />
        <NavbarItem title="Skills" targetId="skills" />
        <NavbarItem title="Projects" targetId="projects" />
        <NavbarItem title="Experience" targetId="experience" />
        <NavbarItem title="Contact" targetId="contact" />
      </div>
    </div>
  );
};

export default Navbar;
