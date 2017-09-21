import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProjectsIndex from './ProjectsIndex'
import NotesIndex from './NotesIndex';

class Home extends Component {
    constructor() {
        super();
    
        this.state = {
          user: {},
          projects: [],
          notes: [],
        }
      }
    
      componentWillMount(){
        this._getUser();
        this._getProjects();
        this._getNotes();
      }
    
      _getUser = () => {
        axios.get('/api/user')
          .then((res) => {
            const users = res.data;
            const user = users[0];
            this.setState({user});
          })
      }
      _getProjects = () => {
        axios.get('/api/projects')
          .then((res) => {
            const projects = res.data;
            this.setState({projects});
          })
      }
      _getNotes = () => {
        axios.get('/api/notes')
          .then((res) => {
            const notes = res.data;
            this.setState({notes});
          })
      }

  render() {
      const projects = this.state.projects;
      const notes = this.state.notes;
    return (

        <div className="HomePageContainer">
            <div className="HomePage-content">
                
            </div>
            <ProjectsIndex projects={projects}/>
            <NotesIndex notes={notes}/>
        </div>
    );
  }
}

export default Home;