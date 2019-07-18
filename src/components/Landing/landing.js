import React from 'react';
import { Button } from 'semantic-ui-react'
import './landing.scss';

function Landing() {
  return (
    <div className = "landing">
        <div className = "header-container">
            <div className = "header">Hello.</div>
        </div>
        <div className = "body-container">
            <div className = "body">
              <p>My name is Jason. </p>
             <p>I'm a full-stack developer with a passion
            for Machine Learning and Data Visualization.</p> 
            <p>Scroll down to see some of my work.</p> 
            </div>
        </div>
        <div className = "button-container">

            <div className = "resume-button">
              <Button id = "landing-button-1" fluid inverted >Resume.</Button>
            </div>
            <div className = "contact-button">
              <Button id = "landing-button-1" fluid inverted >Contact.</Button>
            </div>
            <div className = "projects-button">
              <Button id = "landing-button-1" fluid inverted >Projects.</Button>
            </div>
        </div>


    </div>
  );
}

export default Landing;
