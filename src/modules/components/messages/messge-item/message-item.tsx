import React from 'react';
import { Image } from 'antd';

export interface IMessageItem {
    data: any,
    onImageAvatarNotFound: (e, item: any) => void
}

function MessageItem(props: IMessageItem) {
    return (
        <div className={'wrap-message-list'}>
            { props.data && props.data.map((item, key) => (
                <div className={`message-item ${key === 0 ? 'active':''}`} key={key}>
                    <div className="message-avatar">
                        <Image src={item.avatar ? item.avatar : 'null'} onError={(e) => props.onImageAvatarNotFound(e, item)} />
                    </div>
                    <div className={'message-text'}>
                        <div className="title">
                            {item.title}
                        </div>
                        <div className="last-message">
                            {item.lastMessage}
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    );
}

export default MessageItem;