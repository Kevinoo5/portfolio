import AnimatedTitle from "../common/AnimatedTitle";

const AboutMe = () => {
  return (
    <div className="relative px-12 py-12 w-full" id="about">
      <div className="absolute h-12 inset-0 -top-7 w-full min-w-full left-0 right-0 bottom-0 bg-gray-900 blur-md" />
      <AnimatedTitle title={"About Me"} />
      <div className="text-white z-10">
        <h1 className="w-full text-md lg:w-2/5 mx-auto sm:text-xl py-6">
          Three years ago I went to Tartu Vocational College to study to become
          a software developer and in that time I have learned a lot about
          everything to do with the life of a developer. I have only worked on
          one project professionally in that time, but that gave me a lot of
          experience of the work I would be doing. I am always thinking of how
          to improve myself and enjoy collaborating with other people, as I like
          always talking my decisions through with someone and asking for help
          if I get stuck on a problem.
        </h1>
      </div>
    </div>
  );
};

export default AboutMe;
