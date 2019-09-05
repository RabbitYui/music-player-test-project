import React, { Component } from 'react';
import "./leftMenu.scss";
import {BrowserRouter as Link} from "react-router-dom";

function LeftMenu () {
        return(
            <div className="left-menu">
                <img className="main-logo" src="./images/logo.png" alt=""/>
                <ul>
                    <li>
                        <Link to="/">Discover</Link>
                    </li>
                    <li>
                        <Link to="/">Songs</Link>
                    </li>
                    <li>
                        <Link to="/">Albums</Link>
                    </li>
                    <li>
                        <Link to="/">Artists</Link>
                    </li>
                    <li>
                        <Link to="/">YouTube</Link>
                    </li>
                </ul>
                <div className="left-menu-subsection">
                    <div>My Tracks</div>
                    <ul>
                        <li>
                            <Link to="/">Favourite</Link>
                        </li>
                        <li>
                            <Link to="/">Recent History</Link>
                        </li>
                        <li>
                            <Link to="/">Download Items</Link>
                        </li>
                        <li>
                            <Link to="/">Local Files</Link>
                        </li>
                    </ul>
                </div>
                <div className="left-menu-subsection">
                    <div>Playlist</div>
                    <ul>
                        <li>
                            <Link to="/">Bangla</Link>
                        </li>
                        <li>
                            <Link to="/">English</Link>
                        </li>
                        <li>
                            <Link to="/">My Style</Link>
                        </li>
                        <li>
                            <Link to="/">Hindi</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
}

export default LeftMenu;