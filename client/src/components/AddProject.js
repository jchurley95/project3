import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom'

class AddProject extends Component {

  constructor () {
    super();

    this.state = {
        newProject: {
            name: '',
            description: '',
            imageURL: '',
            projectCost: 0,
            pieceLengths: [],
            cutPlan: [],
            totalStockBoardNeededThisProject: 0,
        },
        redirect: false
    }
  }

  _handleNewProjectChange = (e) => {
    const newState = {...this.state.newProject};
    newState[e.target.name] = e.target.value;
    this.setState({
        newProject: newState
    });
  }
  _addNewProjectToProjects = (e) => {
    e.preventDefault();
    axios.post('/api/projects', this.state.newProject)
        .then(res => {
            console.log('successfully created project');
            this.setState({redirect: true})
        })
        .catch(err => {
            console.log(err);
        })
    };

    render() {
        return (
            <div className="New-Container">
                {this.state.redirect? 
                    <Redirect to={`/`}/>
                    :
                    <form onSubmit={this._addNewProjectToProjects}>
                            <br />
                            <div>
                                <label htmlFor="name">Project Name</label>
                                <br />
                                <input onChange={this._handleNewProjectChange} name="name" type="text"  value={this.state.newProject.name}/>
                                </div>
                            <br/>
                            <div>
                                <label htmlFor="imageURL">Project Image URL</label>
                                <br />
                                <input onChange={this._handleNewProjectChange} name="imageURL" type="text" value={this.state.newProject.imageURL} />
                            </div>
                            <br/>
                            <div>
                                <label htmlFor="description">Project Description</label>
                                <br />
                                <input onChange={this._handleNewProjectChange} name="description" type="textarea" value={this.state.newProject.description}/>
                            </div>
                            <br/>
                            <div>
                                <label htmlFor="pieceLengths">Project Piece Lengths List</label>
                                <br />
                                <input onChange={this._handleNewProjectChange} name="pieceLengths" type="text" value={this.state.newProject.pieceLengths}/>
                            </div>
                            <br/>
                            <div>
                                <input className="submit" type="submit" value="Create New Project" onSubmit={this._addNewProjectToProjects}/>
                            </div>
                    </form>
                }
            </div>
        );

    }
}

export default AddProject;