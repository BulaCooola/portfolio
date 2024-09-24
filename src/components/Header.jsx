import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import HomePage from "./Home";
// import ProjectPage from "./Projects";

function Header() {
  // return (
  //   <Router>
  //     <div className="bg-serika_bg">
  //       <Header />
  //       <Routes>
  //         <Route path="/" element={<HomePage />} />
  //         <Route path="/projects" element={<ProjectPage />} />
  //       </Routes>
  //       <Footer />
  //     </div>
  //   </Router>
  // );
  return (
    <div>
      <h1 className="text-4xl text-serika_text p-4">Branden Bulatao</h1>
      <header className="bg-serika_bg text-serika-text p-4">
        <nav className="container mx-auto flex justify-center items-center">
          <ul className="flex space-x-4">
            <li>
              <Link to="/portfolio" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/portfolio/calculator" className="hover:underline">
                Calculator
              </Link>
            </li>
            <li>
              <Link to="#skills" className="hover:underline">
                Skills
              </Link>
            </li>
            <li>
              <Link to="#contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
