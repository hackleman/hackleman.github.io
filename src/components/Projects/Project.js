import React, { Component } from 'react';
import ProjectCard from '../Cards/projectcard.js';
import project1img from '../../assets/taxiinsights-01.svg';
import project2img from '../../assets/ultimate.svg';
import project3img from '../../assets/python.svg';
import linebreak from '../../assets/break-01.svg';
import Fade from 'react-reveal/Fade';
import { Slide } from 'react-reveal';
import './projects.scss';
import config from '../config.js';

class Project extends Component {
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
        <div className = "cards">
            {imgs.map(img => (
                <Slide bottom cascade>
                  <div className = "card-container-sidebar">
                    <div className = "card-container">
                          <div className = "card-image">
                              <img src = {img[2]} />
                          </div>
                          <div className = "card-description">
                              {config[img[1]].description}
                          </div>
                      </div>
                  </div>

                </Slide>

            ))}
        </div>
    )
  }

}

export default Project;
