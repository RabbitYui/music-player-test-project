import React, {Component} from "react";
import {Button} from "antd";
import "./albums.scss";
// import "antd/dist/antd.css";


class Albums extends Component {
    render() {
        return (
            <div style={{width: "100%",
            height: "60px",
            backgroundColor: "#41ffb5"}}>
                It Works Too!
                 <Button type="primary" shape="round"> I`m a button</Button>
            </div>
        );
    }
}

export default Albums;