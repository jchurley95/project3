import React, { Component } from 'react';
import axios from 'axios';

class MyProjects extends Component {
  constructor(){
    super();
    this.state = {
      id: "",
      name: '',
      projects: []
    }
  }

  componentWillMount(){
    const id = this.props.match.params.userId;
    axios.get(`/api/user/${id}`).then(res => {
      this.setState({
        id: res.data._id,
        name: res.data.name,
        projects: res.data.projects
      });
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>Projects:</h3>

      </div>
    );
  }
}

export default MyProjects;