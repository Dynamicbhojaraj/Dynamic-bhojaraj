import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiThymeleaf, SiMongodb, SiOracle, SiMysql, SiSpringboot, SiAdobephotoshop, SiFigma, SiPython } from "react-icons/si"; // Added SiPython for Python icon
import { DiJava } from "react-icons/di";

const Skill = () => {
  const frontEndSkills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
    { name: "Thymeleaf", icon: <SiThymeleaf className="text-green-500" /> },
    { name: "JSP", icon: <DiJava className="text-red-500" /> }
  ];

  const backEndSkills = [
    { name: "JSP", icon: <DiJava className="text-red-500" /> },
    { name: "SERVLET", icon: <DiJava className="text-red-500" /> },
    { name: "SPRING", icon: <SiSpringboot className="text-green-500" /> },
    { name: "SPRING BOOT", icon: <SiSpringboot className="text-green-500" /> },
    { name: "Microservices", icon: <FaNodeJs className="text-green-400" /> },
    { name: "Hibernate", icon: <DiJava className="text-red-500" /> },
    { name: "JDBC", icon: <DiJava className="text-blue-500" /> },  
    { name: "Python", icon: <SiPython className="text-blue-400" /> } 
  ];

  const databases = [
    { name: "Oracle", icon: <SiOracle className="text-red-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> }
  ];

  const optionalSkills = [
    { name: "C Language", icon: <DiJava className="text-gray-500" /> },
    { name: "DSA", icon: <DiJava className="text-gray-500" /> },
    { name: "Computer Hardware", icon: <DiJava className="text-gray-500" /> },
    { name: "Networking", icon: <DiJava className="text-gray-500" /> }
  ];

  const microsoft = [
    { name: "Word", icon: <DiJava className="text-blue-500" /> },
    { name: "Excel", icon: <DiJava className="text-green-500" /> },
    { name: "PowerPoint", icon: <DiJava className="text-orange-500" /> }
  ];

  const design = [
    { name: "Adobe Photoshop", icon: <SiAdobephotoshop className="text-blue-500" /> },
    { name: "Figma", icon: <SiFigma className="text-purple-500" /> }
  ];

  return (
    <section
       name="Skills" 
     className="bg-white py-10">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        
        <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-gray-200">
          <h3 className="font-semibold text-lg mb-4">Front-End Development</h3>
          <ul className="grid grid-cols-2 gap-4">
            {frontEndSkills.map(skill => (
              <li key={skill.name} className="flex items-center border border-black rounded-lg p-3 space-x-2">
                {skill.icon}
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>

      
        <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-gray-200">
          <h3 className="font-semibold text-lg mb-4">Back-End Development</h3>
          <ul className="grid grid-cols-2 gap-4">
            {backEndSkills.map(skill => (
              <li key={skill.name} className="flex items-center border border-black rounded-lg p-3 space-x-2">
                {skill.icon}
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>

       
        <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-gray-200">
          <h3 className="font-semibold text-lg mb-4">Databases</h3>
          <ul className="grid grid-cols-2 gap-4">
            {databases.map(skill => (
              <li key={skill.name} className="flex items-center border border-black rounded-lg p-3 space-x-2">
                {skill.icon}
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-gray-200">
          <h3 className="font-semibold text-lg mb-4">Optional</h3>
          <ul className="grid grid-cols-2 gap-4">
            {optionalSkills.map(skill => (
              <li key={skill.name} className="flex items-center border border-black rounded-lg p-3 space-x-2">
                {skill.icon}
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-gray-200">
          <h3 className="font-semibold text-lg mb-4">Microsoft Office</h3>
          <ul className="grid grid-cols-2 gap-4">
            {microsoft.map(skill => (
              <li key={skill.name} className="flex items-center border border-black rounded-lg p-3 space-x-2">
                {skill.icon}
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>

      
        <div className="bg-gray-100 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-gray-200">
          <h3 className="font-semibold text-lg mb-4">Design</h3>
          <ul className="grid grid-cols-2 gap-4">
            {design.map(skill => (
              <li key={skill.name} className="flex items-center border border-black rounded-lg p-3 space-x-2">
                {skill.icon}
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skill;
