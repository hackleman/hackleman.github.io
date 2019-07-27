import React from 'react';
import Landing from './components/Landing/landing.js';
import ParticleContainer from './components/Landing/particles.js';
import Corner from './components/Landing/corner.js';
import About from './components/About/about.js';
import Projects from './components/Projects/projects.js';
import Contacts from './components/Contacts/contacts.js';
import Skills from './components/Skills/skills.js';

import './App.scss';

function App() {
  return (
    <div>
        <ParticleContainer />
        <Corner />
        <Landing
        />
        <About 
          id = "skills"
        />
        <Projects
          id = "projects"
        />
        <Skills
        />
        <Contacts
          id = "contacts"
        />

    </div>
  );
}

export default App;
