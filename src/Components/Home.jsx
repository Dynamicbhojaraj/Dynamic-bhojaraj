import React from 'react';
import pic from "../../public/my image.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNodejs } from "react-icons/tb";
import { ReactTyped } from "react-typed";
import { SiSpringboot } from "react-icons/si";

function Home() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-12">

        <div className="flex flex-col md:flex-row items-center">

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center md:justify-end order-1 md:order-last mt-8 md:mt-16">
            <img
              src={pic}
              className="w-[350px] h-[350px] md:w-[500px] md:h-[400px] object-cover shadow-lg" // Changed to rectangle
              alt="Profile"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 mt-8 md:mt-16 space-y-4 order-last md:order-1 mb-0">
              <ReactTyped
                strings={[
                  "Java Developer",
                  "Machine Learning Developer",
                  "Dynamic Bhojaraj",
                  "IT Professional",
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
                className="block text-3xl md:text-4xl font-bold fly-in"
              />

              <h1 className="text-gray-800 text-3xl md:text-6xl">Hello I'm</h1>
              <div className="flex space-x-1 text-3xl md:text-6xl font-bold">
                <ReactTyped
                  strings={["Bhojaraj Jayapuria"]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop={false}
                  className="text-gray-900"
                />
              </div>

            <br />
            <p className="text-sm md:text-md text-justify">
              As a fresher, I am eager to work in a highly competitive environment,
              contributing my best for the growth of the organization while
              ensuring my own career development.
            </p>
          </div>
        </div>

        <br />

        {/* Icons Section */}
        <div className="flex flex-col md:flex-row items-center space-x-10 mt-2">
          
          {/* Available on Section */}
          <div className="space-y-2">
            <h1 className="font-bold">Available on</h1>
            <ul className="flex space-x-5">
              <li>
                <a href="https://www.facebook.com/jagan.jayapuria.9" target="_blank">
                  <FaFacebook className="text-2xl cursor-pointer" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/bhojaraj-jayapuria-b4a653249/" target="_blank">
                  <FaLinkedin className="text-2xl cursor-pointer" />
                </a>
              </li>
              <li>
                <FaInstagram className="text-2xl cursor-pointer" />
              </li>
            </ul>
          </div>

          {/* Currently Working On Section */}
          <div className="space-y-2">
            <h1 className="font-bold">Currently working on</h1>
            <div className="flex space-x-5">
              <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
              <FaReact className="text-xl md:text-3xl hover:scale-110" />
              <TbBrandNodejs className="text-xl md:text-3xl hover:scale-110" />
              <SiSpringboot className="text-xl md:text-3xl hover:scale-110" />
            </div>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
