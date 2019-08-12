import React, { Component } from 'react';
import linebreak from '../../assets/break-02.svg';
import githublogo from '../../assets/github.svg';
import linkedinlogo from '../../assets/linkedin.svg';
import emaillogo from '../../assets/email.svg';
import './contacts.scss';

class Contacts extends Component {
  render() {
    return (
      <div className = "contacts">
          <div className = "header-container">
              Contact.
          </div>
          <div className = "body-container">
            <div className = "name-container">
              <div className = "fakebox-header-container">
                <div className = "fakebox-header">
                  Name:
                </div>
              </div>
              <div className = "fakebox-container">
                <div className = "fakebox">
                  <input className = "fakebox-input"></input>
                </div>
              </div>
            </div>
            <div className = "message-container">
              <div className = "fakebox-header-container">
                <div className = "fakebox-header">
                  Message:
                </div>
              </div>
              <div className = "fakebox-container">
                <div className = "fakebox">
                  <textarea rows = "50" className = "fakebox-text"></textarea>
                </div>
              </div>
            </div>
            <div className = "resume-button-container">
              <div className = "resume-button">
                <div id = "landing-button" >
                  <div className = "button-content">
                    Submit.
                  </div>
                </div>
              </div>
            </div>
            <div className = "line-break-container">
              <img 
                src = {linebreak}
                alt = ''
                className = "line-break" 
              />
            </div>
            <div className = "logo-container">
              <a href='https://github.com/hackleman' className = "link-container" >
                <img 
                    src = {githublogo}
                    alt = ''
                    className = "githublogo"
                />
              </a>
              <a href='https://www.linkedin.com/in/jason-hackleman-01a2b7175/' className = "link-container" >
                <img 
                    src = {linkedinlogo}
                    alt = ''
                    className = "linkedinlogo" 
                />
              </a>
              <a href='https://linkedin.com' className = "link-container" >
                <img 
                    src = {emaillogo}
                    alt = ''
                    className = "emaillogo" 
                />
              </a>
            </div>
          </div>
          <div className = "grid-padding">

          </div>
      </div>
    );
  }

}

export default Contacts;
