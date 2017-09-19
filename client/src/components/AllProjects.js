import React, { Component } from 'react';
import axios from 'axios';
import Project from './Project';
import Post from './Post';
import AddProject from './AddProject';
import { Link } from 'react-router-dom';


class ProjectsIndex extends Component {
    constructor () {
        super ();
        this.state = {
            
        }
    }
    
    componentWillMount () {
        
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

  render() {
    return (
      <div className="AllProjectsPageContainer">

        <div className="AllProjectsProjectsContainer">

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

        <div className="AllProjectsPostsContainer">

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

export default ProjectsIndex;