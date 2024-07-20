import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import AnimatedTitle from "../common/AnimatedTitle";

const Experience = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div id="experience" className="mx-2 my-12 lg:mx-64">
      <AnimatedTitle title="Work Experience" />
      <Accordion open={open === 1} className="mb-2 rounded-lg">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={
            "flex justify-evenly py-8 rounded-xl transition-colors text-white bg-gradient-to-b from-purple-950 to-[#3f2350]"
          }
        >
          <div className="pl-4 pr-12 md:pl-24">
            Frontend Developer on <strong>Volugram</strong>
          </div>
          <div className="pr-4">January 2024 - March 2024</div>
        </AccordionHeader>
        <AccordionBody className="mt-2 px-6 rounded-md bg-[#4e3f8d] text-white overflow-hidden">
          <img
            src="volugram_logo.png"
            alt="Volugram"
            className="w-full md:w-1/4"
          />

          <p className="w-full text-lg px-6">
            Developing the frontend of the Volugram volunteer recognition
            platform using Vue.js and Tailwind CSS. I joined the team late into
            the project and was able to work on the final stages of the
            development process along with adding and changing certain elements
            according to client feedback.
          </p>

          <ul className="flex flex-row text-nowrap flex-wrap px-5 mt-2 mb-1">
            <li className="mr-2 my-2 rounded-full p-3 bg-[#6e53da]">
              JavaScript
            </li>
            <li className="mr-2 my-2 rounded-full p-3 bg-[#6e53da]">Vue.js</li>
            <li className="mr-2 my-2 rounded-full p-3 bg-[#6e53da]">
              Tailwind CSS
            </li>
          </ul>
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default Experience;
