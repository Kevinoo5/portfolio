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
            "flex py-8 rounded-xl transition-colors text-white bg-[#1e2a47]"
          }
        >
          <div className="flex justify-evenly text-xl w-full">
            <div>
              Frontend Developer on <strong>Volugram</strong>
            </div>
            <div>January 2024 - March 2024</div>
          </div>
        </AccordionHeader>
        <AccordionBody className="mt-2 px-6 rounded-md bg-[#2d3a61] text-white overflow-hidden">
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
            <li className="mr-2 my-2 rounded-full p-3 bg-[#3b5b8e]">
              JavaScript
            </li>
            <li className="mr-2 my-2 rounded-full p-3 bg-[#3b5b8e]">Vue.js</li>
            <li className="mr-2 my-2 rounded-full p-3 bg-[#3b5b8e]">
              Tailwind CSS
            </li>
          </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="mb-2 rounded-lg">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={
            "flex justify-between py-8 rounded-xl transition-colors text-white bg-[#1e2a47]"
          }
        >
          <div className="flex justify-evenly text-xl w-full">
            <div>
              Software Development Intern at <strong>RmIT</strong>
            </div>
            <div>November 2024 - April 2025</div>
          </div>
        </AccordionHeader>
        <AccordionBody className="mt-2 px-6 rounded-md bg-[#2d3a61] text-white overflow-hidden">
          <img
            src="RmIT_logo.svg"
            alt="RmIT"
            className="w-full md:w-1/6 py-2"
          />
          <p className="w-full text-lg px-6">
            Designed and implemented production-grade software solutions for
            managing Jira and collecting data from REST APIs using Python.
            Created a full-stack web application for managing GitLab automatic
            pipelines using Flask and React, using a Flask REST API to serve
            data about GitLab pipelines to the React frontend.
          </p>
          <ul className="flex flex-row text-nowrap flex-wrap px-5 mt-2 mb-1">
            <li className="mr-2 my-2 rounded-full p-3 bg-[#3b5b8e]">
              JavaScript
            </li>
            <li className="mr-2 my-2 rounded-full p-3 bg-[#3b5b8e]">React</li>
            <li className="mr-2 my-2 rounded-full p-3 bg-[#3b5b8e]">
              Tailwind CSS
            </li>
            <li className="mr-2 my-2 rounded-full p-3 bg-[#3b5b8e]">Python</li>
            <li className="mr-2 my-2 rounded-full p-3 bg-[#3b5b8e]">Flask</li>
          </ul>
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default Experience;
