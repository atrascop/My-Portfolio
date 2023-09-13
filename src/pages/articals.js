import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import pictureArtical from "../../public/images/articles/create loading screen in react js.jpg";
import pictureArtical2 from "../../public/images/articles/pagination component in reactjs.jpg";
import pictureArtical3 from "../../public/images/articles/create modal component in react using react portals.png";
import pictureArtical4 from "../../public/images/articles/smooth scrolling in reactjs.png";
import pictureArtical5 from "../../public/images/articles/What is Redux with easy explanation.png";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "./../components/TransitionEffect";

const FramerImage = motion(Image);
const MovingImg = ({ title, link, img }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMous(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMousLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMous}
      onMouseLeave={handleMousLeave}
    >
      <h2 className="text-xl font-semibold capitalize hover:underline ">
        {" "}
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        src={img}
        ref={imgRef}
        alt={title}
        className="absolute z-10 hidden h-auto rounded-lg w-96 md:!hidden"
      />
    </Link>
  );
};
const Articale = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative flex items-center justify-between w-full p-4 py-6 my-4 border border-b-4 border-r-4 border-solid sm:flex-col rounded-xl border-dark dark:bg-dark dark:border-light bg-light first:mt-0"
    >
      <MovingImg img={img} title={title} link={link} />
      <span className="pl-4 font-semibold text-primary dark:text-primaryDark sm:self-start sm:pl-0">
        {date}
      </span>
    </motion.li>
  );
};
const FeaturedArticals = ({ img, link, title, summary, time }) => {
  return (
    <li className="relative w-full col-span-1 p-4 border border-solid bg-light border-dark dark:bg-dark dark:border-light rounded-2xl">
      {/* <div className=" absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark  dark:bg-light rounded-br-3xl" /> */}

      <Link
        href={link}
        target="_blank"
        className="inline-block w-full overflow-hidden rounded-lg cursor-pointer"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw,
          (max-width:1200px) 50vw,
          50vw
          "
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="my-2 mt-4 text-2xl font-bold capitalize hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="mb-2 text-sm"> {summary}</p>
      <span className="font-semibold text-primary dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};
const Articals = () => {
  return (
    <>
      <Head>
        <title>Mohamed Baghough | Articals Page</title>
        <meta name="Description" content="My Description" />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="flex items-center flex-wrap  justify-center mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-12 ">
            <FeaturedArticals
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project.
"
              time="9 min read"
              link="/"
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              img={pictureArtical2}
            />
            <FeaturedArticals
              summary="
              Learn how to create stunning loading screens in React with 3 different methods. 
              Discover how to use React-Loading, React-Lottie & build a custom loading screen. 
              Improve the user experience.
              
"
              time="10 min read"
              link="/"
              title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
              img={pictureArtical}
            />
          </ul>
          <h2 className="w-full my-16 mt-32 text-4xl font-bold text-center ">
            All Articals
          </h2>
          <ul>
            <Articale
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="May 3, 2023"
              link="/"
              img={pictureArtical3}
            />
            <Articale
              title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
              date="March 12, 2022"
              link="/"
              img={pictureArtical4}
            />
            <Articale
              title="Redux Simplified: A Beginner's Guide For Web Developers"
              date="June 22, 2023"
              link="/"
              img={pictureArtical5}
            />
            <Articale
              title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
              date="March 12, 2022"
              link="/"
              img={pictureArtical4}
            />
            <Articale
              title="Redux Simplified: A Beginner's Guide For Web Developers"
              date="June 22, 2023"
              link="/"
              img={pictureArtical5}
            />
            <Articale
              title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
              date="March 12, 2022"
              link="/"
              img={pictureArtical4}
            />
            <Articale
              title="Redux Simplified: A Beginner's Guide For Web Developers"
              date="June 22, 2023"
              link="/"
              img={pictureArtical5}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articals;
