import React from 'react';
import { Layout} from 'antd';
import MessageItemList from '../messge-item/message-item-list';
import MessageControlTop from '../control-top/message-control-top';
import MessageDetail from '../message-detail/message-detail';
import { v4 as uuidv4 } from 'uuid';

const { Content } = Layout;

export interface IMessageList {
    height?: number
}

function MessageList(props: IMessageList) {

    const data = [
        {
            id: uuidv4(),
            avatar: require('./../../../../shared/images/3.jpg'),
            name: 'Ant Design Name',
            title: 'Cờ Hó',
            lastMessage: 'A design language for background applications, is refined by hanfg de'
        },
        {
            id: uuidv4(),
            avatar: require('./../../../../shared/images/3.jpg'),
            name: 'Ant Design Name',
            title: 'Message title 2',
            lastMessage: 'A design language for background applications, is refined by hanfg de'
        },
        {
            id: uuidv4(),
            name: 'Ant Design Name',
            title: 'Message title 3',
            lastMessage: 'A design language for background applications, is refined by hanfg de'
        },
        {
            id: uuidv4(),
            avatar: require('./../../../../shared/images/3.jpg'),
            name: 'Ant Design Name',
            title: 'Message title 4',
            lastMessage: 'A design language for background applications, is refined by hanfg de'
        },
        {
            id: uuidv4(),
            name: 'Cant Design Name',
            title: 'Message title 5',
            lastMessage: 'A design language for background applications, is refined by hanfg de'
        },
        {
            id: uuidv4(),
            avatar: require('./../../../../shared/images/3.jpg'),
            name: 'Ant Design Name',
            title: 'Message title 6',
            lastMessage: 'A design language for background applications, is refined by hanfg de'
        },
        {
            id: uuidv4(),
            avatar: require('./../../../../shared/images/3.jpg'),
            name: 'Ant Design Name',
            title: 'Message title 6',
            lastMessage: 'A design language for background applications, is refined by hanfg de'
        },
        {
            id: uuidv4(),
            avatar: require('./../../../../shared/images/3.jpg'),
            name: 'Ant Design Name',
            title: 'Message title 6',
            lastMessage: 'A design language for background applications, is refined by hanfg de'
        },
        {
            id: uuidv4(),
            avatar: require('./../../../../shared/images/3.jpg'),
            name: 'Ant Design Name',
            title: 'Message title 6',
            lastMessage: 'A design language for background applications, is refined by hanfg de'
        },
        {
            id: uuidv4(),
            avatar: require('./../../../../shared/images/3.jpg'),
            name: 'Ant Design Name',
            title: 'Message title 6',
            lastMessage: 'A design language for background applications, is refined by hanfg de'
        },
        {
            id: uuidv4(),
            avatar: require('./../../../../shared/images/3.jpg'),
            name: 'Ant Design Name',
            title: 'Message title 6',
            lastMessage: 'A design language for background applications, is refined by hanfg de'
        },
        {
            id: uuidv4(),
            avatar: require('./../../../../shared/images/3.jpg'),
            name: 'Ant Design Name',
            title: 'Message title 6',
            lastMessage: 'A design language for background applications, is refined by hanfg de'
        },
    ];

    return (
        <Content className="site-layout-background style-layout-content">
            <div className={'wrap-messages'}>
                <MessageItemList data={data}/>
                <div className="wrap-message-detail">
                    <MessageControlTop />
                    <MessageDetail height={props.height}/>
                </div>
            </div>
        </Content>
    );
}

export default MessageList;