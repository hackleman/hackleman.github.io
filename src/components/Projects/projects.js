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
      ["card1", "project1", project1img, 'http://icky-class.surge.sh/', 'https://github.com/hackleman/taxi-insights'],
      ["card2", "project2", project2img, 'https://still-eyrie-27550.herokuapp.com/', 'https://github.com/hackleman/US-Hackathon'],
      ["card3", "project3", project3img, 'http://complete-rifle.surge.sh/', 'https://github.com/hackleman/guitar-scrapers'],
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
                          <div className = "card-links">
                            <a href={img[3]}>
                              <div className = "demo-link">
                                Demo.
                              </div>
                            </a>
                            <a href={img[4]}>
                              <div className = "github-link">
                                Github.
                              </div>
                            </a>
                          </div>
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
