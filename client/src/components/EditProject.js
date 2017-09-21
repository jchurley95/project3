import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom'

class AddProject extends Component {

  constructor () {
    super();

    this.state = {
        project: {
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

    _handleProjectChange = (e) => {
        const newState = {...this.state.project};
        newState[e.target.title] = e.target.value;
        this.setState({
            project: newState
        });
    }
    _updateProject = (e) => {
        e.preventDefault();
        const id = this.props.match.params.projectId
        console.log(id);
        axios.put(`/api/projects/${id}`, this.state.project)
            .then(res => {
                // console.log(res.data);
                console.log('successfully updated project');
                this.setState({redirect: true})
            })
    };

    render() {
        return (
            <div className="New-Container">
                {this.state.redirect ? 
                    <Redirect to={`/`}/>
                    :
                    <form onSubmit={this._updateProject}>
                            <br />
                            <div>
                                <label htmlFor="name">Project Name</label>
                                <br />
                                <input onChange={this._handleProjectChange} title="name" type="text"  value={this.state.project.name}/>
                                </div>
                            <br/>
                            <div>
                                <label htmlFor="imageURL">Project Image URL</label>
                                <br />
                                <input onChange={this._handleProjectChange} title="imageURL" type="text" value={this.state.project.imageURL} />
                            </div>
                            <br/>
                            <div>
                                <label htmlFor="description">Project Description</label>
                                <br />
                                <input onChange={this._handleProjectChange} title="description" type="textarea" value={this.state.project.description}/>
                            </div>
                            <br/>
                            <div>
                                <label htmlFor="pieceLengths">Project Piece Lengths List</label>
                                <br />
                                <input onChange={this._handleProjectChange} title="pieceLengths" type="text" value={this.state.project.pieceLengths}/>
                            </div>
                            <br/>
                            <button>Update Project</button>
                    </form>
                }
            </div>
        );

    }
}

export default AddProject;