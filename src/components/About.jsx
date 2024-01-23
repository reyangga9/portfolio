import React from "react";

const About = () => {
  return (
    <div name="about" className=" pb-24      text-white">
      <div className=" p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-black border-black">
            About
          </p>
        </div>

        <p className=" text-gray-800 text-xl mt-5">
          As a web developer, I find great joy in crafting innovative digital
          experiences. With a passion for problem-solving and an eye for detail,
          I thrive in the dynamic world of web development. What truly fuels my
          enthusiasm is the continuous opportunity to learn and explore new
          technologies.
        </p>
        <br />

        <p className=" text-gray-800 text-xl">
          Being a web developer allows me to combine my creativity with
          technical skills to build cutting-edge websites and applications. From
          designing visually appealing interfaces to implementing robust
          functionalities, I enjoy every aspect of the development process.
        </p>
      </div>
    </div>
  );
};

export default About;
