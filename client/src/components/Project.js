import React, { Component } from 'react';
import styled from "styled-components";

const projectContainer = styled.div`
    border: 2px solid black;
`;

const projectButtonContainer = styled.div`
    margin: 20px;
    pading: 20px;
    border: 2px solid black;
`;
const projectButton = styled.button`
    margin: 20px;
    pading: 20px;
    border: 2px solid black;
`;


class Project extends Component {

    constructor() {
        super();

        this.state = {
            changeNameActive: false,
            changeListActive: false,
            adminView: false
        }
    }

    _toggleChangeName = () => {
        const changeNameActive = !this.state.changeNameActive;
        this.setState({changeNameActive});
    }
    _toggleChangeList = () => {
        const changeListActive = !this.state.changeListActive;
        this.setState({changeListActive});
    }

    render() {
        
        const projectName = this.props.projectName;
        const pieceLengths = this.props.pieceLengths;
        // pieceLengths = '"'.join(pieceLengths);
        console.log('pieceLengths is: ' + pieceLengths);
        return(
            <div className="ProjectContainer">
                <h2>Project Name: {projectName}</h2>
                <div>
                    {
                        this.state.changeNameActive ? 
                            <input 
                                type='text' 
                                placeholder={projectName}/>
                            :
                            null
                    }
                </div>
                <div>
                    {
                        this.props.adminView ? 
                            <div>
                                <button onClick={this._toggleChangeName}>{this.state.changeNameActive
                                    ? 'Done Editing'
                                    : 'Edit Project Name'}
                                </button>
                            </div>
                            :
                            null
                    }
                </div>
                <h3>Piece Lengths: {pieceLengths} </h3> 
                <div>
                    {
                        this.state.changeListActive ? 
                            <input 
                                type='text' 
                                value={pieceLengths}/>
                            :
                            null
                    }
                </div>
                <div>
                    {
                        this.props.adminView ? 
                            <div>
                                <button onClick={this._toggleChangeList}>
                                    {this.state.changeListActive
                                    ? 'Done Editing'
                                    : 'Edit Piece Lengths List'}
                                </button> 
                                <br />
                                <button>Delete Project</button>
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

{/* onClick={this.props.deleteProject(this.props.id, this.props._id)} */}