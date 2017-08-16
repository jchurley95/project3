import React, { Component } from 'react';

class Post extends Component {
    render() {
        const postTitle = this.props.title;
        const postContent = this.props.content;
        return(
            <div>
                <h2>Post Title: {postTitle}</h2>
                <p>{postContent}</p>
            </div>
        );
    }
}

export default Post;