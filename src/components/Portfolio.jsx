import React from "react";
import ricknmorty from "../assets/portfolio/gambar1.jpg";
import dota2heroes from "../assets/portfolio/gambar2.jpg";
import landingpage from "../assets/portfolio/gambar3.jpg";
import progateBootcamp from "../assets/portfolio/progateBootcamp.jpg";
import finalProjectGigih from "../assets/portfolio/finalProject_gigih.jpg";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: ricknmorty,
      link: "https://mortyrick-wiki.netlify.app/",
      code: "https://github.com/reyangga9/react-wiki",
      about:
        "Built using ReactJS and get data from the API , this project was created to improve my frontend ",
    },
    {
      id: 2,
      src: dota2heroes,
      link: "https://dota2heroez.netlify.app/",
      code: "https://github.com/reyangga9/DTS4A-33-final",
      about:
        "Built using Reactjs and RESTful API, this project is for the final project at Digitalent",
    },
    {
      id: 3,
      src: landingpage,
      link: "https://reyangga9.github.io/website-5-tailwind/",
      code: "https://github.com/reyangga9/website-5-tailwind",
      about:
        "Built using TailwindCSS, this project was the first tailwind css that i created",
    },
    {
      id: 4,
      src: progateBootcamp,
      link: "https://reyangga9.github.io/website-4/",
      code: "https://github.com/reyangga9/website-4",
      about:
        "Built using HTML and CSS , this project is for the final project at Progate Bootcamp",
    },
    {
      id: 5,
      src: finalProjectGigih,
      link: "https://mellifluous-empanada-d76af6.netlify.app/videos",
      code: "https://github.com/reyangga9/finalterm_gigih_frontend",
      about:
        "Built using MongoDB and ReactJS, this project is for the final project at Gigih",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b pb-24 from-gray-100  to-gray-200 w-full text-black"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black">
            Portfolio
          </p>
          <p className="py-6 md:text-xl text-gray-800 mt-10">
            Check out some of my work right here
          </p>
        </div>
        {/* card */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map((portfolio) => (
            <div
              key={portfolio.id}
              className="shadow-md shadow-black
           rounded-lg duration-200 hover:scale-105 bg-gradient-to-r from-slate-200 to-zinc-200"
            >
              <div className="p-3 bg-gradient-to-r from-slate-200 to-zinc-200 rounded-lg h-52">
                <img
                  src={portfolio.src}
                  alt="reactSmooth"
                  className=" rounded-lg w-full h-full"
                />
              </div>
              <div className=" p-5 text-justify ">
                <p>{portfolio.about}</p>
              </div>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 dutaion-200 hover:scale-110">
                  <a
                    href={portfolio.link}
                    target="_blank
                  "
                    className=" bg-gradient-to-r from-slate-600 to-zinc-900 px-4 py-2 rounded-lg block text-white "
                  >
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 dutaion-200 hover:scale-110">
                  <a
                    href={portfolio.code}
                    target="_blank
                  "
                    className=" bg-gradient-to-r from-slate-600 to-zinc-900 px-4 py-2 rounded-lg block text-white"
                  >
                    Code
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
