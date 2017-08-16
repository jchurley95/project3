import React, { Component } from 'react';

class Post extends Component {
    render() {
        const postTitle = this.props.title;
        const postContent = this.props.content;
        return(
            <div className="PostContainer">
                <h2>Post Title: {postTitle}</h2>
                <p>{postContent}</p>
                <div>
                    {
                        this.props.adminView ? 
                            <div>
                                <button>Edit Project Name</button>
                                <button>Edit Piece Lengths List</button>
                                <button>Delete Project</button>
                            </div>
                            :
                            null
                    }
                </div>
            </div>
        );
    }
}

export default Post;