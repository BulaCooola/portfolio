import React from "react";
import { NavLink } from "react-router-dom";
import { Clock, Camera, Mail, Home } from "lucide-react";

const screens = [
  { id: "projects", label: "projects", icon: Clock },
  { id: "resume", label: "Resume", icon: Camera },
  { id: "contact", label: "Contact", icon: Mail },
];

function NavBar() {
  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-3 shadow-xl border border-white/20">
      <div className="flex items-center space-x-3">
        {/* Home button */}
        <button
          onClick={() => scrollToSection("home")}
          className="rounded-full w-10 h-10 p-0 hover:opacity-50"
        >
          <Home size={16} />
        </button>

        {/* Screen navigation buttons */}
        {screens.map((screen) => (
          <button
            onClick={() => scrollToSection(screen.id)}
            className="rounded-full w-10 h-10 p-0 hover:opacity-50"
            id={screen.id}
          >
            {screen.id == "resume" ? (
              <a
                href="https://bulacooola.github.io/portfolio/images/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <screen.icon size={16} />
              </a>
            ) : (
              <screen.icon size={16} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
