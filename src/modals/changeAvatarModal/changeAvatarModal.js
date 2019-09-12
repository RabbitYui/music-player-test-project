import React, {Component} from "react";
import "antd/dist/antd.css";
import "./changeAvatarModal.scss"


function ChangeAvatarModal (props) {
    if (!props.show) {
        return null;
    }   else {
        return (
            <div className="modal-wrapper">
                <div className="modal-body" onClick={props.onClick}>
                    <div className="ant-modal-header">
                        Yay! I'm a modal!
                    </div>
                    <p>Some text inside</p>
                </div>
            </div>
        );
    }
}

export default ChangeAvatarModal;