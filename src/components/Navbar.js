import Link from "next/link";

import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  TwitterIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  SunIcon,
  MoonIcon,
} from "./icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`absolute rounded-full -bottom-0.5 left-0 inline-block h-[2px] 
        group-hover:w-full transition-[width] ease duration-300 bg-black  ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`absolute rounded-full -bottom-0.5 left-0 inline-block h-[2px] 
        group-hover:w-full transition-[width] ease duration-300 bg-light dark:bg-dark ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

function Navbar() {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative z-10 flex items-center justify-between w-full px-32 py-8 font-medium lg:px-16 md:px-12 sm:px-8 ">
      <button
        className="flex-col items-center justify-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark transition-all duration-300 ease-out dark:bg-light block h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark transition-all duration-300 ease-out dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark transition-all duration-300 ease-out dark:bg-light block h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="flex items-center justify-between w-full lg:hidden">
        <nav>
          <CustomLink href="/" title={"Home"} className="mr-4" />

          <CustomLink href="/about" className="m-4" title={"About"} />

          <CustomLink href="/projects" title={"Projects"} className="m-4" />

          <CustomLink href="/articals" title={"Articals"} className="m-4" />
        </nav>
        <nav className="flex flex-wrap items-center justify-center ">
          <motion.a
            href="https://twitter.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mx-3"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com"
            target={"_blank"}
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
          >
            <GithubIcon />{" "}
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target={"_blank"}
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
          >
            <LinkedInIcon />{" "}
          </motion.a>
          <motion.a
            href="https://pinteres.com"
            target={"_blank"}
            className="w-6 mx-3 rounded-full bg-light"
            whileHover={{ y: -2 }}
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            href="https://dribbble.com"
            target={"_blank"}
            className="w-6 ml-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <DribbbleIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-6  w-6 h-6 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <div className="flex w-full justify-between flex-col sm:text-sm items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark dark:bg-light/75 text-light dark:text-dark rounded-lg backdrop-blur-md py-32 min-w-[70wv]">
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink
              href="/"
              title={"Home"}
              className="m-4"
              toggle={handleClick}
            />

            <CustomMobileLink
              href="/about"
              className="m-4"
              title={"About"}
              toggle={handleClick}
            />

            <CustomMobileLink
              href="/projects"
              title={"Projects"}
              className="m-4"
              toggle={handleClick}
            />

            <CustomMobileLink
              href="/articals"
              title={"Articals"}
              className="m-4"
              toggle={handleClick}
            />
          </nav>
          <nav className="flex flex-wrap items-center justify-center ">
            <motion.a
              href="https://twitter.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mx-3"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://github.com"
              target={"_blank"}
              className="w-6 mx-3"
              whileHover={{ y: -2 }}
            >
              <GithubIcon />{" "}
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target={"_blank"}
              className="w-6 mx-3"
              whileHover={{ y: -2 }}
            >
              <LinkedInIcon />{" "}
            </motion.a>
            <motion.a
              href="https://pinteres.com"
              target={"_blank"}
              className="w-6 mx-3 rounded-full bg-light"
              whileHover={{ y: -2 }}
            >
              <PinterestIcon />
            </motion.a>
            <motion.a
              href="https://dribbble.com"
              target={"_blank"}
              className="w-6 ml-3"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <DribbbleIcon />
            </motion.a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-6  w-6 h-6 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}

export default Navbar;
