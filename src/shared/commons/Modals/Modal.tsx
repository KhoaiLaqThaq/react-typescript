import React, { forwardRef, useImperativeHandle, useState } from 'react';
import ReactDOM from 'react-dom';
import {
    CloseOutlined
} from '@ant-design/icons';

import './../../css/modal.scss'
import useEventListener from '../../utils/use-event-listener';

export interface IModal {
    children: any,
    allowCloseEscKey?: boolean,
    allowCloseBackdrop?: boolean
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

    const onCloseBackdrop = () => {
        if (props.allowCloseBackdrop) {
            close();
        }
    }

    // listener event key down esc (27) to close modal
    const onCloseListenEscKey = (e) => {
        if ( props.allowCloseEscKey && e.keyCode === 27) {
            close();
        }
    }

    useEventListener('keydown', onCloseListenEscKey);

    if (display) 
        return ReactDOM.createPortal(
            <div className={"modal-wrapper"}>
                <div onClick={onCloseBackdrop} className={"modal-backdrop"}/>
                <div className={"modal-box"}>
                    <div className="wrap-header-close-modal">
                        <div className={'close'} onClick={close}><CloseOutlined /></div>
                    </div>
                    {props.children}
                </div>
            </div>, document.getElementById('modal-root')
        )
    
        return null;
});

export default Modal;