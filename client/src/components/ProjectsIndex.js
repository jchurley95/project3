import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const ProjectsIndex = (props) => {
    const user = props.user;
    const projects = props.projects;
    return (
        <div className="App-Projects-Bar">
            <h1>Projects</h1>
            <ul className="App-Projects-Index">
                {projects.map((project, i) => {
                    return <Link to={`/projects/${project._id}`} key={i}><li>{project.name}</li></Link>
                })}
            </ul>
        </div>
    );
};

export default ProjectsIndex;
