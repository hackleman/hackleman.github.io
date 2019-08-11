import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import config from '../config.js';
import { Fade } from 'react-reveal';
import './skills.scss';

class Skills extends Component {

  render() {
    const language = config.skills.languages;
    const frameworks = config.skills.frameworks;
    const tech = config.skills.tech;

    const sections = [
        [language, 'language', 'Languages: '],
        [frameworks, 'framework', 'Frameworks: '],
        [tech, 'technology', "Technologies: "]
    ];

    return (
      <div className = "skills">
          <div className = "header-container">
              Skills.
          </div>
          {sections.map(section => (
            <Fade>
              <div className="skill-container-sidebar">
                  <div className = "skill-container">
                      <div className = "skill-label">
                          {section[2]}
                      </div>
                      <div className = "skill-list">
                          <div>
                              <div className = "buttons">
                                  {section[0].map(skill => (
                                      <Button id = "landing-button" fluid>{skill[1]}</Button>
                                  ))}
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
            </Fade>
          ))}
      </div>
    );
  }

}

export default Skills;
