import React from 'react';
import LandingSection from './components/Landing/landing.js';
import ProjectSection from './components/Projects/projects.js';
import ContactSection from './components/Contacts/contacts.js';
import SkillSection from './components/Skills/skills.js';

import './App.scss';

function App() {
  return (
    <div>
        <LandingSection 
        />
        <ProjectSection 
          id = "projects"
        />
        <SkillSection 
          id = "skills"
        />
        <ContactSection 
          id = "contacts"
        />

    </div>
  );
}

export default App;
