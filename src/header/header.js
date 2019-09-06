import React, { Component } from 'react';
import "./header.scss";
import UserPrev from "./userPrev/userPrev";

function Header() {
    return (
        <div className="header">
            <div className="search">
                <img src="./assets/images/img/Search.png" alt=""/>
                <input type="search" placeholder="Search your entertainment"/>
            </div>
            <div className="header-btn">
                <img  src="./assets/images/img/TV.png" alt=""/>
            </div>
            <div className="header-btn">
                <img  src="./assets/images/img/Radio.png" alt=""/>
            </div>
            <div className="header-btn">
                <img  src="./assets/images/img/Bell.png" alt=""/>
            </div>
            <UserPrev />
        </div>
    );
}

export default Header;