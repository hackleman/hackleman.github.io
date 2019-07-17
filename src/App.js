import React from 'react';
import NavBar from './components/NavBar.js';
import LandingSection from './components/Landing.js';
import ProjectSection from './components/Projects.js';

import './App.scss';

function App() {
  return (
    <div>
        <NavBar />
        <LandingSection />
        <ProjectSection />
        
    </div>
  );
}

export default App;
