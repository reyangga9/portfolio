import React from "react";
import hero from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" w-full py-24  bg-gradient-to-b from-gray-500  to-gray-700"
    >
      <div className="  max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row gap-8 md:gap-0">
        <div className="flex flex-col ">
          <div className="pb-8">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white">
              I'm a Frontend Developer
            </h2>
          </div>
          <p className="text-gray-300 py-4 max-w-md md:text-xl text-justify  ">
            I have one year of experience in building and designing software.
            Currently, I enjoy working on web applications using technologies
            like React and Tailwind
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group w-28 text-white flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer p-2 px-4 "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={30} />
              </span>
            </Link>
          </div>
        </div>

        <div className="">
          <img
            src={hero}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3  "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
