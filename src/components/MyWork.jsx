import AnimatedListItem from "../common/AnimatedListItem";
import AnimatedTitle from "../common/AnimatedTitle";

const projects = [
  {
    id: 1,
    title: "Project 1",
    imageUrl: "https://via.placeholder.com/300",
    description: "Description of Project 1",
  },
  {
    id: 2,
    title: "Project 2",
    imageUrl: "https://via.placeholder.com/300",
    description: "Description of Project 2",
  },
];

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
