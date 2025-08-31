import { useState } from "react";
import { NavLink } from "react-router-dom"; // Import Link from react-router-dom
import { AnimatePresence } from "framer-motion";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Calculator from "./pages/Calculator";
import { motion } from "framer-motion";
import NavBar from "./components/NavBar";

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <div className="min-h-screen bg-serika-bg flex flex-col m-0 overflow-x-hidden">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/projects" element={<ProjectPage />} /> */}
          <Route path="/calculator/" element={<Calculator />} />
        </Routes>
      </AnimatePresence>

      <motion.div
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <NavBar />
      </motion.div>

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
