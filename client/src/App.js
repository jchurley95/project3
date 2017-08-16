import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Project from './components/Project';
import AddProject from './components/AddProject';
import MyProjects from './components/MyProjects';
import Entrance from './components/Entrance';
import HomeIcon from './images/home-icon.ico';
import BuildIcon from './images/tools-icon.png';



class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUserId: '5993ef4862b9d91bacc09527'
    }
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
              <h1>ScrapSave</h1> 
              <Link to={`/user/${this.state.currentUserId}`}>
                <img style={iconStyle} src={BuildIcon} />MY DIY
              </Link>
            </div>
          <div>
            <Route exact path="/" component={Entrance} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/user/:userId" component={MyProjects} />
            <Route exact path="/project/:projectId" component={Project} />
            <Route path="user/:userId/add-project" component={AddProject} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;