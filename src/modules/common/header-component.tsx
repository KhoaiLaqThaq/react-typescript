import React from 'react';
import {
    Layout,
    Menu
} from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout

export interface IHeader {
    name?: string;
}

export const HeaderComponent = (props: IHeader) => {
    return (
        <Header className="header"> 
            <div className="logo"></div>
            <Menu theme="dark" mode="horizontal" defaultActiveFirst>
                <Menu.Item key="1">
                    <Link to='/'>HOME</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to='/profile'>PROFILE</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to='/messages'>MESSAGE</Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
};

HeaderComponent.defaultProps = {
    name: 'world',
};

export default HeaderComponent;
