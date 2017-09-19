import React, { Component } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Project from './components/Project';
import Note from './components/Note';
import AddProject from './components/AddProject';
import AddNote from './components/AddNote';
import UserProfile from './components/UserProfile';
import GlobalNav from './components/GlobalNav';
import NotesIndex from './components/NotesIndex';
import ProjectsIndex from './components/ProjectsIndex';



class App extends Component {
  

  render() {

    return (
      <Router>
        <div className="App">

          <GlobalNav/>

          {/* <div className="App-Main-Container">

            <div className="App-Routes"> */}
              <Route exact path="/" component={Home}/>
              <Route exact path="/users/:userId" component={UserProfile}/>
              <Route exact path="/notes/new" component={AddNote} />
              <Route exact path="/notes/:noteId" component={Note}/>
              <Route exact path="/projects/new" component={AddProject} />
              <Route exact path="/projects/:projectId" component={Project}/>
            {/* </div>

          </div> */}

          <div className="App-Footer"> 
              Made with &hearts; @ GA
          </div>
          
        </div>
      </Router>
    );
  }
}

export default App;