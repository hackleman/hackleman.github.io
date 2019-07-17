import React from 'react';
import NavBar from './components/NavBar/navbar.js';
import LandingSection from './components/Landing/landing.js';
import ProjectSection from './components/Projects/projects.js';
import ContactSection from './components/Contacts/contacts.js';
import SkillSection from './components/Skills/skills.js';

import './App.scss';

function App() {
  return (
    <div>
        <NavBar />
        <LandingSection />
        <ProjectSection />
        <SkillSection />
        <ContactSection />

    </div>
  );
}

export default App;
