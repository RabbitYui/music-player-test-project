import React, { Component, ReactPropTypes } from 'react';
import "./userPrev.scss";
import ChangeAvatarModal from "../../modals/changeAvatarModal/changeAvatarModal";

let imageUrl = "./assets/images/img/photo_2019-08-19_17-02-07.jpg";
class UserPrev extends Component{

    constructor(props) {
        super(props);
        this.state = {
            userName: "Yui",
            isPremium: true,
            show: false,
            url: imageUrl
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
            show: true
        });
    };

    closeModal = e => {
      this.setState({
          show: !this.state.show
      });
    };

    updateAvatar = (url) => {
      this.setState({
          url: url,
          show: !this.state.show
      });
    };

    render() {
        return (
            <div>
                <div className="profile"
                     onClick={e => {
                         this.showModal();
                     }}>
                    <div className="profile-avatar" style={ {backgroundImage: `url(${this.state.url})`}}>
                    </div>
                    <div className="name-info">
                        <span>{this.state.userName}</span>
                        {this.checkPremium()}
                    </div>
                </div>
                <ChangeAvatarModal
                    show = {this.state.show}
                    onClose = {this.closeModal}
                    updateAvatar={this.updateAvatar}/>
            </div>

        );
    }
}

export default UserPrev;