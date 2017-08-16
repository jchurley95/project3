import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Project from './components/Project';
import AddProject from './components/AddProject';
import MyProjects from './components/MyProjects';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUserId: '5993ef4862b9d91bacc09527'
    }
  }
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/">Home</Link>
            ScrapSave
            <Link to={`/user/${this.state.currentUserId}`}>My DIY</Link>
          </div>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/user/:userId" component={MyProjects} />
            <Route exact path="/project/:projectId" component={Project} />
            <Route exact path="/add-project" component={AddProject} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;