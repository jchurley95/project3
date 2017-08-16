import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            currentUserId: "5993ccb1dd0826f5ad9a07bb",
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

        axios.get(`/api/user/`)
        .then(res => {
            const allPosts = res.data;
            this.setState(
                { allPosts }
            );
        });
        console.log(this.state.allUsers);
        console.log(this.state.allProjects);
        console.log(this.state.allPosts);
    }

  render() {
    return (
      <div>
        <div>
            <h1>Posts</h1>
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