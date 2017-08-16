import React, { Component } from 'react';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      id: "",
      projectName: '',
      pieceLengths: []
    }
  }

//   componentWillMount(){
//     const id = this.props.match.params.userId;
//     axios.get(`/api/user/${id}`).then(res => {
//       this.setState({
//         id: res.data._id,
//         name: res.data.name,
//         projects: res.data.projects
//       });
//     });
//   }

  render() {
    return (
      <div>
        <h1>Project Name: {this.state.projectName}</h1>
        

      </div>
    );
  }
}

export default AddProject;