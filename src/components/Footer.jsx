import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-serika_bg text-serika_main p-4">
      <div className="socials text-lg text-center">
        <h3 className="mb-2">Connect with me:</h3>
        <div className="flex justify-center space-x-4">
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
      </div>
    </footer>
  );
}

export default Footer;
