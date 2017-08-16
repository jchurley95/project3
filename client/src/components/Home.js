import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Post from './Post';
import Project from './Project';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            redirect: false,
            adminView: false,
            allUsers: [],
            allProjects: [],
            allPosts: [],
            currentUserId: ''
        }
    }

    componentWillMount(){
        console.log("currentUserId in HomePage is: ", this.props.currentUserId);
        axios.get(`/api/user/`)
        .then(res => {
            const allUsers = res.data;
            this.setState(
                { allUsers }
            );
        });

        axios.get(`/api/project/`)
        .then(res => {
            const allProjects = res.data;
            this.setState(
                { allProjects }
            );
        });

        axios.get(`/api/post/`)
        .then(res => {
            const allPosts = res.data;
            this.setState(
                { allPosts }
            );
        });
    }

  render() {
    return (
        <div className="HomePageContainer">
            <div className="HomePostsAndProjectsContainer">
                <div className="HomePostsContainer">
                    <h1>Posts</h1>
                    {this.state.allPosts.map((post, i) => {
                        return <Post 
                        key={i} 
                        post={post} 
                        title={this.state.allPosts[i].title}
                        content={this.state.allPosts[i].content}
                        />
                    })}
                </div>

                <div className="HomeProjectsContainer">
                    <h1>Projects</h1>
                    {this.state.allProjects.map((project, i) => {
                        return <Project 
                        key={i} 
                        project={project}
                        projectName={this.state.allProjects[i].name}
                        pieceLengths={this.state.allProjects[i].pieceLengths}
                        adminView={this.state.adminView}/>
                        
                    })}
                </div>
            </div>
            <div className="HomeUsersListContainer">
                <h1>Users</h1>
                {this.state.allUsers.map((user, i) => (
                    <div 
                        adminView={this.state.adminView} 
                        key={i} 
                        className="UserListItem">
                            <Link to={`/user/${user._id}`}>
                                {user.userName}
                            </Link>
                    </div>
                ))}
            </div>

        </div>
    );
  }
}

export default Home;