import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import ProjectPage from "./pages/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Calculator from "./components/Calculator";

function App() {
  const location = useLocation();

  return (
    <div className="bg-serika_bg">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/calculator/" element={<Calculator />} />
        </Routes>
      </AnimatePresence>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
// export default function RootApp() {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// }

// Profile Picture of ME
// Introduce myself
// Navigation Bar:
// Home Page
// Blog
// Links to Socials (github, Linkedin)
// Projects List
// Experience List
// Hobbies
