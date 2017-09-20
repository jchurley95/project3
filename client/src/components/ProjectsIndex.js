import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const ProjectsIndex = (props) => {
    const projects = props.projects;
    return (
        <div className="App-Projects-Bar">
            <h1>Projects</h1>
            <ul className="App-Projects-Index">
                {projects.map((project, i) => {
                    return <li><Link to={`/projects/${project._id}`} key={i}>{project.name}</Link></li>
                })}
            </ul>
        </div>
    );
};

export default ProjectsIndex;
