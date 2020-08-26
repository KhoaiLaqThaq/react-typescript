import React from 'react';
import { Layout} from 'antd';
import MessageItem from '../messge-item/message-item';
import MessageControlTop from '../control-top/message-control-top';
import MessageDetail from '../message-detail/message-detail';

const { Content } = Layout;
const HEIGHT_HEADER = 88;

export interface IMessageList {
    height?: number
}

function MessageList(props: IMessageList) {

    const data = [
        {
            avatar: require('./../../../../shared/images/3.jpg'),
            name: 'Ant Design Name',
            title: 'Cờ Hó',
            lastMessage: 'A design language for background applications, is refined by hanfg de'
        },
        {
            avatar: require('./../../../../shared/images/3.jpg'),
            name: 'Ant Design Name',
            title: 'Message title 2',
            lastMessage: 'A design language for background applications, is refined by hanfg de'
        },
        {
            name: 'Ant Design Name',
            title: 'Message title 3',
            lastMessage: 'A design language for background applications, is refined by hanfg de'
        },
        {
            avatar: require('./../../../../shared/images/3.jpg'),
            name: 'Ant Design Name',
            title: 'Message title 4',
            lastMessage: 'A design language for background applications, is refined by hanfg de'
        },
        {
            name: 'Cant Design Name',
            title: 'Message title 5',
            lastMessage: 'A design language for background applications, is refined by hanfg de'
        },
        {
            avatar: require('./../../../../shared/images/3.jpg'),
            name: 'Ant Design Name',
            title: 'Message title 6',
            lastMessage: 'A design language for background applications, is refined by hanfg de'
        },
        {
            avatar: require('./../../../../shared/images/3.jpg'),
            name: 'Ant Design Name',
            title: 'Message title 6',
            lastMessage: 'A design language for background applications, is refined by hanfg de'
        },
        {
            avatar: require('./../../../../shared/images/3.jpg'),
            name: 'Ant Design Name',
            title: 'Message title 6',
            lastMessage: 'A design language for background applications, is refined by hanfg de'
        },
        {
            avatar: require('./../../../../shared/images/3.jpg'),
            name: 'Ant Design Name',
            title: 'Message title 6',
            lastMessage: 'A design language for background applications, is refined by hanfg de'
        },
        {
            avatar: require('./../../../../shared/images/3.jpg'),
            name: 'Ant Design Name',
            title: 'Message title 6',
            lastMessage: 'A design language for background applications, is refined by hanfg de'
        },
        {
            avatar: require('./../../../../shared/images/3.jpg'),
            name: 'Ant Design Name',
            title: 'Message title 6',
            lastMessage: 'A design language for background applications, is refined by hanfg de'
        },
        {
            avatar: require('./../../../../shared/images/3.jpg'),
            name: 'Ant Design Name',
            title: 'Message title 6',
            lastMessage: 'A design language for background applications, is refined by hanfg de'
        },
    ];

    const onImageAvatarNotFound = (e, item: any) => {
        e.target.onerror = null;
        const canvas = document.createElement('canvas');
        canvas.setAttribute('width', '32px');
        canvas.setAttribute('height', '32px');
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#8ac891'
        ctx.fillRect(0, 0, 48, 48);
        ctx.fillStyle = `#ccc`;
        ctx.font = "28px Noto  Sans CJK JP";
        ctx.fillText(item && item.name[0], 6, 25);
        e.target.src = canvas.toDataURL('image/jpeg', 1.0);
        return true;
    }

    return (
        <Content className="site-layout-background style-layout-content" style={{height: props.height - HEIGHT_HEADER}}>
            <div className={'wrap-messages'}>
                <MessageItem data={data} onImageAvatarNotFound={onImageAvatarNotFound}/>
                <div className="wrap-message-detail">
                    <MessageControlTop />
                    <MessageDetail height={props.height}/>
                </div>
            </div>
        </Content>
    );
}

export default MessageList;