import { useInView } from "react-intersection-observer";

const AnimatedTitle = ({ title }) => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0,
      });

    return (
        <h1 ref={ref} className={`flex justify-center font-bold text-4xl py-8 text-white ${inView ? 'animate-fade-up animate-delay-100' : 'opacity-0'}`}>{title}</h1>
    );
}
 
export default AnimatedTitle;