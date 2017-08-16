import React, { Component } from 'react';
import axios from 'axios';
import Project from './Project';

class MyProjects extends Component {
  constructor(){
    super();
    this.state = {
      id: "",
      adminView: true,
      userName: '',
      projects: []
    }
  }

  componentWillMount(){
    const id = this.props.match.params.userId;
    console.log("userId is: " + id);
    axios.get(`/api/user/${id}`).then(res => {
      this.setState({
        id: res.data._id,
        userName: res.data.userName,
        projects: res.data.projects
      });
    });
  }

  _deleteProject = (index, projectId) => {
    const userId = this.props.match.params.userId;
    const projects = [...this.state.projects];
    console.log(projects);
    projects.splice(index, 1);
    this.setState({projects});
    console.log("User ID is : " + userId);
    axios.delete(`/api/user/${userId}/project/${projectId}`).then(res => {
      console.log("Project ID is: " + projectId);
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.userName}</h1>
        <h3>{this.state.userName}'s Projects:</h3>
            {this.state.projects.map((project, i) => {
                return <Project 
                    key={i} 
                    project={project}
                    projectName={this.state.projects[i].name}
                    pieceLengths={this.state.projects[i].pieceLengths}
                    adminView={this.state.adminView}
                    deleteProject={this._deleteProject} />
            })}
      </div>
    );
  }
}

export default MyProjects;