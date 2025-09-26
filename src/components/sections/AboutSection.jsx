import { motion } from "framer-motion";

// Images
import htmlLogo from "../../assets/images/skills/html.png";
import jsLogo from "../../assets/images/skills/javascript.png";
import nodeLogo from "../../assets/images/skills/nodejs.png";
import nextjsLogo from "../../assets/images/skills/nextjs.png";
import reactLogo from "../../assets/images/skills/react.png";
import mongodbLogo from "../../assets/images/skills/mongodb.png";
import gitLogo from "../../assets/images/skills/git.png";
import cssLogo from "../../assets/images/skills/css.png";
import graphqlLogo from "../../assets/images/skills/graphql.png";
import pythonLogo from "../../assets/images/skills/python.png";
import dockerLogo from "../../assets/images/skills/docker.png";
import awsLogo from "../../assets/images/skills/aws.png";
import circleciLogo from "../../assets/images/skills/circleci.png";
import cppLogo from "../../assets/images/skills/cpp.png";
import expressLogo from "../../assets/images/skills/expressjs.png";
import githubLogo from "../../assets/images/skills/github.png";
import npmLogo from "../../assets/images/skills/npm.png";
import redisLogo from "../../assets/images/skills/redis.png";
import sqlLogo from "../../assets/images/skills/sql.png";
import viteLogo from "../../assets/images/skills/vite.png";

import photoWebsite from "../../assets/images/photo-portfolio-screenshot.jpg";

const skills = [
  { name: "HTML", src: htmlLogo },
  { name: "JavaScript", src: jsLogo },
  { name: "Node.js", src: nodeLogo },
  { name: "Nextjs", src: nextjsLogo },
  { name: "React", src: reactLogo },
  { name: "MongoDB", src: mongodbLogo },
  { name: "Git", src: gitLogo },
  { name: "CSS", src: cssLogo },
  { name: "GraphQL", src: graphqlLogo },
  { name: "Python", src: pythonLogo },
  { name: "Docker", src: dockerLogo },
  { name: "Express", src: expressLogo },
  { name: "AWS", src: awsLogo },
  { name: "CircleCi", src: circleciLogo },
  { name: "C++", src: cppLogo },
  { name: "Redis", src: redisLogo },
  { name: "NPM", src: npmLogo },
  { name: "SQL", src: sqlLogo },
  { name: "Vite", src: viteLogo },
  { name: "GitHub", src: githubLogo },
];

function AboutSection() {
  return (
    <div className="min-h-screen flex md:flex-row flex-col items-center justify-center">
      <motion.div
        className="max-w-xl text-center p-6 rounded-2xl flex flex-col"
        initial={{ opacity: 0, y: 50 }} // hidden before entering
        whileInView={{ opacity: 1, y: 0, scale: 1 }} // animate when in viewport
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} // animate once, when 20% visible
      >
        <h2 className="text-6xl font-bold mb-4 text-serika-main">About</h2>
        <p className="text-serika-text text-lg">
          My academic career at Stevens allowed me to build a strong foundation in programming
          languages such as{" "}
          <a className="text-serika-main">
            {" "}
            Python, JavaScript, C++, Java, TypeScript, and HTML/CSS
          </a>
          . My coursework and projects prepared me with a solid understanding of{" "}
          <a className="text-serika-main"> data structures </a>
          and
          <a className="text-serika-main"> algorithms </a>, systems/security, and application
          development. I also had the opportunity to learn different technologies to build various
          types of projects, as well as collaborate with diverse teams.
        </p>

        <p className="md:text-lg text-lg text-serika-text mt-8">
          Outside of my technical background, I was a NCAA DIII wrestler for
          <a className="text-serika-main hover:text-blue-400" href="https://stevensducks.com/">
            {" "}
            Stevens Athletics
          </a>
          , and I have a strong passions for{" "}
          <div className="relative inline-block group">
            <a
              className="text-serika-main hover:text-blue-400 underline"
              href="https://brandenbphoto.myportfolio.com/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              photography
            </a>
            {/* Hover preview */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-serika_bg text-serika_text rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
              <img
                src={photoWebsite}
                alt="Photography Preview"
                className="w-full h-40 object-cover rounded-t"
              />
              <div className="p-2 text-sm">
                Click to visit my Adobe Portfolio and see my photography projects.
              </div>
            </div>
          </div>
          , surfing, traveling, and some video games.
        </p>
      </motion.div>

      <motion.div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center`}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50,
            }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
          >
            {/* <div key={skill.name} className="flex flex-col items-center"> */}
            <img src={skill.src} alt={skill.name} className="w-16 h-16 object-contain mb-2" />
            <span className="text-sm text-serika-text">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default AboutSection;
