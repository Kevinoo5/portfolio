import BackgroundBlob from "../common/BackgroundBlob.jsx";

const Banner = () => {
  return (
    <div
      className="relative overflow-hidden px-16 pt-36 lg:pt-24 pb-3 h-svh w-full grid grid-cols-1 sm:grid-cols-2 items-center gap-8"
      id="home"
      style={{
        backgroundImage: "url('sunset.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 60%",
      }}
    >
      {/* Overlay for background image */}

      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-20 z-1" />

      <BackgroundBlob color={"bg-blue-500"} />
      <BackgroundBlob color={"bg-indigo-400"} position={"top-12 right-24"} />
      <BackgroundBlob color={"bg-pink-400"} position={"top-48 left-1/4"} />
      <div className="text-white pr-0 z-content sm:pr-24 w-full">
        <h1 className="text-5xl font-bold lg:text-8xl py-3 sm:py-6">
          Welcome to my portfolio.
        </h1>
        <p className="mt-3 md:mt-6 w-full text-md sm:text-lg">
          My name is Kevin Noormets, I am a dedicated student on the path to
          becoming a proficient software developer. Currently in my fourth year
          of studies at Tartu Vocational College, I&apos;m committed to honing
          my skills and crafting innovative solutions in the world of
          technology.
        </p>
      </div>
    </div>
  );
};

export default Banner;
