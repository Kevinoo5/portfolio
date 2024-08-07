import AnimatedTitle from "../common/AnimatedTitle";
import BackgroundBlob from "../common/BackgroundBlob.jsx";

const AboutMe = () => {
  return (
    <div className="relative md:overflow-visible px-12 py-12 w-full" id="about">
      <div className="absolute h-12 inset-0 -top-7 w-full min-w-full left-0 right-0 bottom-0 bg-gray-900 blur-md" />
      <AnimatedTitle title={"About Me"} />
      <div className="flex justify-center flex-row text-white z-10">
        <div className="flex flex-col justify-around lg:flex-row items-center w-full lg:w-2/3 mx-auto">
          <h1 className="text-md z-2 flex flex-col sm:text-xl py-6 lg:w-1/3">
            Three years ago, I started my studies at Tartu Vocational College
            with the goal of becoming a proficient software developer, and in
            that time I have learned a lot about everything to do with the life
            of a developer. I have only worked on one project professionally in
            that time, but that gave me a lot of experience of the work I would
            be doing. I am always thinking of how to improve myself and enjoy
            collaborating with other people, as I like always talking my
            decisions through with someone and asking for help if I get stuck on
            a problem.
          </h1>
          <img
            src="kevin.jpg"
            alt="Kevin Noormets"
            className="rounded-3xl flex items-start origin-bottom duration-700 hover:rotate-6 hover:shadow-2xl hover:shadow-blue-400 w-[20rem] lg:w-1/4"
          />
        </div>
      </div>
      <BackgroundBlob
        color={"bg-blue-600"}
        position={"top-24"}
        opacity={"opacity-30"}
        mobileHidden={true}
      />
      <BackgroundBlob
        color={"bg-emerald-400"}
        position={"-bottom-96 right-72"}
        size={"w-56 h-56"}
        opacity={"opacity-20"}
        mobileHidden={true}
      />
      <BackgroundBlob
        color={"bg-slate-400"}
        position={"top-8 right-24"}
        size={"w-24 h-24"}
        opacity={"opacity-40"}
        mobileHidden={true}
      />
    </div>
  );
};

export default AboutMe;
