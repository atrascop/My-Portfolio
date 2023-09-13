import React from "react";
import { CircularText } from "./icons";
import Link from "next/link";

const HierMe = () => {
  return (
    <div className="fixed flex items-center justify-center overflow-hidden left-4 bottom-4 md:top-0 md:bottom-auto md:right-8 md:left-auto md:absolute sm:right-0">
      <div className="relative flex items-center justify-center w-48 h-auto md:w-24">
        <CircularText
          className={"fill-dark dark:fill-light animate-spin-slow"}
        />
        <Link
          href="mailto:simozrt7@gmail.com"
          target="_blank"
          className="absolute flex items-center justify-center w-20 h-20 font-semibold -translate-x-1/2 -translate-y-1/2 border border-solid rounded-full shadow-md hover:bg-light hover:text-dark border-dark top-1/2 left-1/2 bg-dark text-light  dark:bg-light dark:text-dark dark:hover:bg-dark hover:dark:border-light dark:hover:text-light
          md:w-12 md:h-12 md:text-[10px] "
        >
          Bafox
        </Link>
      </div>
    </div>
  );
};

export default HierMe;
