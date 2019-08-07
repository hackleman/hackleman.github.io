import React, { Component } from 'react';
import ProjectCard from '../Cards/projectcard.js';
import project1img from '../../assets/taxiinsights-01.png';
import project2img from '../../assets/ultimate.svg';
import project3img from '../../assets/python.svg';
import linebreak from '../../assets/break-01.svg';
import Fade from 'react-reveal/Fade';
import Project from './Project';
import './projects.scss';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showList: true
    }
  }
  
  render() {
    const imgs = [
      ["card1", "project1", project1img],
      ["card2", "project2", project2img],
      ["card3", "project3", project3img],
    ];

    return (
      <div className = "projects">
          <div className = "header-container">
              Projects.
          </div>
        <Project />
      </div>
    );
  }

}

export default Projects;
