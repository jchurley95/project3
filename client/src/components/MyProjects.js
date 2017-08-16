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
        console.log(this.props.currentUserId);
        axios.get(`/api/user/${id}`)
        .then(res => {
            this.setState({
                    id: res.data._id,
                    userName: res.data.userName,
                    projects: res.data.projects,
                    posts: res.data.posts
            });
        });
    }

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
    // _handlePostTitleChange = (event, index) => {
    //     const title = event.target.value;
    //         console.log('title is: ', title);
    //     const posts = [...this.state.posts];
    //         console.log("posts is: ", posts);
    //         console.log("posts[0] is: ", posts[0]);
    //     posts[index].title = title;
    //     this.setState({posts});
    //         console.log("this.state.posts[0].title is: ", this.state.posts[0].title);
    //         console.log("this.state.posts[index].title is: ", this.state.posts[index].title);
    // };
    // _handlePostContentChange = (event, index) => {
    //     const title = event.target.value;
    //         console.log('title is: ', title);
    //     const posts = [...this.state.posts];
    //         console.log("posts is: ", posts);
    //         console.log("posts[0] is: ", posts[0]);
    //     posts[index].title = title;
    //     this.setState({posts});
    //         console.log("this.state.posts[0].title is: ", this.state.posts[0].title);
    //         console.log("this.state.posts[index].title is: ", this.state.posts[index].title);
    // };   
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
      <div className="MyProjectsPageContainer">

        <div className="MyProjectsProjectsContainer">

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
                addNewProject={this._addNewProjectToProjects}
                handleProjectNameChange={this._handleProjectNameChange}
                handleProjectListChange={this._handleProjectListChange}
                deleteProject={this._deleteProject}
                />
            })}

        </div>

        <div className="MyProjectsPostsContainer">

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

export default MyProjects;

// handlePostTitleChange={this._handlePostTitleChange}
// handlePostContentChange={this._handlePostContentChange}
// deletePost={this._deletePost}