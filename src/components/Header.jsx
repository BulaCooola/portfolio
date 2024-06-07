import React from "react";

function Header() {
  return (
    <div>
      <h1 className="text-4xl text-serika_text p-4">Branden Bulatao</h1>
      <header className="bg-serika_bg text-serika-text p-4">
        <nav className="container mx-auto flex justify-center items-center">
          <ul className="flex space-x-4">
            <li>
              <a href="" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:underline">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
