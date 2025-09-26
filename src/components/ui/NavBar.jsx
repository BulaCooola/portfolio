import React from "react";
import { NavLink } from "react-router-dom";
import { PanelsTopLeft, Mail, Home, FileUser } from "lucide-react";

const screens = [
  { id: "projects", label: "Projects", icon: PanelsTopLeft },
  { id: "resume", label: "Resume", icon: FileUser },
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
        <div className="relative group">
          <button
            onClick={() => scrollToSection("home")}
            className="rounded-full w-10 h-10 p-0 hover:opacity-50"
            title="Home"
          >
            <Home size={16} />
          </button>
          <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-serika_bg text-serika_text text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            Home
          </span>
        </div>

        {/* Screen navigation buttons */}
        {screens.map((screen) => (
          <div key={screen.id} className="relative group">
            <button
              onClick={() => scrollToSection(screen.id)}
              className="rounded-full w-10 h-10 p-0 hover:opacity-50"
              id={screen.id}
              title={screen.label}
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

              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-serika_bg text-serika_text text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                {screen.label}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
