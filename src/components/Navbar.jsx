import NavbarItem from "../common/NavbarItem";

const Navbar = () => {
  return (
    <div className="flex fixed w-full z-10 backdrop-blur-xl items-center h-24 mx-auto px-12 text-white">
      <div className="flex-1">
        <a href="/" className="text-3xl font-bold text-[#00df9a]">
          KEVIN NOORMETS
        </a>
      </div>

      <ul className="flex flex-wrap">
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