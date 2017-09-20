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
    
      // _addNewProjectToProjects = (newProject) => {
      //   const projects = [...this.state.projects];
      //       console.log('projects is: ', projects);
      //   projects.push(newProject);
      //       console.log('pushed newProject, now projects is: ', projects);
      //   this.setState({projects});
      // };
      // _addNewPostToPosts = (newPost) => {
      //     const posts = [...this.state.posts];
      //         console.log('posts is: ', posts);
      //     posts.push(newPost);
      //         console.log('pushed newPost, now posts is: ', posts);
      //     this.setState({posts});
      // };
      // _handleProjectNameChange = (event, index) => {
      //     const name = event.target.value;
      //         console.log('name is: ', name);
      //     const projects = [...this.state.projects];
      //         console.log("projects is: ", projects);
      //         console.log("projects[0] is: ", projects[0]);
      //     projects[index].name = name;
      //     this.setState({projects});
      //         console.log("this.state.projects[0].name is: ", this.state.projects[0].name);
      //         console.log("this.state.projects[index].name is: ", this.state.projects[index].name);
      // };
      // _handleProjectListChange = (event, index) => {
      //     const pieceLengths = event.target.value;
      //         console.log('name is: ', pieceLengths);
      //     const projects = [...this.state.projects];
      //         console.log("projects is: ", projects);
      //         console.log("projects[0] is: ", projects[0]);
      //     projects[index].pieceLengths = pieceLengths;
      //     this.setState({projects});
      //         console.log("this.state.projects[0].name is: ", this.state.projects[0].name);
      //         console.log("this.state.projects[index].name is: ", this.state.projects[index].name);
      // };   
      // _deleteProject = (index, projectId) => {
      //         console.log("index in _deleteProject is: ", index)
      //         console.log("projectId in _deleteProject is: ", projectId);
      //     const userId = this.props.match.params.userId;
      //     // const projectId = this.props.match.params.projectId;
      //     const projects = [...this.state.projects];
      //         console.log("projects in _deleteProject is: ", projects);
      //     projects.splice(index, 1);
      //     this.setState({projects});
      //         console.log("User ID in _deleteProject is : " + userId);
      //     axios.delete(`/api/user/${userId}/project/${projectId}`).then(res => {
      //         console.log("Project ID _deleteProject is: ", projectId);
      //     });
      // }
    
      componentWillMount(){
        this._getUser();
        this._getProjects();
        this._getNotes();
      }
    
      _getUser = () => {
        axios.get('/api/user')
          .then((res) => {
            const user = res.data;
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
                
                {/* <Link to={`/projects/new`}>
                    Build A Project
                </Link>
                <Link to={`/notes/new`}>
                    Make a Note
                </Link> */}
            </div>
            <ProjectsIndex projects={projects}/>
            <NotesIndex notes={notes}/>
        </div>
    );
  }
}

export default Home;