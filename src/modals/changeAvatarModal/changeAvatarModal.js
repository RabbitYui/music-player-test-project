import React, {ReactPropTypes} from "react";
import "antd/dist/antd.css";
import "./changeAvatarModal.scss"
import {Button, Input} from "antd";


function ChangeAvatarModal (props) {
     const onClose = e => {
          props.onClose && props.onClose(e);
     };

    if (!props.show) {
        return null;
    }   else {
        return (
            <div className="modal-wrapper">
                <div className="modal-body" >
                    <div className="ant-modal-header">
                        <h2>
                           Upload new avatar Image
                        </h2>
                    </div>
                    <div className="modal-middle">
                        <Input id="imageInput" className="image-input" placeholder="url of image" />
                    </div>
                    <div className="ant-modal-footer">
                        <Button type="primary"
                        onClick={ () => {
                           props.updateAvatar(document.getElementById('imageInput').value);
                        }}>
                        Set Avatar </ Button>
                        <Button type="danger"
                                onClick = { e => {
                                    onClose(e);
                                }}
                        >
                            Close </Button>
                    </div>
                </div>
            </div>
        );
    }
}


export default ChangeAvatarModal;