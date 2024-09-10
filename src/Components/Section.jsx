import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { MdDone } from "react-icons/md";

const experiences = [
  {
    title: "Internship | Machine Learning",
    company: "PanTech Solution", // Corrected spelling
    date: "March 2024 – June 2024",
    description:
      "Applied machine learning techniques using Python libraries like Pandas and Scikit Learn.",
    status: "Completed",
  },
  {
    title: "Internship | Spring Boot",
    company: "Smart Programming",
    date: "January 2024 – April 2024",
    description:
      "Learned Spring Boot and gained experience developing a complex website using Spring Boot.",
    status: "Completed",
  },
];

const education = [
  {
    title: "Diploma in Information Technology",
    institute: "S.K.D.A.V. Govt. Polytechnic, Rourkela",
    date: "2022 – 2025",
    percentage: "85%",
  },
  {
    title: "Matriculation",
    institute: "C.P.G.P. High School Surguda",
    date: "2020 – 2022",
    percentage: "85%",
  },
];

function Section() {
  return (
    <div className="relative w-full max-w-none md:max-w-[1200px] mx-auto bg-white rounded-lg p-4 border-2 border-black hover:shadow-lg transition duration-500 ease-in-out">
      <div className="p-4 border rounded-lg shadow-md mb-6">
        <h2 className="text-3xl font-bold flex items-center mb-6">
          <FaBriefcase className="mr-2" /> Experience
        </h2>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-300"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <MdDone className="text-green-500" />
            </div>
            <p className="text-gray-600">{exp.date}</p>
            <p className="text-gray-800">{exp.company}</p>
            <p className="text-gray-600 mt-2 text-sm">{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="p-4 border rounded-lg shadow-md">
        <h2 className="text-3xl font-bold flex items-center mb-6">
          <FaGraduationCap className="mr-2" /> Education
        </h2>
        {education.map((edu, index) => (
          <div
            key={index}
            className="mb-6 p-4 bg-gray-100 rounded-lg border border-gray-300"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">{edu.title}</h3>
              <p className="text-gray-600 text-sm">{edu.percentage}</p>
            </div>
            <p className="text-gray-600">{edu.date}</p>
            <p className="text-gray-800">{edu.institute}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section;
