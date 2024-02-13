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
      <div id="experience" className="mx-24">
        <AnimatedTitle title="Experience" />
        <Accordion open={open === 1} className="mb-2 rounded-lg bg-gradient-to-b from-blue-900 to-blue-950 border border-blue-gray-100">
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className={"border-b-0 transition-colors text-white"}
          >
            Volugram
          </AccordionHeader>
          <AccordionBody>
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