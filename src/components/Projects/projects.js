import React, { Component } from 'react';
import ProjectCard from '../Cards/projectcard.js';
import project1img from '../../assets/taxiinsights-01.jpg';
import project2img from '../../assets/ultimate.svg';
import project3img from '../../assets/python.svg';
import linebreak from '../../assets/break-01.svg';
import Fade from 'react-reveal/Fade';
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
              <div className = "header">Projects.</div>
          </div>
              <div className = "card-container">
                {imgs.map((img, i) => (
                  <Fade key = {i}>
                    <div className = {img[0]}>
                      <ProjectCard 
                        id = {img[0]}
                        options = {img[1]}
                        image = {img[2]}
                        />
                    </div>
                    <img 
                      src = {linebreak}
                      alt = ''
                      className = "line-break" 
                    />
                  </Fade>
                  ))}
            </div>
      </div>
    );
  }

}

export default Projects;
