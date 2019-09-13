import React, {Component} from "react";
// import {Button} from "antd";
import "./albums.scss";
// import "antd/dist/antd.css";


class Albums extends Component {
    render() {
        return (
            <div style={{width: "100%",
            height: "200px",
            backgroundColor: "#41ffb5",
            color: "#000",
            textAlign: "center"}} >
                <span>
                    This is albums component!
                </span>
            </div>
        );
    }
}

export default Albums;