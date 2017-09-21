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
            this.setState({redirect: true})
        })
        .catch(err => {
            console.log(err)
        })
        
    }

    render() {
        const noteTitle = this.state.note.title;
        const noteContent = this.state.note.content;
        const id = this.props.match.params.noteId;
        console.log(id)
        return(

            <div>
                {this.state.redirect ? 
                    <Redirect to={`/`}/>
                    :
                    <div className="NoteContainer">
                        <h2>Note Title: {noteTitle}</h2>
                        <hr />
                        <p>{noteContent}</p>
                        <img className="noteImage" src={this.state.note.imageURL}/>
                        <div>
                            <Link to={`/notes/${id}/edit`}><button>Edit Note</button></Link>
                            <hr />
                            <button onClick={this._deleteNote}>Delete Note</button>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Note;