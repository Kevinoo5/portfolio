const Banner = () => {
    return (
        <div className="pl-16 pb-3 h-svh w-10/12 flex items-center overflow-hidden" id="home">
            <div className="text-white w-full">
                <h1 className="flex w-3/5 sm:text-2xl text-4xl md:text-8xl py-3 sm:py-6">Welcome to my portfolio.</h1>
                <p className="mt-3 md:mt-6 w-full md:w-1/2">My name is Kevin Noormets, I am a dedicated student on the path to becoming a proficient software developer. Currently in my third year of studies at Tartu Vocational College, I'm committed to honing my skills and crafting innovative solutions in the world of technology.</p>
            </div>
            <img src="/kevin.jpg" alt="Kevin Noormets" className="rounded-3xl w-[34rem]" />
        </div>
    );
}

export default Banner;
