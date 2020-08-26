import React, { useState, useEffect } from 'react';
import { Image } from 'antd';
import { THEME_MESSAGE } from '../constant';

export interface IMessageDetailItem {
    key?: any,
    item: any,
}

function MessageDetailItem(props: IMessageDetailItem) {

    const [item, setItem] = useState(null);
    const [colorThemeMessage, setColorThemeMessage] = useState({right: THEME_MESSAGE.DEFAULT.RIGHT, left: THEME_MESSAGE.DEFAULT.LEFT});
    const [changeThemeMessage, setChangeThemeMessage] = useState(false);
    const [showMessageDetail, setShowMessageDetail] = useState(false);

    useEffect(() => {
        if (props.item) {
            setItem(props.item);
        }
    }, [props.item]);

    useEffect(() => {
        if (changeThemeMessage) {
            setColorThemeMessage({
                'right': THEME_MESSAGE.DEFAULT.RIGHT,
                'left': THEME_MESSAGE.DEFAULT.LEFT
            });
        }
    }, [changeThemeMessage])

    const onShowMessageTimeAndSender = () => {
        setShowMessageDetail(!showMessageDetail);
    }

    const renderMessagerMe = (key, message) => (
        <div key={key} className={`message-item right ${showMessageDetail ? 'active':''}`}>
            <div className="message-text" 
                style={{ background: colorThemeMessage.right }}
                onClick={onShowMessageTimeAndSender}
            >
                <span>{message.message}</span>
            </div>
            {showMessageDetail && message.sent && (
                <>
                    <div className={'message-time'}>{message.sent}</div>
                    <div className="message-sender">Sent by {message.name}</div>
                </>
            )}
            <div className="message-option"></div>
        </div>
    )

    const renderMessagerClient = (key, message) => (
        <div key={key} className={`message-item left ${showMessageDetail ? 'active':''}`}>
            <div className="message-avatar">
                <Image src={message.avatar}/>
            </div>
            <div className="message-text"
                style={{ background: colorThemeMessage.left }}
                onClick={onShowMessageTimeAndSender}
            >
                <span>{message.message}</span>
            </div>
            {showMessageDetail && (
                <>
                    <div className={'message-time'}>{message.sent}</div>
                    <div className="message-sender">Sent by {message.name}</div>
                </>
            )}
            <div className="message-option"></div>
        </div>
    )

    return (
        item && (item.isMe ?
            renderMessagerMe(props.key, item) :
            renderMessagerClient(props.key, item))
    );
}

export default MessageDetailItem;