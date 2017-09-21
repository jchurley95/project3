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
import EditProject from './components/EditProject';
import EditNote from './components/EditNote';


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
              <Route exact path="/note/new" component={AddNote} />
              <Route exact path="/notes/:noteId" component={Note}/>
              <Route exact path="/notes/:noteId/edit" component={EditNote} />
              <Route exact path="/project/new" component={AddProject} />
              <Route exact path="/projects/:projectId" component={Project}/>
              <Route exact path="/projects/:projectId/edit" component={EditProject} />
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