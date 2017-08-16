import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import AddProject from './components/AddProject';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/add-project">Add Project</Link>
          </div>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/user/:userId" component={User} />
            <Route exact path="/add-project" component={AddProject} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;