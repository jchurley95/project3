import React, { Component } from 'react';

class Project extends Component {
    render() {
        const projectName = this.props.projectName;
        const pieceLengths = this.props.pieceLengths;
        return(
            <div>
                <h2>Project Name: {projectName}</h2>
                
            </div>
        );
    }
}

export default Project;