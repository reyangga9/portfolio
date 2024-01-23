import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full  pb-24    text-black">
      <div className="flex flex-col p-4 justify-center mx-auto h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-black">
            Contact
          </h2>
          <p className="py-6 md:text-xl text-gray-800 mt-10">
            Submit the form below to get in touch with me
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/a8ce9c6d-daf0-4d8e-8f96-3483e2a888ce"
            method="POST"
            className="flex flex-col w-full md:w-1/2 p-8"
          >
            <label htmlFor="name" className="font-semibold mt-5">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 placeholder-gray-800 rounded-md text-gray-800 focus:outline-none"
            />

            <label htmlFor="email" className="font-semibold mt-5">
              Email
            </label>
            <input
              type="text"
              name="email"
              required
              placeholder="Enter your email"
              className="p-2 my-2  bg-transparent placeholder-gray-800 border-2 rounded-md text-gray-800 focus:outline-none"
            />

            <label htmlFor="message" className="font-semibold mt-5">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2  border-2 rounded-md text-gray-800 placeholder-gray-800 focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-neutral-600 to-neutral-900 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              {" "}
              Contact me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
