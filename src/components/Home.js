import React, {Component} from 'react';
import PostLists from "./postLists";

class Home extends Component {
    render() {
        const posts = this.props;
        console.log(this.props);
        return (
            <div className="home">
                <PostLists posts={posts.posts}/>
            </div>
        );
    }
}

export default Home;