import React from 'react';
import {Link} from "react-router-dom";

function Navbar(props) {
    return (
        <nav className="nav">
            <Link to="/"><div className="left-div">
                <img src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png" alt="logo"/>
            </div></Link>
            <div className="search-container">
                <img src="https://img.icons8.com/pastel-glyph/64/000000/search-account.png" className="search-icon" alt="Search icon"/>
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
                        <li><Link to="/login">Log in</Link></li>
                        <li><Link to="/logout">Log out</Link></li>
                        <li><Link to="/Signup">Sign up</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;