import AnimatedListItem from "../common/AnimatedListItem";
import AnimatedTitle from "../common/AnimatedTitle";
import projects from "../data/projectList";

const MyProjects = () => {
    return (
      <ul id="projects">
        <AnimatedTitle title={"My Projects"} />
        {projects.map((project) => (
          <AnimatedListItem key={project.id} project={project} />
        ))}
      </ul>
    );
  };
  
  export default MyProjects;
