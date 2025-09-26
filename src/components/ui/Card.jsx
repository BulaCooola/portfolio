import React from "react";

const Card = ({ project }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span key={index} className="bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded-lg">
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline font-semibold"
      >
        View Project
      </a>
    </div>
  );
};

export default Card;
