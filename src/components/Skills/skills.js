import React, { Component } from 'react';
import Skill from './Skill.js';
import './skills.scss';

class Skills extends Component {

  render() {
    return (
      <div className = "skills">
          <div className = "header-container">
              Skills.
          </div>
          <Skill />

      </div>
    );
  }

}

export default Skills;
