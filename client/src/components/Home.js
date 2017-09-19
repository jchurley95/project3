import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Note from './Note';
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
            <Link to={`/projects/new`}>
                Build A Project
            </Link>
            <Link to={`/notes/new`}>
                Make a Note
            </Link>
        </div>
    );
  }
}

export default Home;