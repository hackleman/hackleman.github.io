import React, { Component } from 'react';
import ParticleContainer from './particles';
import './about.scss';

class About extends Component {
  render() {
    return (
      <div className = "about">
        <ParticleContainer />
        <div className = "about-container">
            <div className = "header-container">
              <div className = "header">About.</div>
            </div>
            <div className = "body-container">
              <div className = "body">
                <p>Hello, my name is Jason.</p>
                <p>I'm a full stack developer with a passion for Machine Learning and Data Visualization</p>
                <p>Scroll down to see some of my work.</p>
              </div>
            </div>
        </div>
      </div>

    );
  }

}

export default About;