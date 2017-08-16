import React, { Component } from 'react';
import axios from 'axios';
import CreateUser from './CreateUser';
import LogIn from './LogIn';

class Entrance extends Component {
    constructor(){
        super();
        this.state = {
            redirect: false,
            adminView: false,
            allUsers: [],
        }
    }

    componentWillMount(){

        axios.get(`/api/user/`)
        .then(res => {
            const allUsers = res.data;
            this.setState(
                { allUsers }
            );
        });

    }

  render() {
    return (
        <div className="EntrancePageContainer">
            <LogIn />
            <CreateUser />
        </div>
    );
  }
}

export default Entrance;