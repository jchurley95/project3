import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'

class Note extends Component {
    constructor() {
        super();

        this.state = {
            changeTitleActive: false,
            changeContentActive: false,
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

    _toggleChangeTitle = () => {
        const changeTitleActive = !this.state.changeTitleActive;
        this.setState({changeTitleActive});
    };
    _toggleChangeContent = () => {
        const changeContentActive = !this.state.changeContentActive;
        this.setState({changeContentActive});
    };

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
                <div>
                    {
                        this.state.changeTitleActive ? 
                            <input 
                                type='text' 
                                placeholder={noteTitle}
                                onChange={this.props.handleNoteTitleChange}
                                value={noteTitle}/>
                            :
                            null
                    }
                </div>
                 <div>
                    <div>
                        <button onClick={this._toggleChangeTitle}>
                            {this.state.changeTitleActive
                                ? 'Done Editing'
                                : 'Edit Note Title'}
                        </button>
                    </div>
                </div>
                <p>{noteContent}</p>
                <div>
                    {
                        this.state.changeContentActive ? 
                            <input 
                                type='text' 
                                value={noteContent}
                                onChange={this.state.handleNoteContentChange}/>
                            :
                            null
                    }
                </div>
                <div>
                    <div>
                        <button onClick={this._toggleChangeContent}>
                            {this.state.changeContentActive
                                ? 'Done Editing'
                                : 'Edit Content'}
                        </button> 
                        <br />
                        <hr />
                        <button onClick={this._deleteNote}>Delete Note</button>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Note;