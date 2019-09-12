import React, { Component } from 'react';
import "./userPrev.scss";
import ChangeAvatarModal from "../../modals/changeAvatarModal/changeAvatarModal";

let imageUrl;
class UserPrev extends Component{

    constructor(props) {
        super(props);
        this.state = {
            userName: "Yui",
            isPremium: true,
            showModal: false
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

    showModal = e => {
        this.setState({
            showModal: true
        });
    };

    render() {
        imageUrl =  "./assets/images/img/photo_2019-08-19_17-02-07.jpg";
        return (
            <div className="profile"
                 onClick={e => {
                this.showModal();
            }}>
                <div className="profile-avatar" style={ {backgroundImage: `url(${imageUrl})`}}>
                </div>
                <div className="name-info">
                    <span>{this.state.userName}</span>
                    {this.checkPremium()}
                </div>
                <ChangeAvatarModal
                show = {this.state.showModal}/>
            </div>
        );
    }
}

export default UserPrev;