import React from "react";
import { NavLink } from "react-router-dom"; // Import Link from react-router-dom
import HomePage from "./Home";

function Header() {
  return (
    <div>
      <h1 className="text-4xl text-serika_main p-4">Branden Bulatao</h1>
      <header className="bg-serika_bg text-serika_caret p-4">
        <nav className="container mx-auto flex justify-center items-center">
          <ul className="flex space-x-4">
            <li>
              <NavLink to="/portfolio" className="hover:underline">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio/projects" className="hover:underline">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio/calculator" className="hover:underline">
                Calculator
              </NavLink>
            </li>
            <li>
              <NavLink to="#skills" className="hover:underline">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="#contact" className="hover:underline">
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
