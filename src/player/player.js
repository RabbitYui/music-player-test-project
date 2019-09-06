import React, { Component } from 'react';
import "./player.scss";
import MusicInfo from "./musicInfo/musicInfo";

class Player extends Component{
 render() {
     return (
         <div className="player">
            <MusicInfo
                song = {"Предел ()"}
                artist={"Корсика"}
                url = {"./assets/images/img/album-img.jpg"}
            />
         </div>
     );
 }
}

export default Player;