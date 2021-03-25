import '../App.css';
import {connect} from'react-redux'
import React, {Component} from 'react';
import {fetchPosts} from "../actions/posts";
import {PostLists} from "./index";
import PropTypes from 'prop-types';


class App extends Component {

    componentDidMount() {
        this.props.dispatch(fetchPosts());
    }

    render() {
        console.log(`App store:`, this.props);
        const {posts} = this.props;
        return (
            <div>
                <nav className="nav">
                    <div className="left-div">
                        <img src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png" alt="logo"/>
                    </div>
                    <div className="search-container">
                        <img src="https://img.icons8.com/pastel-glyph/64/000000/search-account.png" className="search-icon"/>
                        <input placeholder="search"/>
                        <div className="search-results">
                            <ul>
                                <li className="search-results-row">
                                    <img src="https://img.icons8.com/pastel-glyph/64/000000/user-male--v1.png" alt="user-dp"/>
                                    <span>John Doe</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-nav">
                        <div className="user">
                            <img src="https://img.icons8.com/pastel-glyph/64/000000/user-male--v1.png" alt="user-dp"
                            id="user-dp"/>
                            <span>John Doe</span>
                        </div>
                        <div className="nav-links">
                            <ul>
                                <li>Log in</li>
                                <li>Log out</li>
                                <li>Register</li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <PostLists posts={posts}/>
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        posts: state.posts
    }
};
App.propTypes = {
    posts: PropTypes.array.isRequired
};
export default connect(mapStateToProps)(App);

/*we are using prop-types package to so that whenever we pass props to different components we make sure
that we work with real datas instead of undefined.
 */