const Banner = () => {
    return (
        <div className="pl-16 pt-48 lg:pt-24 mb-48 pb-3 h-svh w-10/12 flex items-center" id="home">
            <div className="text-white w-full">
                <h1 className="flex w-3/5 text-4xl font-bold lg:text-8xl py-3 sm:py-6">Welcome to my portfolio.</h1>
                <p className="mt-3 md:mt-6 w-full text-xs lg:text-lg md:w-1/2">My name is Kevin Noormets, I am a dedicated student on the path to becoming a proficient software developer. Currently in my third year of studies at Tartu Vocational College, I&apos;m committed to honing my skills and crafting innovative solutions in the world of technology.</p>
            </div>
            <img src="kevin.jpg" alt="Kevin Noormets" className="rounded-3xl w-[8rem] md:w-[12rem] lg:w-[24rem]" />
        </div>
    );
}

export default Banner;
