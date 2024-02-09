const Navbar = () => {
    return (
        <div className='flex items-center h-24 mx-auto px-12 text-white'>
            <div className="flex-1">
                <h1 className='text-2xl font-bold text-[#00df9a]'>KEVIN NOORMETS</h1>
            </div>

            <ul className='flex px-4'>
                <li className='p-6 m-2'>
                    <a href="/" className='rounded-xl scroll-smooth text-2xl cursor-pointer hover-underline-animation'>Home</a>
                </li>
                <li className='p-6 m-2'>
                    <a href="#about" className='rounded-xl scroll-smooth text-2xl cursor-pointer hover-underline-animation'>About Me</a>
                </li>
                <li className='p-6 m-2'>
                    <a href="#skills" className='rounded-xl scroll-smooth text-2xl cursor-pointer hover-underline-animation'>My Skills</a>
                </li>
                <li className='p-6 m-2'>
                    <a href="#work" className='rounded-xl scroll-smooth text-2xl cursor-pointer hover-underline-animation'>My Work</a>
                </li>
            
                <li className='p-6 m-2'>
                    <a href="#contact" className='rounded-xl scroll-smooth text-2xl cursor-pointer hover-underline-animation'>Contact</a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
