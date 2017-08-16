import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";

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
            <Route path="/user/:userId" component={User} />
            <Route path="/add-project" component={AddCategory} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;