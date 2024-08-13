import { useInView } from "react-intersection-observer";

const AnimatedListItem = ({ project }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  return (
    <div className={`${inView ? "animate-fade-left" : "opacity-0"}`}>
      <li
        ref={ref}
        className={`p-1 bg-slate-900 bg-opacity-20 backdrop-blur-2xl border-slate-900 border rounded-xl mb-4 lg:mx-24 mx-2 flex flex-wrap justify-center sm:justify-normal sm:flex-nowrap`}
      >
        <div className="my-6 mx-8 h-full">
          <img
            className={`rounded-3xl min-w-28 min-h-24 w-28 h-24 md:min-w-80 md:min-h-56 md:w-80 md:h-56 ${
              project.extraClasses
            } ${
              inView
                ? "animate-fade animate-duration-700 animate-delay-700"
                : "opacity-0"
            }`}
            src={project.imageUrl}
            alt={project.title}
          />
          <div className="flex flew-row justify-center gap-14 mt-4">
            <a href={project.link} target="_blank" rel="noreferrer">
              <img
                src="github-mark-white.svg"
                alt="GitHub"
                className={`w-8 h-8 mt-2 ${
                  inView
                    ? "animate-fade-up animate-delay-[1400ms]"
                    : "opacity-0"
                }`}
              />
            </a>
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noreferrer">
                <img
                  src="globe.svg"
                  alt="Live Demo"
                  className={`w-8 h-8 mt-2 ${
                    inView
                      ? "animate-fade-up animate-delay-[1700ms]"
                      : "opacity-0"
                  }`}
                />
              </a>
            )}
          </div>
        </div>
        <div className="my-4 mx-12 text-md sm:text-xl flex flex-col justify-center">
          <h2
            className={`text-emerald-400 text-2xl font-bold mb-8 ${
              inView ? "animate-fade-up animate-delay-200" : "opacity-0"
            }`}
          >
            {project.title}
          </h2>
          <p
            className={`text-white ${
              inView ? "animate-fade-down animate-delay-700" : "opacity-0"
            }`}
          >
            {project.description}
          </p>
        </div>
      </li>
    </div>
  );
};

export default AnimatedListItem;
