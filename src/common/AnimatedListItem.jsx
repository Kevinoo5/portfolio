import { useInView } from 'react-intersection-observer';

const AnimatedListItem = ({ project }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0,
    });
  
    return (
      <li ref={ref} className={`flex justify-start border border-red-600 mx-24 ${inView ? 'animate-fade-left' : 'opacity-0'}`}>
        <div className="my-4 mx-8">
          <img
            className="rounded-3xl"
            src={project.imageUrl}
            alt={project.title}
          />
          <p>{project.description}</p>
        </div>
      </li>
    );
  };

export default AnimatedListItem;