import React from "react";
import Card from "../components/Card"; // Import the Card component
import { projects } from "../projects/projects";
import { motion } from "framer-motion";
import { title, content } from "../projects/transitions";

const ProjectPage = () => {
  return (
    <motion.div initial="initial" animate="animate" variants={content} exit={{ opacity: 0 }}>
      <div className="py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-serika_text">My Projects</h2>
        <motion.section variants={title}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project) => (
              <Card key={project.id} project={project} />
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default ProjectPage;
