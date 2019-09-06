import React from 'react';
import "./musicInfo.scss";

function MusicInfo(props) {
    return (
        <div className="music-info">
            <div className="music-info-pic" style={ {backgroundImage: `url(${props.url})`}}>
            </div>
            <div className="music-info-text">
                <span className="music-info-text-song">
                    {props.song}
                </span>
                <span className="music-info-text-artist">
                    {props.artist}
                </span>
            </div>
            <div className="music-info-playlist">
                <svg width="13" height="10" viewBox="0 0 13 10" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 4.90002C13 4.34774 12.5523 3.90002 12 3.90002H1C0.447715 3.90002 0 4.34774 0 4.90002C0 5.45231 0.447715 5.90002 1 5.90002H12C12.5523 5.90002 13 5.45231 13 4.90002Z" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 1C13 0.447715 12.5523 0 12 0H1C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2H12C12.5523 2 13 1.55228 13 1Z" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 8.90002C9 8.34774 8.55229 7.90002 8 7.90002H1C0.447715 7.90002 0 8.34774 0 8.90002C0 9.45231 0.447715 9.90002 1 9.90002H8C8.55229 9.90002 9 9.45231 9 8.90002Z" />
                </svg>
            </div>
        </div>
    );
}

export default MusicInfo;