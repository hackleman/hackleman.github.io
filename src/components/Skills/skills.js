import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import './skills.scss';

class Skills extends Component {
  render() {
    return (
      <div className = "skills">
          <div className = "header-container">
              <div className = "header">Skills.</div>
          </div>
          <div className = "subheader-container1">
              <div className = "header">Languages:</div>
          </div>
          <div className = "subheader-container2">
              <div className = "header">Frameworks:</div>
          </div>
          <div className = "subheader-container3">
              <div className = "header">Technologies:</div>
          </div>
          {/* Languages */}
          <div className = "button-badge-1">
            <Button id = "landing-button" fluid>Javascript</Button>
          </div>
          <div className = "button-badge-2">
            <Button id = "landing-button" fluid>Python</Button>
          </div>
          <div className = "button-badge-3">
            <Button id = "landing-button" fluid>SQL</Button>
          </div>
          <div className = "button-badge-7">
            <Button id = "landing-button" fluid>C/C#</Button>
          </div>
          {/* Frameworks */}
          <div className = "button-badge-4">
            <Button id = "landing-button" fluid>Angular</Button>
          </div>
          <div className = "button-badge-5">
            <Button id = "ilanding-button" fluid>React.js</Button>
          </div>
          {/* Technologies */}
          <div className = "button-badge-6">
            <Button id = "landing-button" fluid>Oracle</Button>
          </div>
          <div className = "button-badge-8">
            <Button id = "landing-button" fluid>MongoDB</Button>
          </div>
          <div className = "button-badge-9">
            <Button id = "landing-button" fluid>Node.js</Button>
          </div>
          <div className = "button-badge-10">
            <Button id = "landing-button" fluid>Express</Button>
          </div>
          <div className = "button-badge-11">
            <Button id = "landing-button" fluid>PostgreSQL</Button>
          </div>
      </div>
    );
  }

}

export default Skills;
