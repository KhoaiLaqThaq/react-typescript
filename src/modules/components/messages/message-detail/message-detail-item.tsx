import React, { useState, useEffect, useRef } from 'react';
import { Image } from 'antd';
import {
    MoreOutlined
} from '@ant-design/icons';
import { THEME_MESSAGE, THEME_ACTIVE } from '../constant';
import useEventListener from '../../../../shared/utils/use-event-listener';

export interface IMessageDetailItem {
    key?: any,
    item: any,
    themeMessage?: number
}

function MessageDetailItem(props: IMessageDetailItem) {

    const [item, setItem] = useState(null);
    const [colorThemeMessage, setColorThemeMessage] = useState(THEME_MESSAGE.DEFAULT.RIGHT);
    // const [changeThemeMessage, setChangeThemeMessage] = useState(false);
    const [showMessageDetail, setShowMessageDetail] = useState(false);
    const [showOptionsOther, setShowOptionsOther] = useState(false);
    const optionRef = useRef(null);

    useEffect(() => {
        if (props.item) {
            setItem(props.item);
        }
    }, [props.item]);

    useEffect(() => {
        switch (props.themeMessage) {
            case THEME_ACTIVE.DEFAULT:
                setColorThemeMessage(THEME_MESSAGE.DEFAULT.RIGHT);
                break;
            case THEME_ACTIVE.THEME_1:
                setColorThemeMessage(THEME_MESSAGE.THEME_1.RIGHT);
                break;
            case THEME_ACTIVE.THEME_2:
                setColorThemeMessage(THEME_MESSAGE.THEME_2.RIGHT);
                break;
            case THEME_ACTIVE.THEME_3:
                setColorThemeMessage(THEME_MESSAGE.THEME_3.RIGHT);
                break;
            case THEME_ACTIVE.THEME_4:
                setColorThemeMessage(THEME_MESSAGE.THEME_4.RIGHT);
                break;
            case THEME_ACTIVE.THEME_5:
                setColorThemeMessage(THEME_MESSAGE.THEME_5.RIGHT);
                break;
            default:
                break;
        }
    }, [props.themeMessage]);

    const onShowMessageTimeAndSender = () => {
        setShowMessageDetail(!showMessageDetail);
    }
    
    const onShowOptionsOther = () => {
        setShowOptionsOther(true);
    }

    const handleShowOptionsOther = (event) => {
        if (optionRef && optionRef.current && !optionRef.current.contains(event.target)) {
            setShowOptionsOther(false);
        }
    }

    const renderOptionOther = (isMe: boolean) => (
        <div className={`message-option-other`} style={{ display: showOptionsOther ? 'block':'none' }} ref={optionRef}>
            <ul>
                {isMe && (<li key={1}>Chỉnh sửa</li>)}
                <li key={2}>Sao chép</li>
                <li key={3}>Trích dẫn</li>
                <li key={4}>Chuyển tiếp</li>
                { isMe ? (<li key={5}>Xóa</li>) : (<li key={6}>Báo cáo</li>)
                }
            </ul>
        </div>
    );

    /**
     * render message of me
     * @param key 
     * @param message 
     */
    const renderMessagerMe = (key, message) => (
        <div key={key} className={`message-item right ${showMessageDetail ? 'active':''}`}>
            <div className="message-text" 
                style={{ background: colorThemeMessage }}
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
            <div className="message-option">
                <MoreOutlined title={'Tùy chọn khác'} onClick={onShowOptionsOther}/>
                {renderOptionOther(message.isMe)}
            </div>
        </div>
    )

    /**
     * render message of user other
     * @param key 
     * @param message 
     */
    const renderMessagerClient = (key, message) => (
        <div key={key} className={`message-item left ${showMessageDetail ? 'active':''}`}>
            <div className="message-avatar">
                <Image src={message.avatar}/>
            </div>
            <div className="message-text"
                style={{ background: THEME_MESSAGE.DEFAULT.LEFT }}
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
            <div className="message-option">
                <MoreOutlined title={'Tùy chọn khác'} onClick={onShowOptionsOther}/>
                { renderOptionOther(message.isMe) }
            </div>
        </div>
    )

    useEventListener('mousedown', handleShowOptionsOther);

    return (
        item && (item.isMe ?
            renderMessagerMe(props.key, item) :
            renderMessagerClient(props.key, item))
    );
}

export default MessageDetailItem;