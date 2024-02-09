import AnimatedListItem from "../common/AnimatedListItem";
import AnimatedTitle from "../common/AnimatedTitle";
import projects from "../data/workList";

const MyWork = () => {
    return (
      <ul>
        <AnimatedTitle title={"My Work"} />
        {projects.map((project) => (
          <AnimatedListItem key={project.id} project={project} />
        ))}
      </ul>
    );
  };
  
  export default MyWork;
