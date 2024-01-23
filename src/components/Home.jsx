import React from "react";
import hero from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className=" py-12  bg-white ">
      <div className=" h-[600px] sm:h-[600px] md:h-[720px] flex flex-col-reverse justify-center items-center px-4 md:flex-row gap-8 md:gap-10">
        <div className="flex flex-col md:w-1/2 ">
          <div className="pb-8  ">
            <h1 className="tracking-widest text-center md:text-left mb-4 md:mb-0">
              MY NAME IS
            </h1>
            <h2 className=" text-center  md:text-left tracking-wide text-3xl sm:text-4xl lg:text-2xl font-bold text-gray-900">
              Anggara <span className="text-teal-400">Ramadhan</span>
            </h2>
          </div>
          <p className="text-gray-800 mb-4 max-w-md md:text-xl text-justify  ">
            I have experience in building and designing software, and I'm
            currently passionate about working on web applications using
            technologies like React and Tailwind.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group rounded-full w-36 text-black flex justify-center items-center text-center  border border-teal-300 hover:bg-teal-400 cursor-pointer p-2 px-4 mx-auto md:mx-0"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={30} />
              </span>
            </Link>
          </div>
        </div>

        <div className="w-1/2 relative">
          <div className="rounded-full overflow-hidden h-[90%] w-full mx-auto bg-teal-400 absolute top-10 left-1/2 transform -translate-x-1/2"></div>
          <img
            src={hero}
            alt="my profile"
            className="h-[90%] md:w-[60%] mx-auto pb-16 relative z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
