import React, { Component } from 'react';
import "./userPrev.scss";

let imageUrl;
class UserPrev extends Component{

    constructor(props) {
        super(props);
        this.state = {
            userName: "Yui",
            isPremium: true
        }
    }



    checkPremium () {
        if (this.state.isPremium) {
            return (
                <div className="premium">
                    <img className="premium-image" src="./assets/images/img/Crown.png" alt=""/>
                    <span className="premium-text">Premium</span>
                </div>
            );
        }
    }

    render() {
        imageUrl =  "./assets/images/img/photo_2019-08-19_17-02-07.jpg";
        return (
            <div className="profile">
                <div className="profile-avatar" style={ {backgroundImage: `url(${imageUrl})`}}>
                </div>
                <div className="name-info">
                    <span>{this.state.userName}</span>
                    {this.checkPremium()}
                </div>
            </div>
        );
    }
}

export default UserPrev;