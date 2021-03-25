import React, {Component} from 'react';
import connect from "react-redux/lib/connect/connect";
import PropTypes from 'prop-types';


class PostLists extends Component {

    render() {
        const posts = this.props.posts;
        return (
            <div className="posts-list">
                {posts.map((post) => {
                    return (
                        <div className="post-wrapper" key={post.id}>
                            <div className="post-header">
                                <div className="post-avatar">
                                    <img src="https://img.icons8.com/pastel-glyph/64/000000/user-male--v1.png"/>
                                    <div><span className="post-author">{post.owner.firstName +" "+post.owner.lastName}</span>
                                        <span className="post-time">{post.publishDate}</span>
                                    </div>
                                </div>
                                <div className="post-content">{post.text}</div>
                                <div className="post-actions">
                                    <div className="post-like">
                                        <img src="https://img.icons8.com/pastel-glyph/64/000000/facebook-like--v1.png"/>
                                        <span>{post.likes}</span>
                                    </div>
                                    <div className="post-comments-icon">
                                        <img src="https://img.icons8.com/nolan/96/topic.png"/>
                                        <span>12</span>
                                    </div>
                                </div>
                                <div className="post-comment-box">
                                    <input placeholder="Start typing a comment"/></div>
                                <div className="post-comments-list">
                                    <div className="post-comments-icon">
                                        <div className="post-comments-header">
                                            <span className="post-comment-author">Bill</span>
                                            <span className="post-comment-time">a minute ago</span>
                                            <span className="post-comment-likes">22</span>
                                        </div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}
PostLists.propTypes = {
    posts: PropTypes.array.isRequired,

};
export default PostLists;
