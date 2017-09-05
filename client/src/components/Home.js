import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Post from './Post';
import Project from './Project';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            // redirect: false,
            // adminView: false,
            // allUsers: [],
            // allProjects: [],
            // allPosts: [],
            // currentUserId: ''
        }
    }

  render() {
    return (
        <div className="HomePageContainer">
            <h1>Home</h1>
            <p>
                ScrapSave is an open one-stop-shop for sharing and editing projects, tips, and tricks for fellow DIY'ers.
            </p>
            <Link to={`/projects/new`}>
                Share A Project
            </Link>
            <Link to={`/posts/new`}>
                Leave A Post
            </Link>
            

        </div>
    );
  }
}

export default Home;