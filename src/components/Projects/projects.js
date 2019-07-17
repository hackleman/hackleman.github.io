import React, { Component } from 'react';
import ProjectCard from '../Cards/projectcard.js';
import project1img from '../../assets/taxiinsights-01.svg';
import project2img from '../../assets/ultimate.svg';
import project3img from '../../assets/python.svg';
import linebreak from '../../assets/break-01.svg';
import './projects.scss';

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
             <img 
                src = {linebreak}
                className = "line-break" 
              />
              <div className = "card2">
                <ProjectCard
                  id = "card2-semantic"
                  options = 'project2'
                  image = {project2img}
                   />
              </div>
              <img 
                src = {linebreak}
                className = "line-break2" 
              />
              
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
