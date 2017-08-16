import React, { Component } from 'react';

class AddProject extends Component {

  constructor () {
    super();

    this.state = {
        newProject: {}
    }
  }

  _handleNewProjectChange = (event) => {
      const projectName = event.target.name;
      const name = event.target.value;
      const newProject = {...this.state.newProject};
      newProject[projectName] = name;
      this.setState({newProject})
  };
  _addNewProject = (event) => {
      event.preventDefault();
      this.props.addNewProjectToProductList(this.state.newProject);
  };

    render() {
        return (
            <div>
                <form onSubmit={this._addNewProject}>
                    <div><input name="productName" type="text" placeholder="Project Name" onChange={this._handleNewProductChange}/></div>
                    <div><input name="description" type="text" placeholder="Description" onChange={this._handleNewProductChange}/></div>
                    <div><input type="submit" value="Create New Product"/></div>
                </form>
            </div>
        );

    }
}

export default AddProject;