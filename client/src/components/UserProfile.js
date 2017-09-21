import React, { Component } from 'react';
import axios from 'axios';

class UserProfile extends Component {
    constructor() {
        super();
        this.state = {
            user: {}
        }
    }

    componentWillMount() {
        this._getUser();
    }
    _getUser = () => {
        axios.get('/api/user')
            .then((res) => {
                const users = res.data;
                const user = users[0];
                this.setState({user});
            })
    }

    render() {
        return (
            <div className="user-profile">
                
            </div>
        );
    }
}

export default UserProfile;