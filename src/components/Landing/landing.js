import React, { Component } from 'react';
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import linebreak from '../../assets/break-02.svg';
import toplogo from '../../assets/top.svg';
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
  
  scrollToTop = () => {
    scroll.scrollToTop();
  }
  scrollToBottom = () => {
    scroll.scrollToBottom();
  }

  handleScroll() {
    if (window.scrollY > window.innerHeight * .85) {
      this.setState({
        scrollingLock: true
      });
    } else if (window.scrollY < window.innerHeight * .85) {
      this.setState({
        scrollingLock: false
      });
    }
  }

  render() {
    return (
        <div className = "landing">
            <div className = "header">
              <div className = "header-container">
                <div className = "header1">Jason Hackleman</div>
                <img 
                  src = {linebreak}
                  alt = ''
                  className = "line-break" 
                />
                <div className = "header2">Full-Stack Developer</div>
              </div>
              <div className = "header-button">
              <a href = 'https://hackleman.s3.amazonaws.com/JasonHacklemanResume.pdf'>
              

                Resume.
              
              </a>
              </div>

            </div>
          <div className = {this.state.scrollingLock ? "button-container scrolllock" : "button-container"}>
            <div className = "logo-container">
              <img
                  src={toplogo}
                  className="top-logo"
                  alt="Logo."
                  onClick={this.scrollToTop}
                />
            </div>
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-300}
              duration={1000}
              >
              <div className = "resume-button">
                <div id = "landing-button" >
                  <div className = "button-content">
                    About.
                  </div>
                </div>
              </div>
            </LinkScroll>
            <LinkScroll
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
              <div className = "projects-button">
                  <div id = "landing-button" >
                    <div className = "button-content">
                      Projects.
                    </div>
                  </div>

              </div>
            </LinkScroll>
            <div className = "contact-button" onClick={this.scrollToBottom}>
              <div id = "landing-button" >
                <div className = "button-content">
                  Contact.
                </div>
              </div>
            </div>

          </div>
      </div>

    );
}
}
export default Landing;
