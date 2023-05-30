import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";

const Experience = () => {
  const experience = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="pb-24 md:pt-0 bg-gradient-to-b from-gray-700  to-gray-500 w-full "
    >
      <div className="flex flex-col max-w-screen-lg  mx-auto h-full w-full justify-center p-4 text-white ">
        <div>
          <h2 className="text-4xl font-bold border-b-4 border-black p-2 inline">
            Experience
          </h2>
          <p className="py-6 md:text-xl text-gray-300">
            These are the technologies i've worked with
          </p>
        </div>
        {/* card container */}
        <div
          className="w-full  grid grid-cols-2 sm:grid-cols-3 gap-8 text-center
        py-8 px-12 sm:px-0"
        >
          {/* each of card */}
          {experience.map((link) => (
            <div
              key={link.id}
              className={
                "shadow-md hover:scale-105 duration-500 py-2 rounded-lg bg-gray-800 lg:w-full h-52 items-center flex flex-col justify-center" +
                " " +
                link.style
              }
            >
              <img src={link.src} alt={link.title} className="w-24 mx-auto" />
              <p className="mt-4">{link.title}</p>
            </div>
          ))}
          {/* end each of card */}
        </div>
        {/* end of card container */}
      </div>
    </div>
  );
};

export default Experience;
