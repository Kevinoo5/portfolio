const Banner = () => {
    return (
        <div className="pl-5 pr-3 pb-3 w-5/6 flex items-center" style={{ maxHeight: "90vh", overflow: "hidden" }}>
            <div className="text-white">
                <h1 className="flex w-3/5 sm:text-2xl text-4xl md:text-8xl py-3 sm:py-6">Welcome to my portfolio.</h1>
                <p className="mt-3 md:mt-6 w-full md:w-1/2">My name is Kevin Noormets, I am a dedicated student on the path to becoming a proficient software developer. Currently in my third year of studies at Tartu Vocational College, I'm committed to honing my skills and crafting innovative solutions in the world of technology.</p>
            </div>
            <img src="/kevin.jpg" alt="Kevin Noormets" className="rounded-3xl w-[30vw] h-[30vw] sm:w-[34rem] md:h-[34rem]" />
        </div>
    );
}

export default Banner;
