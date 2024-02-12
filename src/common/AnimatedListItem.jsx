import { useInView } from 'react-intersection-observer';

const AnimatedListItem = ({ project }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0,
    });
  
    return (
<li ref={ref} className={`border border-red-600 mx-24 flex ${inView ? 'animate-fade-left' : 'opacity-0'}`}>
  <div className="my-6 mx-8">
    <img
      className="rounded-3xl min-w-[300px] min-h-[250px] w-[300px] h-[250px]"
      src={project.imageUrl}
      alt={project.title}
    />
  </div>
  <div className="my-4 mx-12 flex flex-col justify-center">
    <h2 className="text-white mb-8 text-2xl">{project.title}</h2>
    <p className="text-white">{project.description}</p>
  </div>
</li>

    );
  };

export default AnimatedListItem;