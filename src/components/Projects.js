import React, { Component } from 'react';
import ProjectCard from './ProjectCard.js';
import project1img from '../assets/taxiinsights-01.svg';
import project2img from '../assets/ultimate.svg';
import project3img from '../assets/python.svg';
import './components.scss';

class Projects extends Component {
  render() {
    return (
      <div className = "projects">
          <div className = "header-container">
              <div className = "header">Projects.</div>
          </div>
              <div className = "card1">
                <ProjectCard 
                  options = 'project1'
                  image = {project1img}
                  />
              </div>
              <hr/>
              <div className = "card2">
                <ProjectCard
                  options = 'project2'
                  image = {project2img}
                   />
              </div>
              <hr/>
              <div className = "card3">
                <ProjectCard
                  options = 'project3'
                  image = {project3img}
                   />
              </div>
      </div>
    );
  }

}

export default Projects;
