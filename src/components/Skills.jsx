import AnimatedTitle from "../common/AnimatedTitle";
import skills from "../data/skillList";

const Skills = () => {
  return (
    <div className="py-16" id="skills">
      <AnimatedTitle title={"My Skills"} />
      <div className="flex justify-center mx-24 flex-wrap">
        <div className="my-4 grid-cols-2 gap-12 grid sm:flex sm:flex-wrap justify-center w-full md:w-3/5">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col justify-center items-center my-6"
            >
              <img
                className="min-h-12 max-h-14 min-w-14 max-w-14 sm:max-h-none sm:max-w-none sm:w-22 sm:h-20"
                src={skill.imageUrl}
                alt={skill.name}
              />
              <span className="ml-0 mt-2 text-white text-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
