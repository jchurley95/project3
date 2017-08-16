import React, { Component } from 'react';

class Post extends Component {
    constructor() {
        super();

        this.state = {
            changeTitleActive: false,
            changeContentActive: false,
            adminView: false
        }
    }

    _toggleChangeTitle = () => {
        const changeTitleActive = !this.state.changeTitleActive;
        this.setState({changeTitleActive});
    };
    _toggleChangeContent = () => {
        const changeContentActive = !this.state.changeContentActive;
        this.setState({changeContentActive});
    };
    render() {
        const postTitle = this.props.title;
        const postContent = this.props.content;
        return(
            <div className="PostContainer">
                <h2>Post Title: {postTitle}</h2>
                <hr />
                {/* <div>
                    {
                        this.state.changeTitleActive ? 
                            <input 
                                type='text' 
                                placeholder={postTitle}
                                onChange={this.props.handlePostTitleChange}
                                value={postTitle}/>
                            :
                            null
                    }
                </div> */}
                {/* <div>
                    {
                        this.props.adminView ? 
                            <div>
                                <button onClick={this._toggleChangeTitle}>
                                    {this.state.changeTitleActive
                                        ? 'Done Editing'
                                        : 'Edit Post Title'}
                                </button>
                            </div>
                            :
                            null
                    }
                </div> */}
                <p>{postContent}</p>
                {/* <div>
                    {
                        this.state.changeContentActive ? 
                            <input 
                                type='text' 
                                value={postContent}
                                onChange={this.props.handlePostContentChange}/>
                            :
                            null
                    }
                </div> */}
                {/* <div>
                    {
                        this.props.adminView ? 
                            <div>
                                <button onClick={this._toggleChangeContent}>
                                    {this.state.changeContentActive
                                        ? 'Done Editing'
                                        : 'Edit Content'}
                                </button> 
                                <br />
                                <hr />
                                <button onClick={this.props.deletePost}>Delete Post</button>
                            </div>
                            :
                            null
                    }
                </div> */}
            </div>
        );
    }
}

export default Post;