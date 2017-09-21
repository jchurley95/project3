import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';

class Note extends Component {
    constructor() {
        super();

        this.state = {
            note: {},
            redirect: false
        }
    }

    componentWillMount() {
        this._getNote();
    }
    _getNote = () => {
        const id = this.props.match.params.noteId;
        console.log(id)
        axios.get(`/api/notes/${id}`)
          .then((res) => {
            const note = res.data;
            this.setState({note});
          })
    }
    _deleteNote = () => {
        axios.delete(`/api/notes/${this.props.match.params.noteId}/delete`)
        .then(res => {
            console.log("successfully deleted note");
        })
        .catch(err => {
            console.log(err)
        })
        
    }

    render() {
        const noteTitle = this.state.note.title;
        const noteContent = this.state.note.content;
        return(

            <div className="NoteContainer">
                
                <h2>Note Title: {noteTitle}</h2>
                <hr />
                <p>{noteContent}</p>
                <div>
                    <Link to='/notes/edit'><button>Edit Project</button></Link>
                    <button onClick={this._deleteNote}>Delete Note</button>
                </div>
                
            </div>
        );
    }
}

export default Note;