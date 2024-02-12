const NavbarItem = ({ title, link }) => {
  return (
    <li className="p-6 m-2">
      <a
        href={link}
        className="rounded-xl scroll-smooth text-2xl cursor-pointer hover-underline-animation"
      >
       { title }
      </a>
    </li>
  );
};

export default NavbarItem;
