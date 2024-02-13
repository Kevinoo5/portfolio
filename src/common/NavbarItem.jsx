import { useRef } from "react";

const NavbarItem = ({ title, targetId }) => {
  const navbarRef = useRef(null);

  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (  
    <li ref={navbarRef} className="p-6 m-2">
      <button
        onClick={handleClick}
        className="rounded-xl text-2xl cursor-pointer hover-underline-animation"
      >
       { title }
      </button>
    </li>
  );
};

export default NavbarItem;