import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
      className="absolute flex items-center justify-center px-6 py-3 font-semibold rounded-full cursor-pointer shadow-dark bg-dark text-light dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
    >
      {name}
    </motion.div>
  );
};

const Skilis = () => {
  return (
    <>
      <h2 className="w-full mt-64 font-bold text-center text-8xl  md:text-6xl md:mt-32 ">
        Skills
      </h2>
      <div className="relative flex items-center justify-center w-full h-screen rounded-full dark:bg-circularDark bg-circularLight lg:bg-ci lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center cursor-pointer p-8 font-semibold rounded-[100%] bg-dark/90  dark:bg-light/90 dark:text-dark  text-light lg:p-6 md:p-4 xs:p-2 xs:text-base "
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-16vw" y="2vw" />
        <Skill name="JavaScript" x="-5vw" y="-12vw" />
        <Skill name="Figma" x="20vw" y="5vw" />
        <Skill name="Node js" x="-6vw" y="18vw" />
        <Skill name="HTML5" x="-25vw" y="-15vw" />
        <Skill name="Mongoodb" x="26vw" y="-10vw" />
        <Skill name="React js" x="-32vw" y="-5vw" />
        <Skill name="Next js" x="10vw" y="-19vw" />
        <Skill name="Sacc" x="-25vw" y="18vw" />
        <Skill name="Firebase" x="32vw" y="12vw" />
      </div>
    </>
  );
};

export default Skilis;
