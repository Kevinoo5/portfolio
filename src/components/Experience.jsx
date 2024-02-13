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
      <div id="experience" className="mx-2 lg:mx-64">
        <AnimatedTitle title="Experience" />
        <Accordion open={open === 1} className="mb-2 rounded-lg">
        <AccordionHeader
      onClick={() => handleOpen(1)}
      className={"flex justify-evenly py-8 rounded-xl transition-colors text-white bg-gradient-to-b from-purple-950 to-[#3f2350]"}
    >
      <div className="pl-6">
        Frontend Developer on <strong>Volugram</strong>
      </div>
      <div className="">January 2024 - Present</div>
    </AccordionHeader>
          <AccordionBody className="mt-2 pl-6 bg-[#4e3f8d] text-white">
            <p>
              <strong>Frontend Developer</strong>
              <br />
              <span>January 2024 - Present</span>
            </p>
          </AccordionBody>
        </Accordion>
      </div>
    );
}

export default Experience;