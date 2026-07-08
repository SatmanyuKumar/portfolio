import { useEffect, useState } from 'react';
import { getProfile, getProjects } from './api.js';
import { fallbackProfile, fallbackProjects } from './data.js';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Certifications from './components/Certifications.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [profile, setProfile] = useState(fallbackProfile);
  const [projects, setProjects] = useState(fallbackProjects);

  useEffect(() => {
    getProfile().then(setProfile);
    getProjects().then(setProjects);
  }, []);

  return (
    <>
      <Navbar />
      <Hero profile={profile} />
      <main>
        <About />
        <Skills skills={profile.skills} />
        <Projects projects={projects} />
        <Certifications certifications={profile.certifications} />
        <Education education={profile.education} />
        <Contact email={profile.email} />
      </main>
      <Footer />
    </>
  );
}
