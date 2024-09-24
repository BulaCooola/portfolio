import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Calculator from "./components/Calculator";

function App() {
  const [showProjectPage, setShowProjectPage] = useState(false); // State to control which page to show

  const toggleProjectPage = () => {
    setShowProjectPage((prev) => !prev); // Toggle the Project Page
  };

  return (
    <div className="bg-serika_bg">
      <Header />
      <Routes>
        <Route path="/portfolio/" element={<HomePage />} />
        <Route path="/portfolio/calculator" element={<Calculator />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// Profile Picture of ME
// Introduce myself
// Navigation Bar:
// Home Page
// Blog
// Links to Socials (github, Linkedin)
// Projects List
// Experience List
// Hobbies
