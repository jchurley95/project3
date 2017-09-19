import React, { Component } from 'react';
import HomeIcon from '../images/home-icon.ico';
import BuildIcon from '../images/tools-icon.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class GlobalNav extends Component {
    render() {
        const iconStyle = {
            height: '50px',
            width: '50px'
          }
        return (
            <div className="App-Navbar">
                <Link to='/'> 
                    <img style={iconStyle} src={HomeIcon} />HOME 
                </Link>   
                <h1>Screw Loose Carpentry</h1> 
                <Link to={`/projects/new`}>
                    <img style={iconStyle} src={BuildIcon} />BUILD
                </Link>
            </div>
        );
    }
}

export default GlobalNav;