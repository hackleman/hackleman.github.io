import React, { Component } from 'react';
import Particles from 'react-particles-js';

class ParticlesContainer extends Component {
    render() {
        return (
        <Particles
            style = {{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "160vh",
            zindex: 10000000
            }}
            params={{
            particles: {
                number: {
                value: 50,
                density: {
                    enable: true,
                    value_area: 1803.4120608655228
                }
                },
                color: {
                value: "#f4f4f4"
                },
                shape: {
                type: "circle",
                stroke: {
                    width: 2,
                    color: "#1f2021"
                },
                polygon: {
                    nb_sides: 4
                }
                },
                opacity: {
                value: 1,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
                },
                size: {
                value: 3
                },
            },
            interactivity: {
                detect_on: "window",
                events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
                onclick: {
                    enable: false,
                    mode: "bubble"
                },
                resize: true
                },
                modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                    opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
                }
            },
            retina_detect: true
            }}
        />
        )
    }
}

export default ParticlesContainer;