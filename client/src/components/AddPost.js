import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddPost extends Component {

  constructor () {
    super();

    this.state = {
        newPost: {}
    }
  }

  _handleSubmit = (event) => {

  }

  _handleNewPostChange = (event) => {
      const postTitle = event.target.title;
      const name = event.target.value;
      const newPost = {...this.state.newPost};
      newPost[postTitle] = name;
      this.setState({newPost})
  };
  _addNewPost = (event) => {
      event.preventDefault();
      this.props.addNewPostToPosts(this.state.newPost);
  };

    render() {
        return (
            <div className="New-Container">
                <br />
                <div>
                    <form onSubmit={this.props.addNewPost}>
                    <fieldset>
                        <legend><h1>Submit A New Post</h1></legend>
                        <br />
                        <div><input name="Post Title" type="text" placeholder="Post Title" onChange={this._handleNewProductChange}/></div>
                        <br/>
                        <div><input className="post-content" name="Post Content" type="text" placeholder="Content" onChange={this._handleNewProductChange}/></div>
                        <br/>
                        <div><input className="submit" type="submit" value="Create New Post" onSubmit={this.props.addNewPost}/></div>
                    </fieldset>
                    </form>
                </div>
                <div>
                    <Link to={`/projects/new`}>
                        Share A Project
                    </Link>
                </div>
                <div>
                    <Link to={`/`}>
                        Go Home
                    </Link>
                </div>
            </div>
        );

    }
}

export default AddPost;