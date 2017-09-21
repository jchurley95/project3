import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom'

class AddNote extends Component {

  constructor () {
    super();

    this.state = {
        newNote: {
            title: '',
            content: '',
            imageURL: ''
        },
        redirect: false
    }
  }

    _handleNewNoteChange = (e) => {
        const newState = {...this.state.newNote};
        newState[e.target.title] = e.target.value;
        this.setState({
            newNote: newState
        });
    }
    _addNewNoteToNotes = (e) => {
        e.preventDefault();
        axios.post('/api/notes', this.state.newNote)
            .then(res => {
                console.log('successfully created note')
                // console.log(res.data)
                this.setState({redirect: true})
            })
    };

    render() {
        return (
            <div className="New-Container">
                {this.state.redirect? 
                    <Redirect to={`/`}/>
                    :
                    <form onSubmit={this._addNewNoteToNotes}>
                            <br />
                            <div>
                                <label htmlFor="title">Note title</label>
                                <br />
                                <input onChange={this._handleNewNoteChange} title="title" type="text"  value={this.state.newNote.title} />
                                </div>
                            <br/>
                            <div>
                                <label htmlFor="imageURL">Note Image URL</label>
                                <br />
                                <input onChange={this._handleNewNoteChange} title="imageURL" type="text" value={this.state.newNote.imageURL} />
                            </div>
                            <br/>
                            <div>
                                <label htmlFor="content">Note content</label>
                                <br />
                                <input onChange={this._handleNewNoteChange} title="content" type="textarea" value={this.state.newNote.content} />
                            </div>
                            <br/>
                            <button>Save Note</button>
                    </form>
                }
            </div>
        );

    }
}

export default AddNote;