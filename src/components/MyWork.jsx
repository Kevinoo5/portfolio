import React from 'react';
import { useInView } from 'react-intersection-observer';

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
      <h1 className="flex justify-center text-3xl text-white">My Work</h1>
      {projects.map((project) => (
        <AnimatedListItem key={project.id} project={project} />
      ))}
    </ul>
  );
};

const AnimatedListItem = ({ project }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // adjust threshold as per your requirement
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

export default MyWork;
