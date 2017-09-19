import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const NotesIndex = (props) => {
    const user = props.user;
    const notes = props.notes;
    return (
        <div className="App-Notes-Bar">
            <h1>Notes</h1>
            <ul className="App-Notes-Index">
                {notes.map((note, i) => {
                    return <Link to={`/notes/${note._id}`} key={i}><li>{note.title}</li></Link>                })}
            </ul>
        </div>
    );
};

export default NotesIndex;
