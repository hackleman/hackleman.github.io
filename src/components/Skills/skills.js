import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import { Slide } from 'react-reveal';
import config from '../config.js';
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
              <div className = "header">Skills.</div>
          </div>
            {sections.map((section, i) => (
              <div className = {section[1] + "-container"} key = {i}>
                <Slide bottom cascade>
                  <div className = "subheader-container">
                      <div className = "header">{section[2]}</div>
                  </div>
                  <div className = {section[1] + "-buttons"}>
                    {section[0].map((num, i) => (
                      <div className = {"button-badge-" + num[0]} key = {i}>
                        <Button id = "landing-button" fluid>{num[1]}</Button>
                      </div>
                    ))}
                  </div>
                </Slide>
              </div>
              )
            )}
      </div>
    );
  }

}

export default Skills;
