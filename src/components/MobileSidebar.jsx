import NavbarItem from "../common/NavbarItem.jsx";

const MobileSidebar = ({ showMenu, toggleMenu }) => {
  return (
    <div
      className={`fixed text-white flex flex-col items-center justify-center z-20 h-lvh right-0 w-1/2 bg-black opacity-70 rounded-l-2xl transition-transform duration-700 transform ${showMenu ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className={"pt-16 sm:pt-2"}></div>
      <div
        className={
          "fixed text-white top-12 right-14 sm:top-9 sm:right-14 font-bold text-3xl cursor-pointer"
        }
        onClick={toggleMenu}
      >
        X
      </div>
      <NavbarItem title="About Me" targetId="about" />
      <NavbarItem title="Skills" targetId="skills" />
      <NavbarItem title="Projects" targetId="projects" />
      <NavbarItem title="Experience" targetId="experience" />
    </div>
  );
};

export default MobileSidebar;
