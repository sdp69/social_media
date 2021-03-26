import '../App.css';
import {connect} from'react-redux'
import React, {Component} from 'react';
import {fetchPosts} from "../actions/posts";
import {Home, Navbar,comp404} from "./index";
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"; //npm -i react-router-dom


class App extends Component {

    componentDidMount() {
        this.props.dispatch(fetchPosts());
    }

    render() {
        console.log(`App store:`, this.props);
        const {posts} = this.props;
        return (
            <Router>
                <div>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/" render={(props) => {
                            return <Home {...props} posts={posts}/>
                        }}></Route>
                        <Route component={comp404}></Route>
                    </Switch>
                </div>
            </Router>
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