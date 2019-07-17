import React from 'react';
import './components.scss';

function Landing() {
  return (
    <div className = "landing">
        <div className = "header-container">
            <div className = "header">Hello.</div>
        </div>
        <div className = "body-container">
            <div className = "body">My name is Jason.  I'm a full-stack developer with a passion
            for Machine Learning and Data Visualization.  Scroll down to see some of my work.
            </div>
        </div>
    </div>
  );
}

export default Landing;
