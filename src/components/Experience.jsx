import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";

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
    {
      id: 7,
      src: nodejs,
      title: "NodeJS",
      style: "shadow-green-600",
    },
    {
      id: 8,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-800",
    },
  ];

  return (
    <div
      name="skills"
      className=" pb-24 md:pt-0 bg-gradient-to-b  from-gray-200  to-gray-100 w-full "
    >
      <div className="flex flex-col max-w-screen-lg  mx-auto h-full w-full justify-center p-4 text-black ">
        <div>
          <h2 className="text-4xl  font-bold border-b-4 border-black p-2 inline">
            Skills
          </h2>
          <p className=" mt-10 py-6 md:text-xl text-gray-800">
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
                "shadow-md hover:scale-105 duration-500 py-2 rounded-lg bg-gradient-to-r from-slate-200 to-zinc-200 lg:w-full h-52 items-center flex flex-col justify-center" +
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
