import React, { Component } from 'react';
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import toplogo from './top.svg';
import './landing.scss';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollingLock: false
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.myRef = React.createRef();
  }

  scroll(ref) {
    ref.current.scrollIntoView({behavior: 'smooth'})
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
          <div className = {this.state.scrollingLock ? "button-container scrolllock" : "button-container"}>
            <div className = "logo-container">
              <img
                  src={toplogo}
                  
                  className="top-logo"
                  alt="Logo."
                  onClick={this.scrollToTop}
                />
            </div>
            <div className = "resume-button">
              <div id = "landing-button" >
                <div className = "button-content">
                  Resumé.
                </div>

              </div>
            </div>
            <LinkScroll
              activeClass="active"
              to="contacts"
              spy={true}
              smooth={true}
              duration={1000}
              >
                <div className = "contact-button">
                  <div id = "landing-button" >
                    <div className = "button-content">
                      Contact.
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
          </div>
      </div>
    );
}
}
export default Landing;
