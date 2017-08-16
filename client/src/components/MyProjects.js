import React, { Component } from 'react';
import axios from 'axios';
import Project from './Project';
import Post from './Post';
import styled from "styled-components";
import { Link } from 'react-router-dom'


class MyProjects extends Component {
    constructor(){
        super();
        this.state = {
        id: "",
        userName: '',
        projects: [],
        posts: [],
        adminView: true
        }
    }

    componentWillMount(){
        const id = this.props.match.params.userId;
        axios.get(`/api/user/${id}`).then(res => {
        this.setState({
            id: res.data._id,
            userName: res.data.userName,
            projects: res.data.projects,
            posts: res.data.posts
        });
        });
    }

    _deleteProject = (index, projectId) => {
        console.log(projectId);
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
    _handleProjectNameChange = (event, index) => {
        const name = event.target.value;
        const projects = [...this.state.projects];
        console.log("Projects is: ", projects[0]);
        projects[index].name = name;
        this.setState({projects});
        console.log(this.state.projects[index].name);
    };

  render() {
    return (
      <div>
        <h1>{this.state.userName}'s Projects</h1>
            <Link to={`/user/${this.state.id}/add-project`}>Build New Project </Link>
            {this.state.projects.map((project, i) => {
                return <Project 
                key={i}
                id={i}
                project={project}
                projectName={this.state.projects[i].name}
                pieceLengths={this.state.projects[i].pieceLengths}
                adminView={this.state.adminView}
                handleProjectNameChange={this._handleProjectNameChange}
                deleteProject={this._deleteProject}
                />
            })}
        <h1>{this.state.userName}'s Posts</h1>
            {this.state.posts.map((post, i) => {
                return <Post 
                key={i} 
                post={post}
                title={this.state.posts[i].title}
                content={this.state.posts[i].content}
                adminView={this.state.adminView}
                />
            })}
      </div>
    );
  }
}

export default MyProjects;