import { useRef } from "react";

const NavbarItem = ({ title, targetId, customStyles }) => {
  const navbarRef = useRef(null);

  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (  
    <div ref={navbarRef} className="p-6 m-2">
      <button
        onClick={handleClick}
        className={`text-2xl cursor-pointer hover-underline-animation ${customStyles}`}
      >
       { title }
      </button>
    </div>
  );
};

export default NavbarItem;
