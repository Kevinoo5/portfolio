import { useInView } from 'react-intersection-observer';

const AnimatedListItem = ({ project }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <li
    ref={ref}
    className={`p-1 bg-gradient-to-r from-slate-900 to-gray-800 rounded-xl mb-4 lg:mx-24 mx-2 flex ${
      inView ? "animate-fade-left" : "opacity-0"
    }`}
  >
    <div className="my-6 mx-8">
      <img
        className="rounded-3xl min-w-28 min-h-24 w-28 h-24 md:min-w-80 md:min-h-72 md:w-80 md:h-72"
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
