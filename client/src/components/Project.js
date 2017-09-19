import React, { Component } from 'react';
import styled from "styled-components";
import axios from 'axios';

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
            project: {}
        }
    }

    componentWillMount() {
        this._getProject();
    }
    _getProject = () => {
        const id = this.props.match.params.projectId;
        console.log(id)
        axios.get('/api/projects')
          .then((res) => {
            const projects = res.data;
            projects.map(project => {
                if (project._id === id) {
                    console.log(project);
                    this.setState({project});
                }
            })
          })
    }

    _toggleChangeName = () => {
        const changeNameActive = !this.state.changeNameActive;
        this.setState({changeNameActive});
    };
    _toggleChangeList = () => {
        const changeListActive = !this.state.changeListActive;
        this.setState({changeListActive});
    };

    _handleProjectNameChange = (event) => {
        const name = event.target.value;
            console.log('name is: ', name);
        this.setState({name});
    };
    _handleProjectListChange = (event) => {
        const pieceLengths = event.target.value;
            console.log('pieceLengths is: ', pieceLengths);
        this.setState({pieceLengths});
    };   

    // _determineCutPlan = () => {
    //     const sum = 0;
    //     for(var i = 0; i < this.props.pieceLengths.length; i++){
    //         sum += this.props.pieceLengths[i];
    //     }

    //     const goalTotalNeeded = need to determine stock material length
    // } 

    render() {
        
        const projectName = this.state.project.projectName;
        const pieceLengths = this.state.project.pieceLengths;
        // pieceLengths = '"'.join(pieceLengths);
        console.log('pieceLengths is: ' + pieceLengths);
        console.log('This project name is: ' + projectName);
        
        return(
            <div className="ProjectContainer">
                <h2>Project Name: {projectName}</h2>
                <hr />
                <div>
                    {
                        this.state.changeNameActive ? 
                            <input 
                                type='text' 
                                placeholder='Project Name'
                                onChange={this._handleProjectNameChange}
                                value={projectName}/>
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
                                placeholder='piece lengths list'
                                value={pieceLengths}
                                onChange={this._handleProjectListChange}/>
                            :
                            null
                    }
                </div>
                <div>
                    <button onClick={this._toggleChangeList}>
                        {this.state.changeListActive
                        ? 'Done Editing'
                        : 'Edit Piece Lengths List'}
                    </button> 
                    <br />
                    <hr />
                    <button onClick={this.props.deleteProject}>Delete Project</button>
                </div>
            </div>
        );
    }
}

export default Project;

{/* onClick={this.props.deleteProject(this.props.id, this.props._id)} */}