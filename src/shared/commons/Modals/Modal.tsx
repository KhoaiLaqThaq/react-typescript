import React, { forwardRef, useImperativeHandle, useState } from 'react';
import ReactDOM from 'react-dom';
import {
    CloseCircleOutlined
} from '@ant-design/icons'
;

import './../../css/modal.scss'

export interface IModal {
    children: any
}

const Modal = forwardRef((props: IModal, ref) => {

    const [display, setDisplay] = useState(false);

    useImperativeHandle(ref, () => {
        return {
            openModal: () => open(),
            close: () => close()
        }
    });

    const open = () => {
        setDisplay(true);
    };

    const close = () => {
        setDisplay(false);
    };

    if (display) 
        return ReactDOM.createPortal(
            <div className={"modal-wrapper"}>
                <div onClick={close} className={"modal-backdrop"}/>
                <div className={"modal-box"}>
                    <div className="wrap-header-close-modal">
                        <a className={'close'} onClick={close}><CloseCircleOutlined /></a>
                    </div>
                    {props.children}
                </div>
            </div>, document.getElementById('modal-root')
        )
    
        return null;
});

export default Modal;