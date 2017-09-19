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
            changeDescriptionActive: false,
            project: {
                name: '',
                description: '',
                imageURL: '',
                projectCost: 0,
                pieceLengths: [],
                cutPlan: [],
                totalStockBoardNeededThisProject: 0
            }
        }
    }

    componentWillMount() {
        this._getProject();
    }
    _getProject = () => {
        const id = this.props.match.params.projectId;
        console.log(id)
        axios.get(`/api/projects/${id}`)
          .then((res) => {
            const project = res.data;
            this.setState({project});
          })
    }
    

    _toggleChangeName = () => {
        const changeNameActive = !this.state.changeNameActive;
        this.setState({changeNameActive});
    };
    _toggleChangeDescription = () => {
        const changeDescriptionActive = !this.state.changeDescriptionActive;
        this.setState({changeDescriptionActive});
    };
    _handleProjectNameChange = (e) => {
        e.preventDefault();
        const name = e.target.value;
            console.log('name is: ', name);
        this.setState({project: {
            name: name
        }});
    };
    _handleProjectDescriptionChange = (e) => {
        e.preventDefault();
        const description = e.target.value;
            console.log('description is: ', description);
            this.setState({project: {
                description: description
            }});
    };   

    _deleteProject = (index, projectId) => {
        console.log("index in _deleteProject is: ", index)
        console.log("projectId in _deleteProject is: ", projectId);
        const userId = this.props.match.params.userId;
        // const projectId = this.props.match.params.projectId;
        const projects = [...this.state.projects];
            console.log("projects in _deleteProject is: ", projects);
        projects.splice(index, 1);
        this.setState({projects});
            console.log("User ID in _deleteProject is : " + userId);
        axios.delete(`/api/user/${userId}/project/${projectId}`).then(res => {
            console.log("Project ID _deleteProject is: ", projectId);
        });
    }
    // _determineCutPlan = () => {
    //     const sum = 0;
    //     for(var i = 0; i < this.props.pieceLengths.length; i++){
    //         sum += this.props.pieceLengths[i];
    //     }

    //     const goalTotalNeeded = need to determine stock material length
    // } 

    render() {
        
        const projectName = this.state.project.name;
        const description = this.state.project.description;
        // pieceLengths = '"'.join(pieceLengths);
        console.log('pieceLengths is: ' + description);
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
                                value={this.state.project.projectName}/>
                            :
                            null
                    }
                </div>
                <div>
                            <div>
                                <button onClick={this._toggleChangeName}>
                                    {this.state.changeNameActive
                                    ? 'Done Editing'
                                    : 'Edit Project Name'}
                                </button>
                            </div>
                </div>
                <h3>Description: {description} </h3> 
                <div>
                    {
                        this.state.changeDescriptionActive ? 
                            <input 
                                type='textarea' 
                                placeholder='description'
                                value={this.state.project.description}
                                onChange={this._handleProjectDescriptionChange} />
                            :
                            null
                    }
                </div>
                <div>
                    <button onClick={this._toggleChangeDescription}>
                        {this.state.changeDescriptionActive
                        ? 'Done Editing'
                        : 'Edit Description'}
                    </button> 
                    <br />
                    <hr />
                    <button onClick={this._deleteProject}>Delete Project</button>
                </div>
            </div>
        );
    }
}

export default Project;

{/* onClick={this.props.deleteProject(this.props.id, this.props._id)} */}