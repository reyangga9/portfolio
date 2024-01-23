import React from "react";
import ricknmorty from "../assets/portfolio/gambar1.jpg";
import dota2heroes from "../assets/portfolio/gambar2.jpg";
import landingpage from "../assets/portfolio/gambar3.jpg";
import progateBootcamp from "../assets/portfolio/progateBootcamp.jpg";
import foodGuardian from "../assets/portfolio/foodGuardian.png";
import finalProjectGigih from "../assets/portfolio/finalProject_gigih.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      title: "Rick n Morty Wiki",
      src: ricknmorty,
      link: "https://mortyrick-wiki.netlify.app/",
      code: "https://github.com/reyangga9/react-wiki",
      about:
        "Built using ReactJS and get data from the API , this project was created to improve my frontend ",
    },
    {
      id: 2,
      title: "Hero dota 2",
      src: dota2heroes,
      link: "https://dota2heroez.netlify.app/",
      code: "https://github.com/reyangga9/DTS4A-33-final",
      about:
        "Built using Reactjs and RESTful API, this project is for the final project at Digitalent",
    },
    {
      id: 3,
      title: "Landingpage slicing ",
      src: landingpage,
      link: "https://reyangga9.github.io/website-5-tailwind/",
      code: "https://github.com/reyangga9/website-5-tailwind",
      about:
        "Built using TailwindCSS, this project was the first slicing from figma",
    },
    {
      id: 4,
      title: "Coffee shop",
      src: progateBootcamp,
      link: "https://reyangga9.github.io/website-4/",
      code: "https://github.com/reyangga9/website-4",
      about:
        "Built using HTML and CSS , this project is for the final project at Progate Bootcamp",
    },
    {
      id: 5,
      title: "Tokopedia Play Clone",
      src: finalProjectGigih,
      link: "https://mellifluous-empanada-d76af6.netlify.app/",
      code: "https://github.com/reyangga9/finalterm_gigih_frontend",
      about:
        "Built using MongoDB and ReactJS, this project is for the final project at Gigih",
    },
    {
      id: 6,
      title: "FoodGuardian",
      src: foodGuardian,
      link: "https://sdg-12-b-frontend.vercel.app/recommendations",
      code: "https://github.com/reyangga9/SDG-12-B-Frontend",
      about:
        "Built using Javascript, React, MongoDB, TailwindCSS and NodeJS this project was used for the capstone project",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b mt-12 md:mt-0 pb-24  w-full text-black"
    >
      <div className=" p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black">
            Portfolio
          </p>
          <p className="py-6 md:text-xl text-gray-800 mt-10">
            Check out some of my work right here
          </p>
        </div>
        {/* card */}

        <div className=" sm:w-3/4 mx-auto  md:w-1/2 grid lg:grid-cols-3 lg:w-full  gap-8 px-12  ">
          {portfolio.map((portfolio) => (
            <div
              key={portfolio.id}
              className="border border-black
           rounded-lg   "
            >
              <div className="mb-2 h-48 rounded-lg  ">
                <img
                  src={portfolio.src}
                  alt="reactSmooth"
                  className=" p-1 w-full h-full"
                />
              </div>
              <div className=" p-5 text-justify md:h-48">
                <h1 className="mb-6 text-xl font-semibold ">
                  {portfolio.title}
                </h1>
                <p>{portfolio.about}</p>
              </div>
              <div className="flex mx-auto items-center w-96 lg:w-full justify-between py-6 px-3">
                <button className=" w-4">
                  <a
                    href={portfolio.link}
                    target="_blank
                  "
                    className=" border border-teal-400  group rounded-full w-36 text-black flex justify-center items-center text-center   cursor-pointer p-2 px-4 mx-auto md:mx-0 "
                  >
                    Demo
                    <span className="group-hover:-rotate-90 duration-300">
                      <MdOutlineKeyboardArrowRight size={30} />
                    </span>
                  </a>
                </button>
                <button className=" ">
                  <a
                    href={portfolio.code}
                    target="_blank
                  "
                    className=" border border-teal-400 group rounded-full w-36 text-black flex justify-center items-center text-center   cursor-pointer p-2 px-4 mx-auto md:mx-0"
                  >
                    Code{" "}
                    <span className="group-hover:-rotate-90 duration-300">
                      <MdOutlineKeyboardArrowRight size={30} />
                    </span>
                  </a>
                </button>
              </div>
            </div>
          ))}

          {/* end of card */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
