import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ time, university, info, type }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 70 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg ">
          {type}{" "}
        </h3>
        <span className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {university}{" "}
        </span>
        <p className="w-full font-medium">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64 ">
      <h2 className="w-full mb-32 font-bold text-center text-8xl md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark/70 dark:bg-light origin-top md:w-[2px]  md:left-[30px] xs:left-5"
          ref={ref}
        />
        <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-2">
          <Details
            time="2016-2020"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
          Intelligence."
            type="  Bachelor Of Science In Computer Science"
            university="Massachusetts Institute Of Technology (MIT)"
          />
          <Details
            type="Master Of Computer Science"
            time="2020-2022"
            info="Completed a master's project on deep learning, developing a new neural network architecture for natural 
            language understanding."
            university="Stanford University"
          />
          <Details
            time="2016-2020"
            info="Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine 
            Learning Engineering."
            type=" Online Coursework"
            university=" Coursera And EdX"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
