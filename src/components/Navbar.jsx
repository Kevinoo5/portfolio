const Navbar = () => {
    return (
        <div className='flex items-center h-24 mx-auto px-12 text-white'>
            <div className="flex-1">
                <h1 className='text-3xl font-bold text-[#00df9a]'>KEVIN NOORMETS</h1>
            </div>

            <ul className='flex px-4'>
                <li className='p-6 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>Home</li>
                <li className='p-6 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>About Me</li>
                <li className='p-6 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>My Work</li>
                <li className='p-6 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>Contact</li>
            </ul>
        </div>
    );
}

export default Navbar