import React from "react";
import ricknmorty from "../assets/portfolio/gambar1.jpg";
import dota2heroes from "../assets/portfolio/gambar2.jpg";
import landingpage from "../assets/portfolio/gambar3.jpg";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: ricknmorty,
      link: "https://mortyrick-wiki.netlify.app/",
      code: "https://github.com/reyangga9/react-wiki",
    },
    {
      id: 2,
      src: dota2heroes,
      link: "https://dota2heroez.netlify.app/",
      code: "https://github.com/reyangga9/DTS4A-33-final",
    },
    {
      id: 3,
      src: landingpage,
      link: "https://reyangga9.github.io/website-5-tailwind/",
      code: "https://github.com/reyangga9/website-5-tailwind",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b pb-24 from-gray-500  to-gray-700 w-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black">
            Portfolio
          </p>
          <p className="py-6 md:text-xl text-gray-300">
            Check out some of my work right here
          </p>
        </div>
        {/* card */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map((portfolio) => (
            <div
              key={portfolio.id}
              className="shadow-md shadow-black
           rounded-lg duration-200 hover:scale-105 bg-gray-800"
            >
              <div className="p-3 bg-gray-800 rounded-lg">
                <img
                  src={portfolio.src}
                  alt="reactSmooth"
                  className=" rounded-lg"
                />
              </div>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 dutaion-200 hover:scale-105">
                  <a
                    href={portfolio.link}
                    target="_blank
                  "
                  >
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 dutaion-200 hover:scale-105">
                  <a
                    href={portfolio.code}
                    target="_blank
                  "
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
