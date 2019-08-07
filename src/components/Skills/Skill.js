import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import config from '../config.js';
import './skills.scss';

class Skill extends Component {

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
            <div>
                {sections.map(section => (
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

                ))}
            </div>
            );
        }

}

export default Skill;

