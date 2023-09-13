import React from "react";
import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light">
      <svg
        className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx=" 75"
          cy="50"
          r="20"
          className="stroke-1 stroke-primary dark:stroke-light fill-none"
        />
        <motion.circle
          style={{ pathLength: scrollYProgress }}
          cx=" 75"
          cy="50"
          r="20"
          className="stroke-[4px]  pulse fill-light dark:fill-dark"
        />
        <circle
          cx=" 75"
          cy="50"
          r="10"
          className="stroke-1 animate-pulse fill-primary dark:fill-primaryDark "
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
