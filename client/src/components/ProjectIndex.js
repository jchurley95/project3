import React, { Component } from 'react';
import axios from 'axios';
import Project from './Project';
import Post from './Post';
import AddProject from './AddProject';
import { Link } from 'react-router-dom';


class ProjectIndex extends Component {

    _addNewProjectToProjects = (newProject) => {
        const projects = [...this.state.projects];
            console.log('projects is: ', projects);
        projects.push(newProject);
            console.log('pushed newProject, now projects is: ', projects);
        this.setState({projects});
    };
    _addNewPostToPosts = (newPost) => {
        const posts = [...this.state.posts];
            console.log('posts is: ', posts);
        posts.push(newPost);
            console.log('pushed newPost, now posts is: ', posts);
        this.setState({posts});
    };
    _handleProjectNameChange = (event, index) => {
        const name = event.target.value;
            console.log('name is: ', name);
        const projects = [...this.state.projects];
            console.log("projects is: ", projects);
            console.log("projects[0] is: ", projects[0]);
        projects[index].name = name;
        this.setState({projects});
            console.log("this.state.projects[0].name is: ", this.state.projects[0].name);
            console.log("this.state.projects[index].name is: ", this.state.projects[index].name);
    };
    _handleProjectListChange = (event, index) => {
        const pieceLengths = event.target.value;
            console.log('name is: ', pieceLengths);
        const projects = [...this.state.projects];
            console.log("projects is: ", projects);
            console.log("projects[0] is: ", projects[0]);
        projects[index].pieceLengths = pieceLengths;
        this.setState({projects});
            console.log("this.state.projects[0].name is: ", this.state.projects[0].name);
            console.log("this.state.projects[index].name is: ", this.state.projects[index].name);
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

  render() {
    return (
      <div className="ProjectIndexPageContainer">

        <div className="ProjectIndexProjectsContainer">

            <h1>{this.state.userName}'s Projects</h1>

            <AddProject userId={this.state.id} addNewProject={this._addNewProjectToProjects}/>
            {this.state.projects.map((project, i) => {
                return <Project 
                    key={i}
                    id={i}
                    project={project}
                    projectName={this.state.projects[i].name}
                    pieceLengths={this.state.projects[i].pieceLengths}
                    adminView={this.state.adminView}
                    addNewProject={this._addNewProjectToProjects}
                    deleteProject={this._deleteProject}
                />
            })}

        </div>

        <div className="ProjectIndexPostsContainer">

            <h1>{this.state.userName}'s Posts</h1>

            {this.state.posts.map((post, i) => {
                return <Post 
                key={i} 
                post={post}
                title={this.state.posts[i].title}
                content={this.state.posts[i].content}
                adminView={this.state.adminView}
                addNewPost={this._addNewPostToPosts}
                
                />
            })}

        </div>

      </div>
    );
  }
}

export default ProjectIndex;