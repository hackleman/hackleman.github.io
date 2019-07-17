import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import config from './config.js';


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
                    <Card.Description>
                        {this.state.options.description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a href = 'https://sheltered-badlands-70867.herokuapp.com/'>
                        <Icon name='play' />
                        Live Demo
                    </a>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='github' />
                        Code
                    </a>
                </Card.Content>
            </Card>
          )
      }
}

export default ProjectCard;