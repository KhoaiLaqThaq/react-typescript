import React from 'react';
import {
    Layout,
    Menu
} from 'antd';
import {
    PlusOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom';

const { Header } = Layout;

export interface IHeader {
    name?: string;
    openPopup: () => void;
}

export const HeaderComponent = (props: IHeader) => {
    return (
        <Header className="header"> 
            <div className="logo"></div>
            <Menu theme="dark" mode="horizontal" defaultActiveFirst>
                <Menu.Item key="1">
                    <Link to='/'>Sổ Giao dịch</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to='/profile'>Báo cáo</Link>
                </Menu.Item>
                <Menu.Item key="5" className={'ant-menu-item-add'}>
                    <div className={'menu-item-center'} onClick={props.openPopup}>
                        <div className="menu-item-line">
                            <PlusOutlined />
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to='/planning'>Lập kế hoạch</Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to='/account'>Tài khoản</Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
};

HeaderComponent.defaultProps = {
    name: 'world',
};

export default HeaderComponent;
