import React, { Component } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Project from './components/Project';
import Post from './components/Post';
import AddProject from './components/AddProject';
import AddPost from './components/AddPost';
import HomeIcon from './images/home-icon.ico';
import BuildIcon from './images/tools-icon.png';



class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: {
        username: "JCHurley95",
        currentUserId: '599487fa2fca5a6e240f4a0e'
      },
      projects: [],
      posts: [],
      users: []
    }
  }

  _getUsers = () => {
    axios.get('/api/users')
      .then((res) => {
        const users = res.data;
        this.setState({users});
      })
  }
  _getProjects = () => {
    axios.get('/api/projects')
      .then((res) => {
        const projects = res.data;
        this.setState({projects});
      })
  }
  _getPosts = () => {
    axios.get('/api/posts')
      .then((res) => {
        const posts = res.data;
        this.setState({posts});
      })
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
    console.log("currentUserId in HomePage is: ", this.props.currentUserId);
    axios.get(`/api/user/`)
    .then(res => {
        const users = res.data;
        this.setState(
            { users }
        );
    });

    axios.get(`/api/project/`)
    .then(res => {
        const projects = res.data;
        this.setState(
            { projects }
        );
    });

    axios.get(`/api/post/`)
    .then(res => {
        const posts = res.data;
        this.setState(
            { posts }
        );
    });
  }

  render() {
    const iconStyle = {
      height: '50px',
      width: '50px'
    }

    return (
      <Router>
        <div className="App">

          <div className="App-Navbar">
              <Link to='/'> 
                <img style={iconStyle} src={HomeIcon} />HOME 
              </Link>   
              <h1>My DIY</h1> 
              <Link to={`/projects/new`}>
                <img style={iconStyle} src={BuildIcon} />BUILD
              </Link>
          </div>

          <div className="App-Main-Container">
            <div className="App-Projects-Bar">
              <h1>Projects</h1>

              {this.state.projects.map((project, i) => {
                  <h1>Name is: {project[i].name}</h1>
              })}
            </div>
            <div className="App-Routes">
              <Route exact path="/" component={Home} />
              <Route exact path="/posts/new" component={AddPost} />
              <Route exact path="/post/:postId" component={Post}/>
              <Route exact path="/projects/new" component={AddProject} />
              <Route exact path="/project/:projectId" component={Project} />
            </div>
            <div className="App-Posts-Bar">
              <h1>Posts</h1>

              {this.state.projects.map((project, i) => {
                  <h1>Name is: {project[i].name}</h1>
              })}
            </div>
          </div>
          <div className="App-Footer"> 
              Made with &hearts; @ GA
          </div>
        </div>
      </Router>
    );
  }
}

export default App;