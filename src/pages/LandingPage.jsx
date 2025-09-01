import { useEffect, useState } from "react";
import ProjectSection from "../components/ProjectSection";
import HomeSection from "../components/HomeSection";
import Header from "../components/Header";
import stevensbg from "../assets/images/stevens-bg.jpg";
import ContactSection from "../components/ContactSection";

function LandingPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = stevensbg;
    img.onload = () => setLoaded(true);
  }, []);

  if (!loaded) return <div className="min-h-screen bg-serika-bg"></div>;

  return (
    <div className="relative min-h-screen w-full">
      {/* <Header /> */}
      <div className="absolute inset-0">
        <img
          src={stevensbg}
          alt="Stevens Institute of Technology Background Photo"
          className="min-h-screen object-cover filter blur-sm opacity-40"
        />
        {/* Optional semi-transparent overlay for readability */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-serika-bg/90 to-transparent/100"></div> */}
      </div>

      {/* Home layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-serika-bg/100 from-70% via-serika-bg/75 via-75% to-transparent/100"></div>
      <section id="home" className="relative z-10 flex flex-col items-center justify-center h-full">
        <HomeSection />
      </section>

      {/* Projects Layer */}
      <section
        id="projects"
        className="relative z-10 flex flex-col items-center justify-center h-full"
      >
        <ProjectSection />
      </section>

      {/* Contacts Layer */}
      <section
        id="contact"
        className="relative z-10 flex flex-col items-center justify-center h-full"
      >
        <ContactSection />
      </section>
    </div>
  );
}

export default LandingPage;
1;
