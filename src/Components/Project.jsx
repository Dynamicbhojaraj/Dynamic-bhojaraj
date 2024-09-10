import React, { useState } from 'react';

const projects = [
  { title: "Dynamic AI", description: "It is an image Processing Software", url: "#", technologies: "Machine Learning, OpenAI API", image: "dynamic-ai.jpg" },
  { title: "Portfolio", description: "It is a personal website", url: "#", technologies: "React.js, Tailwind CSS", image: "portfolio.png" },
  { title: "Coming Soon", description: "", url: "#", technologies: "", image: "coming-soon.jpg" },
  { title: "Coming Soon", description: "", url: "#", technologies: "", image: "coming-soon.jpg" },
  { title: "Coming Soon", description: "", url: "#", technologies: "", image: "coming-soon.jpg" },
  { title: "Coming Soon", description: "", url: "#", technologies: "", image: "coming-soon.jpg" },
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section name="project" className="bg-white py-10">
      <div className="relative w-full max-w-none md:max-w-[1200px] mx-auto bg-white rounded-lg p-4 border-2 border-green-500 hover:shadow-lg transition duration-500 ease-in-out">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-md border-2 border-green-500 hover:shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-200 cursor-pointer"
              style={{ height: '400px' }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-2"
              />

              <h3 className="font-semibold text-lg text-center mb-1">{project.title}</h3>

              <p className="text-gray-700 text-center mb-2">{project.description}</p>

              <button
                className="text-blue-500 border border-blue-500 rounded-full py-1 px-4 block mx-auto text-center hover:bg-blue-500 hover:text-white transition-all"
                style={{ backgroundColor: 'transparent' }}
                onClick={() => handleProjectClick(project)}
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg border-2 border-green-500 max-w-6xl w-full relative flex flex-col md:flex-row">
            <button className="absolute top-2 right-2 text-xl font-bold" onClick={closeModal}>×</button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full md:w-1/2 h-64 object-cover rounded-md mb-4 md:mb-0"
            />

            <div className="md:pl-6 md:w-1/2 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-3xl mb-4">{selectedProject.title}</h3>
                <p className="mb-4"><strong>Description:</strong> {selectedProject.description}</p>
                <p className="mb-4"><strong>Technologies:</strong> {selectedProject.technologies}</p>
              </div>

              <div className="flex justify-center space-x-4 mt-4">
                <button
                  className="text-black bg-transparent border-2 border-blue-500 rounded-full py-2 px-6 hover:bg-blue-500 transition-all"
                  onClick={closeModal}
                >
                  Close
                </button>
                <a
                  href={selectedProject.url}
                  className="text-black bg-transparent border-2 border-blue-500 rounded-full py-2 px-6 hover:bg-blue-500 transition-all text-center"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
