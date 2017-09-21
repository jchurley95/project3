import React, { Component } from 'react';
import styled from "styled-components";
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';

const projectContainer = styled.div`
    border: 2px solid black;
`;

const projectButtonContainer = styled.div`
    margin: 20px;
    pading: 20px;
    border: 2px solid black;
`;
const projectButton = styled.button`
    margin: 20px;
    pading: 20px;
    border: 2px solid black;
`;


class Project extends Component {

    constructor() {
        super();

        this.state = {
            project: {
                name: '',
                description: '',
                imageURL: '',
                projectCost: 0,
                pieceLengths: [],
                cutPlan: [],
                totalStockBoardNeededThisProject: 0
            },
            redirect: false
        }
    }

    componentWillMount() {
        this._getProject();
    }
    _getProject = () => {
        const id = this.props.match.params.projectId;
        console.log(id)
        axios.get(`/api/projects/${id}`)
          .then((res) => {
            const project = res.data;
            this.setState({project});
          })
    }

    _deleteProject = () => {
        axios.delete(`/api/projects/${this.props.match.params.projectId}/delete`)
        .then(res => {
            console.log("successfully deleted project");
            this.setState({redirect: true})
        })
        .catch(err => {
            console.log(err)
        })
        
    }
    // _determineCutPlan = () => {
    //     const sum = 0;
    //     for(var i = 0; i < this.props.pieceLengths.length; i++){
    //         sum += this.props.pieceLengths[i];
    //     }

    //     const goalTotalNeeded = need to determine stock material length
    // } 

    render() {
        
        const projectName = this.state.project.name;
        const description = this.state.project.description;
        // pieceLengths = '"'.join(pieceLengths);
        console.log('pieceLengths is: ' + description);
        console.log('This project name is: ' + projectName);
        const id = this.props.match.params.projectId;
        console.log(id)
        return(
            <div className="ProjectContainer">
                {this.state.redirect ? 
                    <Redirect to={`/`}/>
                    :
                    <div>
                        <h2>Project Name: {projectName}</h2>
                        <hr />
                        <h3>Description: {description} </h3> 
                        <div>
                            <Link to={`/projects/${id}/edit`}><button>Edit Project</button></Link>
                            <button onClick={this._deleteProject}>Delete Project</button>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Project;

{/* onClick={this.props.deleteProject(this.props.id, this.props._id)} */}