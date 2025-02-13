import React from "react";
import { NavLink } from "react-router-dom"; // Import Link from react-router-dom
import HomePage from "../pages/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <div>
      <div className="relative flex justify-between items-center">
        <div className="absolute left-4 flex text-serika_text space-x-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/branden-bulatao-4a4851251/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/BulaCooola "
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>

          {/* Photography Portfolio */}
          <a
            href="https://brandenbphoto.myportfolio.com/home"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faCamera} size="2x" />
          </a>
        </div>
        <h1 className="mx-auto text-4xl text-serika_main text-center">Branden Bulatao</h1>
        {/* <div className="flex justify-center space-x-4"></div> */}
      </div>
      <header className="bg-serika_bg text-serika_caret p-4">
        <nav className="container mx-auto flex justify-center items-center">
          <ul className="flex space-x-4">
            <li>
              <NavLink to="/" className="hover:underline">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="hover:underline">
                Projects
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/calculator" className="hover:underline">
                Calculator
              </NavLink>
            </li> */}
            <li>
              {/* <NavLink to="/skills" className="hover:underline">
                Resume
              </NavLink> */}
                <a
                href="https://bulacooola.github.io/portfolio/images/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
            <li>
              <NavLink to="/contact" className="hover:underline">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
