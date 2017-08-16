import React, { Component } from 'react';

class CreateUser extends Component {

    constructor() {
        super();

        this.state = {

        }
    }
    render() {
        return(
            <div>
                
                <form>
                    <fieldset>
                        <legend><h1>Create Account</h1></legend>
                        <label>First Name:</label>
                        <br />
                        <input type="text" placeholder="Enter first name"/>
                        <br />
                        <label>Last Name:</label>
                        <br />
                        <input type="text" placeholder="Enter last name"/>
                        <br />
                        <label>Username:</label>
                        <br />
                        <input type="text" placeholder="Enter a username"/>
                        <br />
                        <label>Password:</label>
                        <br />
                        <input type="text" placeholder="Enter a password"/>
                        <br /> 
                        <input type="submit" />
                    </fieldset>
                </form>
                <hr />
            </div>
        );
    }
}

export default CreateUser;