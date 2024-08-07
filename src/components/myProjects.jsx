import AnimatedListItem from "../common/AnimatedListItem";
import AnimatedTitle from "../common/AnimatedTitle";
import projects from "../data/projectList";
import BackgroundBlob from "../common/BackgroundBlob.jsx";

const MyProjects = () => {
  return (
    <ul className="relative overflow-hidden md:overflow-visible" id="projects">
      <AnimatedTitle title={"My Projects"} />
      <BackgroundBlob
        color={"bg-purple-600"}
        position={""}
        size={"w-36 h-36"}
        opacity={"opacity-60"}
      />
      {projects.map((project) => (
        <AnimatedListItem key={project.id} project={project} />
      ))}
      <BackgroundBlob
        color={"bg-teal-800"}
        position={"right-72"}
        size={"w-24 h-24"}
        opacity={"opacity-70"}
      />
    </ul>
  );
};

export default MyProjects;
