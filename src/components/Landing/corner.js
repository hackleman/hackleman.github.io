import React, { Component } from 'react';
import githublogo from '../../assets/github.svg';
import linkedinlogo from '../../assets/linkedin.svg';
import './corner.scss';

class Corner extends Component {
    render() {
        return (
            <div className = "corner-container">
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

            </div>
        )
    }
}

export default Corner;