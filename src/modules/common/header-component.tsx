import React from 'react';
import {
    Layout,
    Menu
} from 'antd';

const { Header } = Layout

export interface IHeader {
    name?: string;
}

export const HeaderComponent = (props: IHeader) => {
    return (
        <Header className="header"> 
            <div className="logo"></div>
            <Menu theme="dark" mode="horizontal" defaultActiveFirst>
                <Menu.Item key="1">HOME</Menu.Item>
                <Menu.Item key="2">PROFILE</Menu.Item>
                <Menu.Item key="3">SETUP</Menu.Item>
            </Menu>
        </Header>
    );
};

HeaderComponent.defaultProps = {
    name: 'world',
};

export default HeaderComponent;
