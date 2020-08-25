import React from 'react';
import { Layout, List, Avatar, Image } from 'antd';
import {
    ArrowLeftOutlined,
    EllipsisOutlined
} from '@ant-design/icons';

const img = require('./../../../../shared/images/3.jpg');

const { Content } = Layout;
const HEIGHT_HEADER = 88;

export interface IUserList {
    height?: number
}

function UserList(props: IUserList) {

    const data = [
        {
            avatar: require('./../../../../shared/images/3.jpg'),
            name: 'Ant Design Name',
            title: 'Message title 1',
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
                <div className={'wrap-message-list'}>
                    { data.map((item, key) => (
                        <div className={`message-item ${key === 0 ? 'active':''}`} key={key}>
                            <div className="message-avatar">
                                <Image src={item.avatar ? item.avatar : 'null'} onError={(e) => onImageAvatarNotFound(e, item)} />
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
                <div className="wrap-message-detail">
                    <div className="message-header-detail">
                        <div className="message-header-action float-left">
                            <ArrowLeftOutlined size={20} />
                        </div>
                        <div className="message-header-action float-right">
                            <EllipsisOutlined size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </Content>
    );
}

export default UserList;