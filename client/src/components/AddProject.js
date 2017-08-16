import React, { Component } from 'react';
import axios from 'axios';

class AddProject extends Component {

  constructor () {
    super();

    this.state = {
        newProject: {}
    }
  }

  _handleSubmit = (event) => {

  }

  _handleNewProjectChange = (event) => {
      const projectName = event.target.name;
      const name = event.target.value;
      const newProject = {...this.state.newProject};
      newProject[projectName] = name;
      this.setState({newProject})
  };
  _addNewProject = (event) => {
      event.preventDefault();
      this.props.addNewProjectToProjects(this.state.newProject);
  };

    render() {
        return (
            <div>
              <br />
              <br />
                <form onSubmit={this.props.addNewProject}>
                  <fieldset>
                    <legend><h1>Build a New Project</h1></legend>
                    <div><input name="Project Name" type="text" placeholder="Project Name" onChange={this._handleNewProductChange}/></div>
                    <div><input name="Piece List" type="text" placeholder="Piece Length" onChange={this._handleNewProductChange}/></div>
                    <div><input type="submit" value="Create New Product" onSubmit={this.props.addNewProject}/></div>
                  </fieldset>
                </form>
            </div>
        );

    }
}

export default AddProject;