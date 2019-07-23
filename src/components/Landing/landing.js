import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'
import './landing.scss';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollingLock: false
    };

    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {

    if (window.scrollY > window.innerHeight * .85) {
      console.log("should lock");
      this.setState({
        scrollingLock: true
      });
    } else if (window.scrollY < window.innerHeight * .85) {
      console.log("not locked" );
      this.setState({
        scrollingLock: false
      });
    }
  }

  render() {
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
          <div className = {this.state.scrollingLock ? "scrolllock" : "button-container"}>

              <div className = "resume-button">
                <div id = "landing-button-1" >
                <Icon loading name='asterisk' />Resumé.</div>
                
              </div>
              <div className = "contact-button">
                <div id = "landing-button-1" >
                <Icon loading name='certificate' />Contact.</div>
              </div>
              <div className = "projects-button">
                <div id = "landing-button-1" >
                  <Icon loading name='spinner' />Projects.</div>
              </div>
          </div>
      </div>
    );
}
}
export default Landing;
