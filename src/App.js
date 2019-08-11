import React from 'react';
import Landing from './components/Landing/Landing.js';
import ParticleContainer from './components/Landing/Particles.js';
import Corner from './components/Landing/Corner.js';
import About from './components/About/About.js';
import Projects from './components/Projects/Projects.js';
import Contacts from './components/Contacts/Contacts.js';
import Skills from './components/Skills/Skills.js';

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
