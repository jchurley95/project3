import React, { Component } from 'react';

class LogIn extends Component {
    render() {
        return(
            <div>
                <br />
                <hr />
                <form>
                    <fieldset>
                        <legend><h1>Log In</h1></legend>
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

export default LogIn;