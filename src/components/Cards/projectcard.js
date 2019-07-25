import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'
import config from '../config.js';


class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: config[props.options],
            image: ''
        }
      }
      componentDidMount() {
     
      }

      render() {
          return (
            <a href = "http://icky-class.surge.sh">
            <Card fluid>
                <Image 
                    src={this.props.image} 
                    wrapped ui={false}
                     />
                <Card.Content>
                    <Card.Header>
                        {this.state.options.title}
                    </Card.Header>
                    <Card.Meta>
                        <span className='date'>{this.state.options.tech}</span>
                    </Card.Meta>
                </Card.Content>
            </Card>
            </a>
           
          )
      }
}

export default ProjectCard;