import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 80 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-primary  dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="font-medium capitalize text-dark/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="w-full font-medium md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experientce = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="w-full mb-32 font-bold text-center text-8xl md:text-6xl xs:text-4xl md:mb-16">
        Experientce
      </h2>
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark/70 dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-5"
          ref={ref}
        />
        <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-2">
          <Details
            company={"Google"}
            companyLink={"www.google.com"}
            time={"2022-Present"}
            position={"Software Engineer"}
            address={"Mountain View, CA"}
            work="Worked on a team responsible for developing new features for Google's 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization. "
          />
          <Details
            company={"Google"}
            companyLink={"www.google.com"}
            time={"2022-Present"}
            position={"Software Engineer"}
            address={"Mountain View, CA"}
            work="Worked on a team responsible for developing new features for Google's 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization. "
          />
          <Details
            company={"Google"}
            companyLink={"www.google.com"}
            time={"2022-Present"}
            position={"Software Engineer"}
            address={"Mountain View, CA"}
            work="Worked on a team responsible for developing new features for Google's 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization. "
          />
          <Details
            company={"Google"}
            companyLink={"www.google.com"}
            time={"2022-Present"}
            position={"Software Engineer"}
            address={"Mountain View, CA"}
            work="Worked on a team responsible for developing new features for Google's 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization. "
          />
          <Details
            company={"Google"}
            companyLink={"www.google.com"}
            time={"2022-Present"}
            position={"Software Engineer"}
            address={"Mountain View, CA"}
            work="Worked on a team responsible for developing new features for Google's 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization. "
          />
        </ul>
      </div>
    </div>
  );
};

export default Experientce;
