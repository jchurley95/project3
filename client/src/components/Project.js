import React, { Component } from 'react';

class Project extends Component {

    render() {
        const projectName = this.props.projectName;
        const pieceLengths = this.props.pieceLengths;
        // pieceLengths = '"'.join(pieceLengths);
        console.log('pieceLengths is: ' + pieceLengths);
        return(
            <div>
                <h2>Project Name: {projectName}</h2>
                <h3>Piece Lengths: {pieceLengths} </h3> 
                <div>
                    {
                        this.props.adminView ? 
                            <div>
                                <button onClick={this.props.deleteProject(this.props.id, this.props._id)}>Delete Project</button>
                            </div>
                            :
                            null
                    }
                </div>
            </div>
        );
    }
}

export default Project;