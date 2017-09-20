import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddNote extends Component {

  constructor () {
    super();

    this.state = {
        newNote: {}
    }
  }

  _handleNewNoteChange = (event) => {
      const noteTitle = event.target.title;
      const name = event.target.value;
      const newNote = {...this.state.newNote};
      newNote[noteTitle] = name;
      this.setState({newNote})
  };
  _addNewNote = (event) => {
      event.preventDefault();
      this.props.addNewNoteToNotes(this.state.newNote);
  };

    render() {
        return (
            <div className="New-Container">
                <br />
                <div>
                    <form onSubmit={this.props.addNewNote}>
                    <fieldset>
                        <legend><h1>Make A Note</h1></legend>
                        <br />
                        <div><input name="Note Title" type="text" placeholder="Note Title" onChange={this._handleNewProductChange}/></div>
                        <br/>
                        <div><input className="post-content" name="Post Content" type="text" placeholder="Content" onChange={this._handleNewNoteChange}/></div>
                        <br/>
                        <div><input className="submit" type="submit" value="Create New Note" onSubmit={this._addNewNote}/></div>
                    </fieldset>
                    </form>
                </div>
                <div>
                    <Link to={`/projects/new`}>
                        Share A Project
                    </Link>
                </div>
                <div>
                    <Link to={`/`}>
                        Go Home
                    </Link>
                </div>
            </div>
        );

    }
}

export default AddNote;