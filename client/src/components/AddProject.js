import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
  _addNewProjectToProjects = (newProject) => {
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
                <br />
                <form onSubmit={this.props.addNewProject}>
                    <fieldset>
                        <legend><h1>Build A New Project</h1></legend>
                        <br />
                        <div><label>Project Name</label></div>
                        <div><input name="Project Name" type="text" placeholder="Project Name" value={this.state.newProject.name} onChange={this._handleNewProductChange}/></div>
                        <br/>
                        <div><label>Project Image URL</label></div>
                        <div><input name="Image URL" type="text" placeholder="Image URL" value={this.state.newProject.imageURL} /></div>
                        <br/>
                        <div><label>Project Description</label></div>
                        <div><input name="Image URL" type="textarea" placeholder="Description" value={this.state.newProject.description}/></div>
                        <br/>
                        <div><label>Project Piece Lengths List</label></div>
                        <div><input name="Piece List" type="text" placeholder="Piece Length List" value={this.state.newProject.pieceLengths} onChange={this._handleNewProductChange}/></div>
                        <br/>
                        <div><input className="submit" type="submit" value="Create New Product" onSubmit={this._addNewProjectToProjects}/></div>
                    </fieldset>
                </form>
                {/* <div>
                    <Link to={`/posts/new`}>
                        Leave A Post
                    </Link>
                </div>
                <div>
                    <Link to={`/`}>
                        Go Home
                    </Link>
                </div> */}
            </div>
        );

    }
}

export default AddProject;