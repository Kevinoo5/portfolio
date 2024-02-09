const Banner = () => {
    return (
    <div className="px-12 pb-12 w-5/6 flex items-center" style={{ height: "90svh" }}>
        <div className="text-white">
        <h1 className="flex w-3/5 text-8xl py-6">Welcome to my portfolio.</h1>
        <p className="mt-12 w-1/2">My name is Kevin Noormets, I am a dedicated student on the path to becoming a proficient software developer. Currently in my third year of studies at Tartu Vocational College, I'm committed to honing my skills and crafting innovative solutions in the world of technology.</p>
        </div>
        <img src="../../public/kevin.jpg" alt="Kevin Noormets" className="rounded-3xl w-[34rem] h-[34rem]" />
    </div>
        );
}
 
export default Banner;