import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Post from './Post';
import Project from './Project';
import User from './User';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            currentUserId: "5993de04a528cf0a20607b3c",
            redirect: false,
            allUsers: [],
            allProjects: [],
            allPosts: []
        }
    }

    componentWillMount(){

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
        console.log("allUsers is: ", this.state.allUsers);
        console.log("allUsers[0] is: ", this.state.allUsers[0]);
        console.log("allProjects is: ", this.state.allProjects);
        console.log("allProjects[0] is: ", this.state.allProjects[0]);
        console.log("allPosts is: ", this.state.allPosts);
        console.log("allPosts[0] is: ", this.state.allPosts[0]);
    return (
      <div>
        <div>
            <h1>Posts</h1>
            {this.state.allPosts.map((post) => {
                return <Post />
            })}
        </div>
        <div>
            <h1>Projects</h1>
        </div>
        <div>
            <h1>Users</h1>
        </div>
        {this.state.allUsers.map((user, i) => (
          <div key={i}>
            <Link to={`/user/${user._id}`}>
              {user.userName}
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;