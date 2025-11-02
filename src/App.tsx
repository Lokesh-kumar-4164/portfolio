import React, { useState } from "react";
import ContactPopup from "./components/ContactPopup";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OrbitalTimeline from "./components/OrbitalTimeline";
import ProjectGrid from "./components/ProjectGrid";
import Footer from "./components/Footer";
import CursorTrail from "./components/CursorTrail";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Education from "./components/Education";

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <div className="min-h-screen">
      {/* Floating Contact Button */}
      

      

      <Navbar setContactOpen={setContactOpen} />
      <main>
        <ContactPopup open={contactOpen} onClose={() => setContactOpen(false)} />
        
        <Hero setContactOpen={setContactOpen} />
        <Skills />
        {/* <OrbitalTimeline /> */}
        <ProjectGrid />
        <Education />
        <Achievements />
        <Certifications />
        <WorkExperience />
      </main>
      <Footer />
      <CursorTrail />
    </div>
  );
}
