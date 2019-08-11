import React, { Component } from 'react';
import project1img from '../../assets/taxiinsights-01.svg';
import project2img from '../../assets/ultimate.svg';
import project3img from '../../assets/python.svg';
import { Fade } from 'react-reveal';
import './projects.scss';
import config from '../config.js';

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
          <div className = "cards">
            {imgs.map(img => (
                <Fade>
                  <div className = "card-container-sidebar">
                    <div className = "card-container">
                          <div className = "card-image">
                              <img alt = '' src = {img[2]} />
                          </div>
                          <div className = "card-description">
                              {config[img[1]].description}
                          </div>
                      </div>
                  </div>
                </Fade>
              ))}
          </div>

      </div>
    );
  }

}

export default Projects;
