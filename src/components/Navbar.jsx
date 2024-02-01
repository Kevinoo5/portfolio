const Navbar = () => {
    return (
        <div className='bg-black flex items-center h-24 w-full mx-auto px-12 text-white border-b border-gray-900'>
            <div className="flex-1">
                <h1 className='text-3xl font-bold text-[#00df9a]'>PORTFOLIO</h1>
            </div>

            <ul className='flex px-4'>
                <li className='p-6 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>Home</li>
                <li className='p-6 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>About Me</li>
                <li className='p-6 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>Projects</li>
                <li className='p-6 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>Contact</li>
            </ul>
        </div>
    );
}

export default Navbar