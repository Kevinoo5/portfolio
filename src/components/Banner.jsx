const Banner = () => {
    return (
        <div className="px-16 pt-36 lg:pt-24 mb-48 pb-3 h-svh w-full grid grid-cols-1 sm:grid-cols-2 items-center gap-8" id="home">
            <div className="text-white pr-0 sm:pr-24 w-full">
                <h1 className="text-5xl font-bold lg:text-8xl py-3 sm:py-6">Welcome to my portfolio.</h1>
                <p className="mt-3 md:mt-6 w-full text-md sm:text-lg">My name is Kevin Noormets, I am a dedicated student on the path to becoming a proficient software developer. Currently in my third year of studies at Tartu Vocational College, I&apos;m committed to honing my skills and crafting innovative solutions in the world of technology.</p>
            </div>
            <img src="kevin.jpg" alt="Kevin Noormets" className="rounded-3xl lg:ml-44 ml-0 w-[24rem]" />
        </div>
    );
}


export default Banner;
