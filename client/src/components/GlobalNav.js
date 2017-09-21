import React, { Component } from 'react';
import HomeIcon from '../images/home-icon.ico';
import NoteIcon from '../images/pencil-icon.png';
import BuildIcon from '../images/tools-icon.png';
import UserIcon from '../images/user.png';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class GlobalNav extends Component {
    render() {
        return (
            <div className="App-Navbar">
                <div className="navbar-left">
                    <Link to='/'> 
                        <img className="iconStyle" src={HomeIcon} />HOME 
                    </Link>
                    <Link to='/user'> 
                        <img className="iconStyle" src={UserIcon} />ABOUT 
                    </Link>   
                </div>  
                <h1>Screw Loose Carpentry</h1> 
                <div className="navbar-right">
                    <Link to={`/note/new`}>
                        <img className="iconStyle" src={NoteIcon} />NOTE
                    </Link>
                    <Link to={`/project/new`}>
                        <img className="iconStyle" src={BuildIcon} />BUILD
                    </Link>
                </div>
            </div>
        );
    }
}

export default GlobalNav;