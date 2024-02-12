import NavbarItem from "../common/NavbarItem";

const Navbar = () => {
    return (
        <div className='flex items-center h-24 mx-auto px-12 text-white'>
            <div className="flex-1">
                <h1 className='text-2xl font-bold text-[#00df9a]'>KEVIN NOORMETS</h1>
            </div>

            <ul className='flex px-4'>
                <NavbarItem title="Home" link="/" />
                <NavbarItem title="About Me" link="#about" />
                <NavbarItem title="My Skills" link="#skills" />
                <NavbarItem title="My Projects" link="#work" />
                <NavbarItem title="Contact" link="#contact" />
            </ul>
        </div>
    );
}

export default Navbar;
