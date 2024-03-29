import AnimatedTitle from "../common/AnimatedTitle";
import skills from "../data/skillList";

const Skills = () => {
    return (
        <div className="py-16" id="skills">
            <AnimatedTitle title={"My Skills"} />
            <div className="flex justify-center mx-24 flex-wrap">
                <div className="my-4 mx-8 flex flex-wrap justify-center w-full md:w-3/5">
                    {skills.map((skill) => (
                    <div key={skill.id} className="flex flex-col items-center mx-6 my-6">
                        <img className="w-22 h-20" src={skill.imageUrl} alt={skill.name} />
                        <span className="mt-2 text-white">{skill.name}</span>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
