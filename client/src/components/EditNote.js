import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom'

class AddNote extends Component {

  constructor () {
    super();

    this.state = {
        note: {
            title: '',
            content: '',
            imageURL: ''
        },
        redirect: false
    }
  }

    _handleNoteChange = (e) => {
        const newState = {...this.state.note};
        newState[e.target.title] = e.target.value;
        this.setState({
            note: newState
        });
    }
    _updateNote = (e) => {
        e.preventDefault();
        const id = this.props.match.params.noteId
        console.log(id);
        axios.put(`/api/notes/${id}`, this.state.note)
            .then(res => {
                // console.log(res.data);
                console.log('successfully updated note');
                this.setState({redirect: true})
            })
    };

    render() {
        return (
            <div className="New-Container">
                {this.state.redirect? 
                    <Redirect to={`/`}/>
                    :
                    <form onSubmit={this._updateNote}>
                            <br />
                            <div>
                                <label htmlFor="title">Note title</label>
                                <br />
                                <input onChange={this._handleNoteChange} title="title" type="text"  value={this.state.note.title} />
                                </div>
                            <br/>
                            <div>
                                <label htmlFor="imageURL">Note Image URL</label>
                                <br />
                                <input onChange={this._handleNoteChange} title="imageURL" type="text" value={this.state.note.imageURL} />
                            </div>
                            <br/>
                            <div>
                                <label htmlFor="content">Note content</label>
                                <br />
                                <input onChange={this._handleNoteChange} title="content" type="textarea" value={this.state.note.content} />
                            </div>
                            <br/>
                            <button>Update Note</button>
                    </form>
                }
            </div>
        );

    }
}

export default AddNote;