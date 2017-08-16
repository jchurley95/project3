import React, { Component } from 'react';

class User extends Component {
    render() {
        const userName = this.props.userName;
        const projects = this.props.projects;
        const posts = this.props.posts;
        console.log('userName is: ' + userName);
        return(
            <div>
                <h2>Username: {userName}</h2>
                <h3>Projects: {projects}</h3>
                <h3>Posts: {posts}</h3>
            </div>
        );
    }
}

export default User;